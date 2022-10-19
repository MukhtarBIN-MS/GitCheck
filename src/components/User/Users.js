import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import NoAvatar from "../../Images/noavatar2.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProfileInfo from "./ProfileInfo";
import Splash from "../../screens/Splash";

const Users = ({ users_items }) => {

  return (
    <ScrollView>
      {users_items.map((user) => (
          <TouchableOpacity key={user.html_url} onPress={() => (<Splash user={user.html_url}/>)}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{ uri:  user.avatar_url}}
              />
              <View style={StyleSheet.textContainer}>
                <Text style={{ color: '#333', fontFamily:'serif'}}>{user.login}</Text>
                <Text style={{ color: 'blue', textAlign:'justify', fontSize:12}}>{user.html_url}</Text>
              </View>
              <View style={{ marginRight:10, alignItems: 'flex-end', justifyContent:"flex-end"}}>
                <MaterialCommunityIcons name="arrow-right-circle-outline" color="#900" size={27} />
                </View>
            </View>
            </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft:10,
    marginRight:10,
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

  textContainer: {
    flexDirection: "column",
    justifyContent:"space-between",
  },
  image: {
    marginRight: 10,
    width: 100,
    height: 100,
    borderRadius: 7,
  },
});
