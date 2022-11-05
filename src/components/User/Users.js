import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import NoAvatar from "../../Images/noavatar2.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileInfo from "./ProfileInfo";
import Splash from "../../screens/Splash";

const Users = ({ users_items  }) => {
  const [profile, setProfile] = useState(null);
  const [isProfile, setIsProfile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [animating, setAnimating] = useState(false);

  const fetchDetails = (user) => {
    setLoading(true);
    setAnimating(true);
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then(setProfile)
      .then(() => setLoading(false))
      .then(() => setAnimating(false))
      .then(() => setIsProfile(true));
  };
  // useEffect(() => {
  //   fetchDetails;
  // }, []);

  return (
    <ScrollView>
      {loading ? (
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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
          <Text style={styles.text}>{`Getting info ........`}</Text>
        </View>
      ) : profile ? (
        <Splash user={profile} />
      ) : (

        users_items.map((user) => (
             <TouchableOpacity
              onPress={() => fetchDetails(user.login)}
              key={user.html_url}
            >
              <View style={styles.container}>
                <Image style={styles.image} source={{ uri: user.avatar_url }} />
                <View style={StyleSheet.textContainer}>
                  <Text style={{ color: "#333", fontFamily: "serif" }}>
                    {user.login}
                  </Text>
                  <Text
                    style={{
                      color: "blue",
                      textAlign: "justify",
                      fontSize: 12,
                    }}
                  >
                    {user.html_url}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{
                    marginRight: 10,
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <MaterialCommunityIcons
                    name="arrow-right-circle-outline"
                    color="#900"
                    size={27}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
        
        ))
      )}
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 0.7,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopRightRadius: 10,
    borderRadius: 50,
    padding: 15,
    borderRadius: 10,
  },
  resultMessage: {
    marginBottom: 20,
    alignItems: "center",
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
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    marginRight: 10,
    width: 100,
    height: 100,
    borderRadius: 7,
  },
  text: {
    fontFamily: "serif",
    fontSize: 20,
  },
});
