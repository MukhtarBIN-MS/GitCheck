import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import ProfileInfo from "../components/User/ProfileInfo";
import User from "../components/User/Users";
import Splash from "./Splash";

const Prof = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("null");
  const [loading, setLoading] = useState(false);
  const [animating, setAnimating] = useState(false);

  const fetchDetails = () => {
    if (!query) {
      alert("Please type the username");
    } else {
      setLoading(true);
      setAnimating(true);
      fetch(`https://api.github.com/users/${query}`)
        .then((response) => response.json())
        .then(setUser)
        .then(setQuery(""))
        .then(() => setLoading(false))
        .then(()=> setAnimating(false))
        .catch(setError);
    }
  };
  useEffect(() => {
    fetchDetails;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
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
          <TextInput
            style={{
              height: 40,
              width: 290,
              marginRight: 7,
              borderWidth: 1,
              padding: 10,
              borderRadius: 7,
            }}
            onChangeText={setQuery}
            value={query}
            placeholder="Search git username e.g MukhtarBIN-MS"
          />

          <TouchableOpacity onPress={fetchDetails}>
            <Icon
              style={{ marginTop: 5 }}
              name="search"
              size={30}
              color="#900"
            />
          </TouchableOpacity>
        </View>
        <View>
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
            <Text style={{ fontFamily:'serif', fontSize:20}}>
             {`Searching ........`}
            </Text>
            </View>
          ) : user ? (
            <Splash user={user} />
          ) : (
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Prof;
