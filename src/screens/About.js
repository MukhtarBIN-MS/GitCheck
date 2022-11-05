import React from 'react';
import Back from '../Images/Back2.png';
import Me from '../Images/me.jpg';
import {
  Button,
  Container,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Linking } from 'react-native';
const About = props => {
    const media_links =  {
        github: 'https://github.com/MukhtarBIN-MS',
        linkedin: 'https://www.linkedin.com/in/binms'
    }
    
  const { theme } = props;
  return (
    <>
    <ScreenContainer
      style={styles.screenContainerJb}
      scrollable={true}
      hasSafeArea={false}
    >
      <ImageBackground
        style={styles.imageBackgroundNb}
        source={Back}
        resizeMode="cover"
      />
      <Container
        style={styles.containerEA}
        elevation={0}
        useThemeGutterPadding={true}
      >
        <Image
          style={StyleSheet.flatten([
            styles.imageA3,
            { borderRadius: theme.borderRadius.global },
          ])}
          resizeMode="cover"
          source={Me}
        />
        <Text
          style={StyleSheet.flatten([
            styles.textPr,
            theme.typography.headline3,
          ])}
        >
          Mukhtar Mahmud
        </Text>
        <Text style={styles.buttonP2} type="outline">
          BIN_MS
        </Text>
      </Container>
      <Container useThemeGutterPadding={true} elevation={0}>
          <Text style={styles.text}>I'm a Software Developer with 5+ years experince in Software development, JavaScript, Python, Java and Golang. I graduated from Federal University Dutse with major in computer
             science and specialization in Web/Mobile App development. 
            My primary goal is to learn as much as possible about the world of technology, 
            to get as much knowledge as possible, and to apply it to my carrer as a developer.</Text>
      </Container>
      <Container useThemeGutterPadding={true} elevation={0}>
        <Touchable
        onPress={()=>{ Linking.openURL(media_links.github)}}
          style={StyleSheet.flatten([
            styles.touchableOk,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewKs}>
            <Text style={theme.typography.body1}>Github profile</Text>
            <MaterialCommunityIcons name="github" color="#900" size={25} />
          </View>
        </Touchable>
        <Touchable
         onPress={()=>{ Linking.openURL(media_links.linkedin)}}
          style={StyleSheet.flatten([
            styles.touchableOm,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewYR}>
            <Text style={theme.typography.body1}>Linkedin</Text>
            <MaterialCommunityIcons name="linkedin" color="#900" size={25} />
          </View>
        </Touchable>
        <Touchable
          onPress={() => Linking.openURL('mailto:myl772ng@gmail.com') }
          style={StyleSheet.flatten([
            styles.touchableBp,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewS1}>
            <Text style={theme.typography.body1}>Email</Text>
            <MaterialCommunityIcons name="email" color="#900" size={25} />
          </View>
        </Touchable>
        <Touchable
         onPress={() => Linking.openURL(`${Platform.OS === 'android' ? 'tel:08107557734' : 'telprompt:08107557734'}`) }
          style={StyleSheet.flatten([
            styles.touchableJg,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewAl}>
            <Text style={theme.typography.body1}>Tel</Text>
            <MaterialCommunityIcons name="phone" color="#900" size={25} />
          </View>
        </Touchable>
      </Container>
      <Container useThemeGutterPadding={true} elevation={0}>
          <Text style={styles.copyright}>&copy; {(new Date().getFullYear())} Gitcheck</Text>
      </Container>
    </ScreenContainer>
    </>
  );
};
const styles = StyleSheet.create({
  screenContainerJb: {
    justifyContent: 'space-evenly',
  },
  viewKs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewYR: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewS1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAl: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageBackgroundNb: {
    width: '100%',
    height: 250,
  },
  imageA3: {
    height: 120,
    width: 120,
  },
  containerEA: {
    alignItems: 'center',
    marginTop: -65,
  },
  textPr: {
    width: '100%',
    textAlign: 'center',
    marginTop: 16,
  },
  touchableOk: {
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 32,
  },
  iconFE: {
    height: 24,
    width: 24,
  },
  iconCl: {
    width: 22,
    height: 22,
  },
  iconZz: {
    width: 22,
    height: 22,
  },
  iconZb: {
    height: 24,
    width: 24,
  },
  buttonP2: {
    marginTop: 5,
    alignSelf: 'center',
    width: '50%',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#900',
  },
  touchableOm: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableBp: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableJg: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  text:{
      alignItems:'center',
      textAlign:'justify',
      marginTop:10,
      fontSize:15
  },
  copyright:{
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      fontSize:15
  }
});
export default withTheme(About);