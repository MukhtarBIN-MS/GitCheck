import React from "react";
import { Text, SafeAreaView, ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createStackNavigator();

const Learn = ({ navigation }) => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.learnContainer}>
        <View style={styles.lineItems}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Setup and Configuration")}
          >
            <View style={styles.innerContent}>
              <MaterialCommunityIcons name="cog" color="#fff" size={25} />
              <Text style={styles.text}>Setup and Config</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Getting and Creating projects")}
          >
            <View style={styles.innerContent}>
              <MaterialCommunityIcons name="tablet" color="#fff" size={25} />
              <Text style={styles.text}>Getting and Creating Projects</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.lineItems}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Basic Snapshooting")}
          >
            <View style={styles.innerContent}>
              <MaterialCommunityIcons name="camera" color="#fff" size={25} />
              <Text style={styles.text}>Basic Snapshotting</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Branching and Merging")}
          >
            <View style={styles.innerContent}>
              <MaterialCommunityIcons
                name="source-branch"
                color="#fff"
                size={25}
              />
              <Text style={styles.text}>Branching and Merging</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.lineItems}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sharing and Updating Projects")}
          >
            <View style={styles.innerContent}>
              <MaterialCommunityIcons
                name="human-greeting-proximity"
                color="#fff"
                size={25}
              />
              <Text style={styles.text}>Sharing and Updating Projects</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Inspection and Comparison")}
          >
            <View style={styles.innerContent}>
              <MaterialCommunityIcons
                name="folder-search-outline"
                color="#fff"
                size={25}
              />
              <Text style={styles.text}>Inspection and Comparison</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.lineItems}>
          <TouchableOpacity onPress={() => navigation.navigate("Patching")}>
            <View style={styles.innerContent}>
              <MaterialCommunityIcons
                name="video-input-component"
                color="#fff"
                size={25}
              />
              <Text style={styles.text}>Patching</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Debugging")}>
            <View style={styles.innerContent}>
              <MaterialCommunityIcons
                name="chart-timeline-variant-shimmer"
                color="#fff"
                size={25}
              />
              <Text style={styles.text}>Debugging</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Commands")}
        style={styles.docs}
      >
        <Text style={{ color: "#fff" }}>Git commands</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
    </ScrollView>
  );
};

export default Learn;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  learnContainer: {
    marginTop: 5,
    display: "flex",
    flexDirection: "column",
  },
  lineItems: {
    marginBottom: 2,
    marginLeft:10,
    flexDirection: "row",
  },
  innerContent: {
    flexDirection: "column",
    marginRight: 10,
    alignItems: "center",
    marginBottom: 5,
    width: 160,
    height: 100,
    marginBottom: 20,
    borderColor: "black",
    backgroundColor: "#900",
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
  text: {
    color: "#fff",
  },
  docs: {
    borderColor: "black",
    backgroundColor: "#900",
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: 10,
    borderRadius: 50,
    padding: 15,
    borderRadius: 10,
    width: 130,
    height: 50,
  },
});
