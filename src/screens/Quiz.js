import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from "react-native";
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import questions from "./questions.json";
import QuesAnsPair from "./QuesAnsPair";
import Header from "../components/Header";
import Colors from "./color";

const Quiz = (props) => {


  const [questionIndex, setQuestionIndex] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const [take, setTake] = useState(true);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [animating, setAnimating] = useState(true);
  const [timerCount, setTimer] = useState(10)

 
 
 
  const handleQuizTraversal = () => {
    if (questionIndex === questions["questions"].length - 1) {
      score < questions["questions"].length / 2
        ? Alert.alert(
            "Quiz Result",
            "You score " +
              score +
              " out of " +
              questions["questions"].length +
              " please study well again",
            [
              {
                text: "Ok",
                onPress: () => setTake(true),
                style: "cancel",
              },
              { text: "Quit", onPress: () => setTake(true) },
            ]
          )
        : Alert.alert(
            "Quiz Result",
            " Great !! You score " +
              score +
              " out of " +
              questions["questions"].length,
            [
              {
                text: "Ok",
                onPress: () => setTake(true),
                style: "cancel",
              },
              { text: "Quit", onPress: () => setTake(true) },
            ]
          );

      setQuestionIndex(0);
      setShowNext(false);
      setScore(0);
      setSelected({});

      return;
    }
    setQuestionIndex((questionIndex) => questionIndex + 1);
    setShowNext(false);
  };

  const is_next = () => {
    setShowNext(true);
  };

  const get_Score = (score) => {
    setScore(score);
  };

  const getSelected = (selected) => {
    setSelected(selected);
  };
  const Handle = () => {
    setTake(false);
    setLoading(true);
  };
  const Handle2 = () => {
    setTake(false);
    setLoading(false);
 
  
  };
  const Quit = () => {
    setTake(true);

  };
  const Showloading = () => {
    setTimeout(() => {
      return (
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Header />
          <ActivityIndicator
            animating={animating}
            color="#900"
            size="large"
            style={{
              alignItems: "center",
              marginTop: 170,
              marginBottom: 30,
              justifyContent: "center",
            }}
          />
          <Text style={styles.text}>{`Searching ........`}</Text>
        </View>
      );
    }, 5000);
    setAnimating(false);
    setLoading(false);
    setTake(false);
  };

  return (
    <View style={styles.screen}>
      {take ? (
        <SafeAreaView>
          <Header />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 30,
                backgroundColor: "#900",
                padding: 10,
                width: 150,
                borderRadius: 190,
                borderWidth: 1,
                marginTop:30,
                borderColor: Colors.primary,
              }}
              onPress={Handle}
            >
              <Text style={{ color: "#fff" }}>Take Quiz</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : loading ? (
        <View
          style={{
            flexDirection: "column",
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <Header />
          <ActivityIndicator
            animating={animating}
            color="#900"
            size="large"
            style={{
              alignItems: "center",
              marginTop: 170,
              marginBottom: 30,
              justifyContent: "center",
            }}
          />

          <TouchableOpacity onPress={Handle2}>
            <View style={styles.nwbtn}>
              <Text style={styles.ready}>I'm ready</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.button}>
            <TouchableOpacity style={styles.btn} onPress={Quit}>
              <Text style={{ fontWeight: "bold", color: "#fff" }}>Quit</Text>
            </TouchableOpacity>
           
          </View>
          <QuesAnsPair
            question={questions["questions"][questionIndex]["questionText"]}
            index={questionIndex}
            answers={questions["questions"][questionIndex]["answers"]}
            is_next={is_next}
            getScore={get_Score}
            length={questions["questions"].length}
            get_selected={getSelected}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.backButton}>
              {(showNext && questionIndex > 0) ||
              (selected[questionIndex] !== undefined && questionIndex > 0) ? (
                questionIndex === questions["questions"].length - 1 ? null : (
                  <TouchableOpacity
                    onPress={() => setQuestionIndex((index) => index - 1)}
                    style={styles.nwbtn}
                  >
                    <Text
                      style={{
                        fontFamily: "serif",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Back
                    </Text>
                  </TouchableOpacity>
                )
              ) : null}
            </View>
            {showNext || selected[questionIndex] !== undefined ? (
              <View >
                <TouchableOpacity
                  onPress={handleQuizTraversal} style={styles.nwbtn}>
                  <Text
                    style={{
                      fontFamily: "serif",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    {questionIndex === questions["questions"].length - 1
                      ? "score "
                      : "next"}
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen:{
     flexDirection:'column'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  backButton: {
    marginRight: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    marginTop: 10,
  },
  btn: {
    backgroundColor: "red",
    padding: 10,
    marginTop:20,
    width: "65%",
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  nwbtn: {
    backgroundColor: Colors.primary,
    padding: 10, 
    width: 150,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems:"center",
    marginBottom: 70,
    justifyContent:"center",
  },

  ready: {
    alignItems: "center",
    color: "#fff",
    justifyContent: "center",
    fontFamily: "serif",
    fontSize: 15,
  },
});

export default Quiz;
