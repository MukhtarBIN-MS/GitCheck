import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import Header_pic from '../Images/header_pic.png';


const Header = () => {
    return(
     <View style={{ alignItems:'center', justifyContent:'center'}}>
         <Image style={{ 
               alignItems:'center',
               justifyContent:'center',
               width:130,
               height:130,
               marginTop:70,
             
               }}
          source={Header_pic}/>
         </View>

    );
}

export default Header