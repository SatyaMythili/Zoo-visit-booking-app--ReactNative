import * as React from 'react';
import {View , Button, StyleSheet,Text,TextInput,ImageBackground,ScrollView ,Image ,TouchableOpacity} from 'react-native';
const Splash=({ navigation }) =>{
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly'  }}>
      <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2016/10/21/14/46/norway-1758183_1280.jpg'}} style={styles.image1}>
  
        <Button
          placeholderTextColor = "Black"
          color = "Black"
          title="Log in"
          onPress={() => navigation.navigate('Login')}
        />
        <View style = {{margin:10}}/>
         <Button
          placeholderTextColor = "Black"
          color = "Black"
          title="Sign up"
          onPress={() => navigation.navigate('signup')}
        />
        </ImageBackground>
      </View>
  
  
    );
  }
  export default Splash;
    const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent:  'center',
    },
    buttonStyle: {
      height: 50,
      width: 70,
      alignItems: 'center',
      justifyContent:  'center',
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
      
    },
  
  TextStyle1:{
    margin:5,
    fontSize:15,
    fontWeight:'400',
    color:'#fff',
    alignSelf:'center',
    fontWeight:'bold'
  },
  
  separator: {
    marginVertical: 5,
    borderBottomColor: 'pink',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  HomeImageIconStyle: {
    padding: 2,
    margin: 2,
    height: 120,
    width: 120,
    borderRadius:10,
    borderColor:"white",
    borderWidth:0.5
  },
    button: {
      width:'20%',
      alignItems: "center",
      backgroundColor: "cyan",
      padding: 5
    },
    button1: {
      width:'20%',
      alignItems: "center",
      backgroundColor: "cyan",
      padding: 5
    },
    headingText: {
      fontSize:30,
      fontWeight:'bold',
      color:'cyan',
      padding:20,
      justifyContent: 'center',
  
    },
    headingText1:
    {
      fontSize:30,
      fontWeight:'bold',
      color:'cyan',
      padding:20,
      justifyContent: 'center',
  },
  forgot:{
    color:"cyan",
    fontSize:11
  },
  backgroundImage1:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
   
  },
  backgroundImage2:{
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
   
  },
  image1:
  {
    flex: 1,
    width: '100%',
    height: '10%',
    justifyContent: "center",
    alignItems: "stretch",
    justifyContent: 'flex-end',
    padding :50,
  
  },
  
  backgroundImage: {
    flex: 1,
    width: '110%',
    height: '100%',
    justifyContent: "center",
    alignItems: "stretch",
    justifyContent: 'flex-end',
    padding:20,
  
  },
  InstagramStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    borderWidth: .5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5 ,
    margin: 5,
  
  },
  
  FacebookStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#485a96',
   borderWidth: .5,
   borderColor: '#fff',
   height: 40,
   borderRadius: 5 ,
   margin: 5,
  
  },
  
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
  
  },
  
  TextStyle :{
  
   color: "#fff",
   marginBottom : 4,
   marginRight :20,
   
  },
  
  SeparatorLine :{
  
  backgroundColor : '#fff',
  width: 1,
  height: 40
  
  },
  });
