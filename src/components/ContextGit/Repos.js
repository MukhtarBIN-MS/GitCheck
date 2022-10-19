import React, { useState, useEffect } from "react";
import { ScrollView, Text, View , StyleSheet, Image} from "react-native";
import Norepo from   '../../Images/no_repo2.png';
import Color from   '../../Images/coloe.jpg';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Star from   '../../Images/star.png';
import Star_white from   '../../Images/start_white1.png';
import NoAvatar from   '../../Images/noavatar2.png';
import moment from 'moment';

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

const Repos = ({ repos_detail }) => {
  const [repos, setRepos] = useState([]);
  const [ loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      async function fetchRepos() {
        const response = await fetch(repos_detail);
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      }
      fetchRepos();
    } catch (err) {
      console.log(err);
    }
  }, [repos_detail]);

  return (
    <ScrollView>
      { 
      !loading ? 
      repos.map((repo) => (
        <View style={styles.container} key={repo.html_url}>
        <Image style={styles.image} source={Norepo} />
        <View style={StyleSheet.textContainer}>
        <Text style={styles.text1}>{` ${repo.name}`}</Text>
        <View style={styles.language}>
        <MaterialCommunityIcons name={
        repo.language =='Python' ? 'language-python' 
       : repo.language =='JavaScript' ?  'language-javascript'
       : repo.language == 'C' ? 'language-c'
       : repo.language == 'C++' ? 'language-cpp'
       : repo.language == 'C#' ? 'language-csharp'
       : repo.language == 'CSS' ? 'language-css3'
       : repo.language == 'GO' ? 'language-go'
       : repo.language =='HTML' ?  'language-html5'
       : repo.language == 'Java' ? 'language-java'
       : repo.language == 'Kotlin' ? 'language-kotlin'
       : repo.language == 'PHP' ? 'language-php'
       : repo.language == 'RUBY' ? 'language-ruby'
       : repo.language == 'R' ? 'language-r'
       : repo.language == 'RUBY ON RAULS' ? 'language-ruby-on-rails'
       : repo.language == 'RUST' ? 'language-rust'
       : repo.language == 'Swift' ?  'language-swift'
       : repo.language == 'TypeScript' ? 'language-typescript'
       : repo.language == 'XAML' ? 'language-xaml'
       : repo.language == 'HASKELL' ? 'language-haskell'
       : repo.language == '.NET' ? 'dot-net'
  
       :'circle-small' 
        
        } color="#900" size={25} />
        <Text style={styles.text2}>{` ${repo.language ? "": 'Unspecified language'}`}</Text>
        </View>
        <View style={styles.language}>
        <MaterialCommunityIcons name={repo.stargazers_count == 1 ? 'star' : 'star-outline'}  size={20} />
        <Text style={styles.text3}>{`last pushed at ${moment(repo.pushed_at).fromNow()}`}</Text>
        </View>
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
  );
};

export default Repos;

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
          
    },
    image:{
        marginRight:10,
        width:100,
        height:100,
        borderRadius:150
    },
    text1:{
        fontSize:15,
        color:'blue',
        fontWeight:'bold',
        marginBottom:5
    },
    text2:{
      fontSize:15,
      fontWeight:'bold',
      marginBottom:5,
      
  },
      text3:{
        fontSize:15,
        fontWeight:'bold',
        marginBottom:5
    },
    language:{
      flexDirection:'row'
    },
    language_image:{
      width:10,
      height:10,
      marginTop:5,
      borderRadius:170
    },
    language_image2:{
      width:30,
      height:15,
      marginTop:5,
      borderRadius:170
    }
})