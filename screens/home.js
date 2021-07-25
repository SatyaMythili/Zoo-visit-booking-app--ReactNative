import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,Alert,Image, Text, View,ImageBackground,ScrollView,TouchableOpacity,FlatList,TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
const Home= ({navigation}) => { 
    const image={uri:"https://images.pexels.com/photos/3029730/pexels-photo-3029730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"};
    const recentImage= {uri: 'https://images.pexels.com/photos/4099050/pexels-photo-4099050.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'};
   
    const [gallery, setgallery] = useState([
  {image: {uri:'https://images.pexels.com/photos/567540/pexels-photo-567540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    title:'Chameleon',key:'1'},
    {image:{uri:'https://images.pexels.com/photos/1319515/pexels-photo-1319515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
      title:'Girafee',key:'2'},
      {image:{uri:'https://images.pexels.com/photos/1316297/pexels-photo-1316297.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    title:'Tiger',key:'3'},
    {image:{uri:'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    title:'Parrot',key:'4'},
    {image:{uri:'https://cdn.pixabay.com/photo/2014/01/14/18/31/nile-crocodile-245013__340.jpg'},
  title:'Crockodile',key:'5'}

]);
const [gallery1, setgallery1] = useState([
  {image: {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Hyderabad_zoo.jpg/1200px-Hyderabad_zoo.jpg'},
    title:'Nehru zoological park',key:'1'},
    {image:{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCr6-ST4qKNmdzBwnnJGiHnuViNJqZrLS7Qg&usqp=CAU'},
      title:'Mrugavani national park',key:'2'},
      {image:{uri:'https://media.ttravelog.com/article/images/FB_IMG_1578731830613.jpg'},
    title:'Indira gandhi zoological park',key:'3'},
    {image:{uri:'https://www.beautyofindia.in/wp-content/uploads/2017/10/Pt.-G.B.-Pant-High-Altitude-Zoo.jpg'},
    title:'Panth high altitude zoo',key:'4'},
    {image:{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNdY7dkjjxrgbXpmLQEjF6rM8O2khoKiDcwQ&usqp=CAU'},
  title:'Sri Chamarajendra zoo',key:'5'}

]);
const goToPost = () =>{
  navigation.navigate('Post')
}
 
  
    return(
    <View style={styles.container}>
      <View style={styles.container}>
          <ImageBackground
          source={image}
          style={{width:'100%',height:270}}
          imageStyle={{borderBottomRightRadius:65}}
          >
           <View style={styles.DarkOverlay}></View>
              <View style={styles.searchContainer}>
                  <Text style={styles.UserGreet}>Welcome Mythili!</Text>
                  <Text style={styles.Usertext}>Check out our animals and know more about them</Text>
              </View>
                <View>
                    <TextInput
                    style={styles.searchBox}
                    placeholder='Search Zoo'
                    placeholderTextColor="#666"
                    ></TextInput>
                    <Feather name='search' size={22} color='#666' style={
                      {position:'absolute',top:30 ,right : 40 , opacity:0.6}}/>
                </View>
                <TouchableOpacity style={{position:'absolute',left:16,top:40,padding:10,borderRadius:40}}>
                <Feather name='menu' size={22} color='#fff'/>
                </TouchableOpacity>
                <TouchableOpacity style={{position:'absolute',right:16,top:40,padding:10,borderRadius:40}}>
                <Feather name='bell' size={22} color ='#fff' 
                />
                </TouchableOpacity>
          </ImageBackground>
         </View>
         <ScrollView>
           <View style={{padding:20}}>
             <Text style={{fontSize:22, fontWeight:'bold'}}>
               Top Trending
             </Text>
           </View>
           <View>
           <FlatList
           horizontal={true}
           data={gallery}
           renderItem={({item}) =>{
             return(
             <View style={{paddingVertical: 20,paddingLeft: 16}}>
               <TouchableOpacity onPress={goToPost}>
                 <Image source={item.image} style={{width:150,
                 marginRight: 8,height:250,borderRadius: 10
                }}/>
                <View style={styles.ImageOverlay}></View>
               <Feather name='map-pin' size={16} color='white'
               style={styles.imageLocationIcon}/>
               <Text style={styles.imageText}>
                 {item.title}
               </Text>
               </TouchableOpacity>
             </View>
             )
           }}           
           
           />
           </View>
           <View style={{padding:20,flexDirection:'row',justifyContent:'space-between'}}>
               <Text style={{fontSize:22,fontWeight:'bold'}}>
                 Top Zoo's
               </Text>
               <Text style={{fontSize:14,fontWeight:'bold',color:'#ff6200'}}>
                 View All
               </Text>
             </View>
           <View>
           <FlatList
           horizontal={true}

           data={gallery1}
           renderItem={({item}) =>{
             return(
             <View style={{paddingVertical: 20,paddingLeft: 16}}>
               <TouchableOpacity onPress={goToPost}>
                 <Image source={item.image} style={{width:150,
                 marginRight: 8,height:250,borderRadius: 10
                }}/>
                <View style={styles.ImageOverlay}></View>
               <Feather name='map-pin' size={16} color='white'
               style={styles.imageLocationIcon}/>
               <Text style={styles.imageText}>
                 {item.title}
               </Text>
               </TouchableOpacity>
             </View>
             )
           }}           
           
           />
           </View>
           
         </ScrollView>
         </View>   

      
  
  );
}



const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:' #000000',
    alignItems:'center',
    justifyContent:'center',
    flexGrow:1,
    height:'100%',
    backgroundColor:" #000000"
  },
  DarkOverlay:{
      position:'absolute',
      top:0,
      right:0,
      left:0,
      height:270,
      backgroundColor:'#000000',
      opacity:0.2,
      borderBottomRightRadius:65
  },
  searchContainer:{
       paddingTop:100,
       paddingLeft:16
},
  UserGreet:{
      fontSize:38,
      fontWeight:'bold',
      color:'white'
  },
  Usertext:{
      fontSize:16,
      fontWeight:'normal',
      color:'#fff'
  },
  searchBox:{
      marginTop:16,
      backgroundColor: '#fff',
      paddingLeft:24,
      padding :12,
      borderTopRightRadius:40,
      borderBottomRightRadius:40,
      width: '95%'
  },
  ImageOverlay:{
    width:150,
    height:250,
    marginRight:8,
    borderRadius:10,
    position:'absolute',
    backgroundColor:'#000000',
    opacity:0.2
  },
  imageLocationIcon:{
    position:'absolute',
    marginTop:4,
    left:10,
    bottom:10
  },
  imageText:{
    position:'absolute',
    color:'white',
    opacity:0.9,
    marginTop:4,
    fontSize:14,
    left:30,
    bottom:10,
    
  }

});
export default Home;