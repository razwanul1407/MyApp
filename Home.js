import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Button, TextInput, AntDesign } from 'react-native'
import image from './Images/WhiteBackground.png'
// import { Feather } from 'react-native-feather'
import capsuleImage from './Images/CapsuleImage.jpg'
import tabImage from './Images/raw.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Equalizer from 'react-native-vector-icons/Fontisto'
import UserCircle from 'react-native-vector-icons/FontAwesome5'
import Location from 'react-native-vector-icons/FontAwesome'

const Home = (props) => {
  //let { user } = props.route.params
  return (
    <ImageBackground source={image} style={style.imageStyle} >

      <View style={style.locationContainer} >

        <View style={style.locationBox}>
          <Text style={{fontSize:20,fontWeight:'400',fontStyle:'italic'}}> <Location name="location-arrow" size={25} /> London</Text>
        </View>

      </View>


      <View style={style.welcomeContainer}>

        <View style={style.welcomeBox}>
          <Text style={style.textStyle}>Hi </Text>
        </View>

        <View style={style.welcomeBox2}>
          <TouchableOpacity >
            <Text style={style.welcomeBoxImage}>
              <UserCircle name="user-circle" size={45} />
            </Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={style.searchStyle}>
        <Text style={{ marginLeft: 5, marginTop: 5 }}> <Icon name="search" size={25} />  </Text>
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

      <View style={style.textContainer}>
        <View style={style.textBox}>
          <Text style={style.textInner} > Popular</Text>
        </View>

        <View style={style.textBox2}>
          <TouchableOpacity >
            <Text style={style.textInner2}>
              <Equalizer name="equalizer" size={25} />
            </Text>
          </TouchableOpacity>
        </View>
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
          <TouchableOpacity style={style.inner} onPress={() => props.navigation.navigate("Biotin")}>
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
  textContainer: {
    width: "100%",
    height: '8%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //backgroundColor:'red',
  },
  locationContainer: {
    width: "100%",
    height: '4%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    //backgroundColor: 'red',
  },
  locationBox: {
    width: '30%',
    height: '100%',
    //backgroundColor: 'blue',
    marginLeft:5
  },

  welcomeContainer: {
    width: "100%",
    height: '7%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'red',
  },

  welcomeBox: {
    width: '80%',
    height: '100%',
    // backgroundColor: 'blue',
  },
  welcomeBox2: {
    width: '15%',
    height: '100%',
    // backgroundColor: 'yellow',
    marginLeft: 5
  },
  welcomeBoxImage: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 5,
    marginTop: 5
  },

  box: {
    width: '50%',
    height: '50%',
    padding: 5,
    borderRadius: 20
  },
  textBox: {
    width: '35%',
    height: '100%',
    //backgroundColor:'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox2: {
    width: '15%',
    height: '100%',
    //backgroundColor:'yellow',
    alignItems: "center",
    justifyContent: 'center',
    marginLeft: 180
  },

  inner: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  textInner: {
    fontSize: 30,
    color: 'black',
    fontWeight: '900',
  },
  textInner2: {
    color: 'black',
    fontWeight: 'bold',
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
    marginLeft: 10
  },

  boxText1: {
    fontWeight: 'bold',
    fontSize: 25,
    position: 'absolute',
    paddingHorizontal: 5,
    bottom: 80,
    left: 20,
    color: '#000000',
    shadowColor: 'black'
  },
  boxText12: {
    fontWeight: '700',
    fontSize: 20,
    position: 'absolute',
    paddingHorizontal: 5,
    bottom: 10,
    left: 20,
    color: '#000000',
    shadowColor: 'black'
  },
  boxText123: {
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
    backgroundColor: '#A6A4A4',
    borderRadius: 60,
    alignItems: 'center',
  },
  imageStyle: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 25
  },
  banner2: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 50,
    backgroundColor: '#eee',
  },

  bannerContainer: {
    //display: 'flex',
    width: "100%",
    height: '35%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    //backgroundColor:"red"
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