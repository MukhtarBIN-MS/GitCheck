import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import NoAvatar from '../Images/noavatar2.png'
import ContextInfo from "../components/User/ContextInfo";

const color = "#900";
const Splash = ({ user }) => {
  
  const time = new Date(user.created_at);
  const year = time.getFullYear();
  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.resultMessage}>{` ${user.name ? user.name.toUpperCase() : user.login}`}</Text>
      </View>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.ProfileImage}
          source={{ uri: user.avatar_url  }}
          alt="profile-image"
        />
      </View>
      <View style={styles.ProfileBio}>
        <View style={styles.usernames}>
          <View style={styles.usernameContainer}>
            <MaterialCommunityIcons name="account" color={color} size={25} />
            <Text style={{ fontSize: 13, marginLeft: 5, marginTop: 2 }}>
              {user.login}
            </Text>
          </View>
          <View style={styles.usernameLinkContainer}>
            <MaterialCommunityIcons
              name="map-marker"
              color={color}
              size={25}
            />
            <Text style={{ fontSize: 13, marginLeft: 5, marginTop: 2 }}>
            {user.location ? user.location : "No location provided"}
            </Text>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <MaterialCommunityIcons name="information" color={color} size={25} />
          <Text style={{ fontSize: 13, marginLeft: 5, marginTop: 2 }}>
            {user.bio ? user.bio : 'No bio information provided'}
          </Text>
        </View>
        <View style={styles.companyContainer}>
          <MaterialCommunityIcons name="domain" color={color} size={25} />
          <Text
            style={{
              fontSize: 13,
              marginLeft: 5,
              marginTop: 2,
              marginRight: 5,
            }}
          >
            {user.company ? user.company : 'No company detail provided'}
          </Text>
        </View>
        <View style={styles.locationContainer}>
          <MaterialCommunityIcons name="link-variant" color={color} size={25} />
          <Text
            style={{
              fontSize: 13,
              marginLeft: 5,
              marginTop: 2,
              marginRight: 5,
            }}
          >
            {user.html_url ? user.html_url : "No user link"}
          </Text>
        </View>
        <View style={styles.locationContainer}>
          <Text
            style={{
              fontSize: 17,
              marginLeft: 5,
              marginTop: 2,
              marginRight: 5,
            }}
          >{`Member since: ${year}`}</Text>
        </View>
      </View>
      <View style={styles.followersConatiner}>
        <View style={styles.followers}>
          <MaterialCommunityIcons
            name="account-multiple"
            color={color}
            size={25}
          />
          <Text>{`${user.followers} followers`}</Text>
        </View>
        <View style={styles.followers}>
          <MaterialCommunityIcons
            name="account-multiple"
            color={color}
            size={25}
          />
          <Text>{`${user.following} followings`}</Text>
        </View>
        <View style={styles.followers}>
          <MaterialCommunityIcons
            name="source-repository"
            color={color}
            size={25}
          />
          <Text>{`${user.public_repos} public repositories`}</Text>
        </View>
      </View>
      <View style={styles.ContextInfo}>
        <ContextInfo
          repos_detail={user.repos_url}
          followers_detail={user.followers_url}
          followings_detail={user.following_url}
        />
      </View>
    </ScrollView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "column",
    marginLeft:5,
    marginRight:5
  },
  followersConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  followers: {
    flexDirection: "column",
    alignItems: "center",
  },
  usernameContainer: {
    flexDirection: "row",
  },
  usernameLinkContainer: {
    flexDirection: "row",
  },
  locationContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  descriptionContainer: {
    flexDirection: "row",
    padding:5,
    marginBottom: 20,
  },
  companyContainer: {
    flexDirection: "row",
    padding:5,
    marginBottom: 20,
  },
  usernames: {
    display: "flex",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  ProfileImage: {
    width: 250,
    height: 250,
    borderRadius: 120,
    marginTop: 10,
  },
  ProfileBio: {
    flexDirection: "column",
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
  resultMessage:{
    marginBottom: 20,
    borderColor: "black",
    color:'#fff',
    backgroundColor:'green',
    borderStyle: "solid",
    borderWidth: 0.7,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopRightRadius: 10,
    borderRadius: 50,
    padding: 10,
    borderRadius: 10,
  },
  ImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
