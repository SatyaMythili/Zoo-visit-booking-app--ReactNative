import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View ,ImageBackground,ScrollView,TouchableOpacity,FlatList} from 'react-native';
import {Feather} from '@expo/vector-icons';
const image={uri:'https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
const Post= ({navigation}) => { 
 return(
    <View style={{backgroundColor:'white',flex:1}}> 
      <ImageBackground
      source={image}
      style={styles.image}
      imageStyle={{borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
        <Text style={styles.Tagline}>Know about the amazing creature chameleon</Text>
        <Text style={styles.Placename}>Come and visit our zoo to explore them in real life! </Text>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{position:'absolute',left:20,top:40,backgroundColor:'#ff6200',padding:10,borderRadius:40}}>
          <Feather name='arrow-left' size={22} color='#fff' />
        </TouchableOpacity>
        <TouchableOpacity style={{position:'absolute',right:20,top:40,backgroundColor:'#ff6200',padding:10,borderRadius:40}}>
          <Feather name='heart' size={22} color='#fff' />
        </TouchableOpacity>

      </ImageBackground>
      <TouchableOpacity style={styles.BookTicketBtn}>
        <Text style={styles.bookTicketText}>
          Register Now
        </Text>
      </TouchableOpacity>
      <ScrollView style={{backgroundColor:'white'}}>
        <Text style={{padding:17,fontSize:20,fontWeight:'bold'}}>
          About Chameleons
        </Text>
        <Text style={{paddingHorizontal:14,fontSize:14,fontWeight:'normal',
      opacity:0.9,justifyContent:'flex-start',textAlign:'justify',lineHeight:26}}>
        A chameleon sits motionlessly on a tree branch. Suddenly its sticky, two-foot-long tongue snaps out at 13 miles an hour, 
        wrapping around a cricket and whipping the yummy snack back into the reptile’s mouth. Now that’s fast food dining! And 
        the chameleon’s swift eating style is just one of its many features that’ll leave you tongue-tied.Chameleons mostly live
        in the rain forests and deserts of Africa. The color of their skin helps them blend in with their habitats. Chameleons 
        that hang out in trees are usually green. Those that live in deserts are most often brown.They often change color to 
        warm up or cool down.Turning darker helps warm the animals because the dark colors absorb more heat. They also switch 
        shades to communicate with other chameleons, using bright colors to attract potential mates or warn enemies.
        </Text>
        <Text style={{paddingHorizontal:14,fontSize:14,fontWeight:'normal',
      opacity:0.9,justifyContent:'flex-start',textAlign:'justify',lineHeight:26}}>
        So how exactly do chameleons change colors? The outer layer of their skin is see-through. Beneath that are layers of special
        cells filled with pigment—the substance that gives plants and animals (including you) color. To display a new color, the
        brain sends a message for these cells to get bigger or smaller. As this happens, pigments from different cells are released, 
        and they mix with each other to create new skin tones. For instance, red and blue pigment may mix to make the chameleon look purple.
        </Text>
      </ScrollView>
    </View>
   );
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  } ,
  image:{
    height:380,
    justifyContent:'flex-end',

  },
  Tagline:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    paddingHorizontal:14,
    marginVertical:6,
  },
  Placename:{
    color:'white',
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:14,
    marginBottom:30
  },
  BookTicketBtn:{
    position:'absolute',
    right:12,
    backgroundColor:'#ff6200',
    top:350,
    padding:16,
    borderRadius:40,
   elevation:5
  },
  bookTicketText:{
    color:'white',
    fontSize:14,


  }
});
export default Post;