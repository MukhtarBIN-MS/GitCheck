import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "./color";
import questions from "./questions.json";

const QuesAnsPair = (props) => {
  const [selected, setSelected] = useState({});
  const [score, setScore] = useState({});

  useEffect(() => {
    var arr = Object.values(score);
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
      temp = temp + arr[i];
    }
    final_score = temp;
    props.getScore(final_score);
    props.get_selected(selected);
  }, [score, props.index]);

  var final_score;
  const handleNext = async (selectedAns, achieved_score) => {
    setSelected({ ...selected, [props.index]: selectedAns });
    setScore({ ...score, [props.index]: achieved_score });
    props.is_next();
  };

  return (
    <>
      <View style={styles.questionContainer}>
        <Text style={styles.questionIndex}>Question {props.index + 1} / {questions["questions"].length} </Text>
        <Text style={styles.questionText}>{props.question}</Text>
      </View>
      <View style={{ borderRadius: 5, borderWidth: 1, borderColor: Colors.primary, margin:15 }}>
        <View style={styles.selectedAnswerContainer}>
          <Text style={styles.selectedAnswer}>
            Selected Option:{" "}
            {selected[props.index] === undefined ? (
              <Text>____</Text>
            ) : (
              selected[props.index]
            )}{" "}
          </Text>
        </View>

        <View style={styles.answersContainer}>
          {props.answers.map((ans, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.answer}
                onPress={handleNext.bind(this, ans["option"], ans["value"])}
              >
                <View>
                  <Text style={styles.answerText}>{`${ans['option']} -> ${ans["label"]}`}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
    margin: 10,
    padding: 15,
    minHeight: "25%",
  },
  questionIndex: {
    textAlign: "center",
    fontSize: 22,
    marginBottom: 15,
    fontWeight: "bold",
    color: Colors.primary,
  },
  questionText: {
    fontSize: 15,
    textAlign: "center",
    fontFamily:'serif'
  },
  answersContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  answer: {
    backgroundColor: Colors.accentSecondary,
    padding: 10,
    width: "85%",
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  answerText: {
    fontSize: 13,
    color: "#fff",
    fontFamily:'serif'

  },
  selectedAnswer: {
    fontSize: 14,
    color: Colors.primary,
  },
  selectedAnswerContainer: {
    marginVertical: 8,
    alignItems: "center",
  },
});

export default QuesAnsPair;
