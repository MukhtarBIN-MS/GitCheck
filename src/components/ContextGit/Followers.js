import React, {useState, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet, Image} from 'react-native';
import NoAvatar from   '../../Images/noavatar2.png';

const loading_data =[
    { 
      image:NoAvatar,
      name:'.....',
      last_pus:'......',
      language:'........',

    },
    { 
      image:NoAvatar,
      name:'.......',
      last_pus:'......',
      language:'........',

    },
    { 
      image:NoAvatar,
      name:'.........',
      last_pus:'......',
      language:'........',

    }
];

const Followers = ({ followers_detail}) => {
const [ followers, setFollowers ] = useState([]);
const [ loading, setLoading] = useState(true);
  useEffect(() => {
     try{
       async function fetchfollowers(){
           const response = await fetch(followers_detail);
           const data = await response.json();
           setFollowers(data);
           setLoading(false);
       }
       fetchfollowers()
     }catch(err){
         console.log(err)
     }
  }, [followers_detail])
    return (
       <ScrollView>
        {!loading ?
           
               followers.map((follower)=>(
                   <View style={styles.container} key={follower.html_url}>
                       <Image style={styles.image} source={{uri : follower.avatar_url}} />
                       <View style={StyleSheet.textContainer}>
                       <Text style={{ color: '#333', fontFamily:'serif',}} >{follower.login}</Text>
                       <Text style={{ color:'blue', fontSize:12}}>{follower.html_url}</Text>
                      
                       </View>
                   </View>
               ))
           
           :
           loading_data.map((data) => (
            <View style={styles.container} key={data.name}>
            <Image style={styles.image} source={NoAvatar} />
            <View style={StyleSheet.textContainer}>
            <Text style={styles.text1}>{data.name}</Text>
            <View style={styles.language}>
            <Text style={styles.text2}>{data.language}</Text>
            </View>
            <View style={styles.language}>
   
            <Text style={styles.text3}>{data.last_pus}</Text>
            </View>
            </View>
        </View>
        ))
}
       </ScrollView>

    )
}

export default Followers;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginBottom:10,
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