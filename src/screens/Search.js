import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar
} from "react-native";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import ProfileInfo from "../components/User/ProfileInfo";
import User from "../components/User/Users";
import Splash from "./Splash";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [animating, setAnimating] = useState(false);

  const fetchUsers = () => {
    if (!query) {
      alert("Please type the username");
    } else {
      setLoading(true);
      setAnimating(true);
      fetch(`https://api.github.com/search/users?q=${query} in:login type:user`)
        .then((response) => response.json())
        .then(setUser)
        .then(() => setLoading(false))
        .then(() => setAnimating(false))
        // .then(setQuery(""));
    }
  };

  useEffect(() => {
    fetchUsers;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
      <StatusBar backgroundColor="#900" barStyle='light-content' />
      <ScrollView>
        <Header />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <TouchableOpacity  onPress={fetchUsers}>
           <Icon
              style={{ marginTop: 5, marginRight: 7, marginLeft:3 }}
              name="arrow-left"
              size={30}
              color="#900"
            />
            </TouchableOpacity>
          <TextInput
            style={{
              height: 40,
              width: 300,
              marginRight: 7,
              borderWidth: 1,
              padding: 10,
              borderRadius: 7,
            }}
            onChangeText={setQuery}
            value={query}
            placeholder="Search github username e.g MukhtarBIN-MS"
          />

          <TouchableOpacity onPress={fetchUsers}>
            <Icon
              style={{ marginTop: 5, marginRight:3 }}
              name="search"
              size={30}
              color="#900"
            />
          </TouchableOpacity>
        </View>

        {loading ? (
          <View style={{ flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <ActivityIndicator
              animating={animating}
              color="#900"
              size="large"
              style={{
                alignItems: "center",
                marginTop: 170,
                marginBottom:30,
                justifyContent: "center",
              }}
            />
            <Text style={styles.text}>
             {`Searching ........`}
            </Text>
          </View>
        ) 
        : user ? (
          <> 
          <View style={{alignItems:'center'}}>
              <Text
                style={styles.resultMessage}
              >{`Found ${user.total_count} results`}</Text>
          </View>
          
            <User  users_items={user.items} />
          
          </>
        ) 
          :
        (
          <View
            style={{
              alignItems: "center",
              marginTop: 170,
              justifyContent: "center",
            }}
          >
            <Text style={{ opacity: 0.5 }}>Search Github Users Here</Text>
          </View>
        )}
        {/* </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  resultMessage: {
    marginBottom: 20,
    alignItems:'center',
    borderColor: "black",
    color: "#fff",
    backgroundColor: "green",
    borderStyle: "solid",
    borderWidth: 0.7,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopRightRadius: 10,
    borderRadius: 50,
    padding: 10,
    borderRadius: 10,
    fontFamily: "serif",
  },
  text:{
    fontFamily:'serif',
    fontSize:20
  }
  
});
