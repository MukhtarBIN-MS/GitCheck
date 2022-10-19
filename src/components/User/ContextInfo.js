import React, { useState, useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter,Routes, Route, Link } from "react-router-native";
import Followers from '../ContextGit/Followers';
import Followings from '../ContextGit/Followings';
import Repos from '../ContextGit/Repos';




const ContextInfo = ({ repos_detail, followers_detail, followings_detail}) => (
  <NativeRouter>
   <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text style={styles.textLink}>Repositories</Text>
        </Link>
        <Link
          to="/followers"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text style={styles.textLink}>Followers</Text>
        </Link>
        {/* <Link
          to="/followings"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text style={styles.textLink}>Followings</Text>
        </Link> */}
      </View>
      <Routes>
      <Route exact path="/" element={<Repos repos_detail={repos_detail}/>} />
      <Route path="/followers" element={<Followers followers_detail={followers_detail}/>}  />
      {/* <Route path="/followings" element={<Followings following_detail={followings_detail}/>}  /> */}
      </Routes>
    </View>
    
  </NativeRouter>
);

export default ContextInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },
  nav: {
    alignItems:'flex-start',
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textLink:{
    color:'#fff',
    fontFamily:'serif',
    fontSize:15
  },
  navItem: {
    flex: 1,
    alignItems:'center',
    backgroundColor:"#900",
    flexDirection: "column",
    marginBottom:20,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 0.7,
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderTopRightRadius: 10,
    borderRadius: 50,
    padding: 15,
    borderRadius: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});
