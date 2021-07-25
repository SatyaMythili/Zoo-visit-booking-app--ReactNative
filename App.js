import * as React from 'react';
import {View , Button, StyleSheet,Text,TextInput,ImageBackground,ScrollView ,Image ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/splashscreen';
import Login from './screens/login';
import signup from './screens/signUp';
import Home from './screens/home';
import Post from './screens/postdetails';
 


     

const Stack = createStackNavigator();
export default function App() {
        return (
          
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash"
            screenOptions={{
              headerShown:false}}>
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="signup" component={signup} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Post" component={Post} />

            </Stack.Navigator>
          </NavigationContainer>
        );
      }
     



