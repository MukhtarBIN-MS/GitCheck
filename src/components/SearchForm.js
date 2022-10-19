import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, TextInput, Text, ActivityIndicator, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ProfileInfo from "./User/ProfileInfo";
import ContextInfo from "./User/ContextInfo";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState("null");
  const [error, setError] = useState("null");
  const [loading, setLoading ] = useState(false);
  const [animating, setAnimating] = useState(true);

  const fetchDetails = () => {
     setLoading(true);
      fetch(`https://api.github.com/users/${query}`)
        .then((response) => response.json())
        .then(setUser)
        .then(setLoading(false))
        .catch(setError)
  };
  useEffect(() => {
   fetchDetails
  }, []);

  setTimeout(() => {
    setAnimating(false);

  }, 3000);
 
  if (loading) 
  return (
    <ActivityIndicator
    animating={animating}
    color="#900"
    size="large"
    style={{alignItems: 'center',height: 80,}}
  />
  )

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
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
        <Icon style={{ marginTop: 5 }} name="search" size={30} color="#900" />
      </TouchableOpacity>
      {user ? (
        <View>
          <ProfileInfo user={user} />
        </View>
      ) : (
        <View style={{ alignItems:'center', justifyContent:'center'}}>
          <Text>Search Github Users Here</Text>
        </View>
      )}
    </View>
  );
};

export default SearchForm;
