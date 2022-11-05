import React from "react";
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Clipboard from "@react-native-clipboard/clipboard";

  function CopyString(value){
   Clipboard.setString(value);
}

const Structure = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.module}>
        <View style={styles.header}>
          <Text style={styles.buttonP2}>{props.header}</Text>
        </View>
        <View style={styles.title}>
          <Text style={{ marginBottom:5}}>{props.title1}:</Text>
          <View style={styles.textContainer}>
            <Text>{props.text1}</Text>
           
          </View>
        </View>
        {/**/}
        <View style={styles.title}>
          <Text style={{ marginBottom:5}}>{props.title2}:</Text>
          <View style={styles.textContainer}>
            <Text>{props.text2}</Text>

          </View>
        </View>
        {/** */}
        <View style={styles.title}>
          <Text style={{ marginBottom:5}}>{props.title3}:</Text>
          <View style={styles.textContainer}>
            <Text>{props.text3}</Text>
 
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Structure;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  title: {
    flexDirection: "column",
    marginBottom:10
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
    borderColor: "black",
    backgroundColor: "#D9DDDC",
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: 10,
    borderRadius: 50,
    padding: 15,
    borderRadius: 10,
  },
  header: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
  module: {
    marginTop: 30,
    marginBottom:10,
    marginLeft:5,
    marginRight:5,
    borderColor: "black",
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: 10,
    borderRadius: 50,
    padding: 15,
    borderRadius: 10,
  },
  buttonP2: {
    marginTop: 5,
    textAlign:'center',
    alignSelf: 'center',
    width: '30%',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
  },
});
