import React, {useState, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet, Image} from 'react-native';

const Followings = ({ following_detail}) => {
const [ followings, setFollowings ] = useState([]);
  useEffect(() => {
     try{
       async function fetchfollowings(){
           const response = await fetch(following_detail);
           const data = await response.json();
           setFollowings(data)
       }
       fetchfollowings()
     }catch(err){
         console.log(err)
     }
  }, [following_detail])
    return (
       <ScrollView>
           {
               followings.map((following)=>(
                   <View style={styles.container} key={following.html_url}>
                       <Image style={styles.image} source={{uri : following.avatar_url}} />
                       <View style={StyleSheet.textContainer}>
                       <Text>{following.login.toUpperCase()}</Text>
                       <Text>{following.html_url}</Text>
                      
                       </View>
                   </View>
               ))
           }
       </ScrollView>

    )
}

export default Followings;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:10
    },
    textContainer:{
          flexDirection:'column',
          justifyContent:'space-between'
    },
    image:{
        marginRight:10,
        width:100,
        height:100,
        borderRadius:7
    }
})