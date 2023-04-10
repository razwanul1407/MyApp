import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Button, TextInput, AntDesign } from 'react-native'
import image from './Images/Background.jpg'
// import { Feather } from 'react-native-feather'
import capsuleImage from './Images/CapsuleImage.jpg'
import tabImage from './Images/raw.png'


const Home = (props) => {
  let { user } = props.route.params
  return (
    <ImageBackground source={image} style={style.imageStyle} >

      <Text style={style.textStyle}>Hi, {user}</Text>

      <View style={style.searchStyle}>
        

        <TextInput
          style={{ fontSize: 18 }}
          placeholder='Search for medicine'
        />
      </View>
      <View style={style.bannerContainer}>
        <Image source={capsuleImage} style={style.banner}
        />
        <Text style={style.bannerText1}>We will deliver</Text>
        <Text style={style.bannerText2}>you medicines</Text>

        <TouchableOpacity style={style.button}>
          <Text style={style.text}>Catalog</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={style.text2}>Popular</Text>
      </View>

      <View style={style.container}>

        <View style={style.box}>
          <TouchableOpacity style={style.inner} onPress={() => props.navigation.navigate("Ibuprofen")}>
          <Image source={tabImage} style={style.banner2} />
            <Text style={style.boxText1}>Ibuprofen</Text>
            <Text style={style.boxText12}>$4.62</Text>
            <Text style={style.boxText123}>Tablets - 50 pices</Text>
            
          </TouchableOpacity>
        </View>

        <View style={style.box}>
          <TouchableOpacity style={style.inner}>
          <Image source={tabImage} style={style.banner2} />
          <Text style={style.boxText1}>Biotin</Text>
            <Text style={style.boxText12}>$10.23</Text>
            <Text style={style.boxText123}>Tablets - 60 pices</Text>
          </TouchableOpacity>
        </View>

      </View>
      
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    height: '70%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
    borderRadius:20
  },
  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:20
  },

  text: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },

  text2: {
    fontSize: 35,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
    bottom: 50

  },
  textStyle: {
    fontSize: 30,
    color: '#000000',
    textShadowRadius: 2,
    marginLeft: 10,
    padding: 10
  },

  boxText1:{
    fontWeight: 'bold',
    fontSize: 25,
    position: 'absolute',
    paddingHorizontal: 5,
    bottom: 80,
    left: 20,
    color: '#000000',
    shadowColor: 'black'
  },
  boxText12:{
    fontWeight: '700',
    fontSize: 20,
    position: 'absolute',
    paddingHorizontal: 5,
    bottom: 10,
    left: 20,
    color: '#000000',
    shadowColor: 'black'
  },
  boxText123:{
    fontWeight: '400',
    fontSize: 15,
    position: 'absolute',
    paddingHorizontal: 5,
    bottom: 50,
    left: 20,
    color: '#000000',
    shadowColor: 'black'
  },

  searchStyle: {
    marginLeft: 20,
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#F3F3F3',
    borderRadius: 60,
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
  },
  banner: {
    width: '99%',
    height: 200,
    borderRadius: 50
  },
  banner2: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginBottom:60,
    backgroundColor:'#C3E5F2',
  },

  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 10
  },

  bannerText1: {
    fontWeight: 'bold',
    fontSize: 25,
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 10,
    bottom: 190,
    left: 20,
    color: '#000000',
    shadowColor: 'black'
  },
  bannerText2: {
    fontWeight: 'bold',
    fontSize: 25,
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 10,
    bottom: 165,
    left: 20,
    color: '#000000',
    shadowColor: 'black'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#446DDE',
    padding: 10,
    bottom: 90,
    borderRadius: 30,
    borderColor: 'white',
    //margin: 5,
    borderWidth: 1,
    width: '30%',
    right: 110
  },

})
export default Home;