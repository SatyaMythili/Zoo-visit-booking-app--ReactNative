import * as React from 'react';
import {View , Button, StyleSheet,Text,TextInput,ImageBackground,ScrollView ,Image ,TouchableOpacity,Linking} from 'react-native';







const Login=({ navigation }) =>{
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri:'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg'}} style={styles.backgroundImage1}>
        <Text style={styles.headingText}>Log In</Text>
        <TextInput placeholder='Enter Username' placeholderTextColor="cyan" style={{ height:40,width:300,
       borderColor: 'white', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1}} />
       
                  <TextInput placeholder="Password" 
                  placeholderTextColor="cyan"
              returnKeyType='go'
       secureTextEntry 
             autoCorrect={false}
             style={{ height: 40,width:300, borderColor: 'white', borderWidth: 5,paddingLeft:10,margin:10,borderRadius:20,borderWidth:1 }}
             />
              <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <View style = {{margin:10}}/>
  <TouchableOpacity style={styles.button}
          onPress={() => navigation.navigate('Home')}>
            <Text style={styles.loginText}>Login</Text>
            
          </TouchableOpacity>
          <View style = {{margin:10}}/>
          <TouchableOpacity onPress={ ()=> Linking.openURL('https://m.facebook.com/login/') } style={styles.FacebookStyle} activeOpacity={0.5}>
          <Image 
           source={{uri:'https://reactnativecode.com/wp-content/uploads/2017/10/Facebook_Login_Button.png'}}
            style={styles.ImageIconStyle} 
            />
  
   
   <Text style={styles.TextStyle}> Login Using Facebook </Text>
   </TouchableOpacity>

          <View style = {{margin:10}}/>
          <TouchableOpacity onPress={ ()=> Linking.openURL('https://accounts.google.com/signin/v2/identifier?sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin') } style={styles.FacebookStyle} activeOpacity={0.5}>
          <Image 
           source={{uri:'https://img.icons8.com/color/2x/google-logo.png'}}
            style={styles.ImageIconStyle} 
            />
          <Text style={styles.TextStyle}> Login Using Google </Text>
          </TouchableOpacity>
  <View style = {{margin:10}}/>
  <TouchableOpacity onPress={ ()=> Linking.openURL('https://www.instagram.com/accounts/login/') } style={styles.InstagramStyle} activeOpacity={0.5}>
   
           <Image 
            source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS66BHoINKhsniZhCs6HP-xxk5AtAj-fCVDZQ&usqp=CAU'}}
            style={styles.ImageIconStyle} 
            />
   
           
   
           <Text style={styles.TextStyle}> Login Using Instagram </Text>
   
         </TouchableOpacity>
          </ImageBackground>
      </View>
    );
  }
  export default Login;
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