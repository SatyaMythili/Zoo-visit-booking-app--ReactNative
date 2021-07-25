import React from 'react';


import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';


export default class App extends React.Component {
  state = {
    height: new Animated.Value(600), 
    width: new Animated.Value(360), 
  };
  componentDidMount() {
    Animated.timing(
      this.state.width, 
      {
        toValue: 360, 
        duration: 450, 
      }
    ).start(); 
    Animated.timing(
      this.state.height, 
      {
        toValue: 750, 
        duration: 10000, 
      }
    ).start(); 
    setTimeout(function() {
      alert('loading please wait				');
    }, 12000);
  }

  render() {
    let { height } = this.state;
let { width } = this.state;

    return (
      <View style={styles.MainContainer}>
        <Animated.Image
          source={{
            uri:
              'https://freepngimg.com/thumb/pigeon/3-white-flying-pigeon-png-image-thumb.png',
          }}
          style={{
            width: width,
            height: height,
            position: 'absolute',
          }}
        />
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: 48,
            backgroundColor: 'rgba(11, 56, 82, 0.3)',
          }}>
          <Text style={{ fontSize: 18, color: 'white' }}>
            login
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'la',
  },
});
