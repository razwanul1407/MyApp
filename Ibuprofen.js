import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Button, Feather, TextInput } from 'react-native'
import tabImage from './Images/raw.png'
import image from './Images/IbuprofenBImage.jpg'

const Ibuprofen = () => {
    return (
        <ImageBackground source={image} style={style.imagestyle} >
            

        <View style={style.container}>

            <View style={style.box}>
                <Image source={tabImage} style={style.banner} />
            </View>

            <View style={style.container2}>
                <View >
                    <Text style={style.boxtext1}>Ibuprofen</Text>
                    <Text style={style.boxtext3}>Tablets - 60 pices</Text>
                    <Text style={style.boxtext2}>$4.62</Text>
                    <Text style={style.boxtext4}>Dosege from</Text>
                    <Text style={style.boxtext5}>Pills</Text>
                    <Text style={style.boxtext6}>Dosege</Text>
                    <Text style={style.boxtext7}>0.2 g</Text>
                    <Text style={style.boxtext8}>Active Substanc</Text>
                    <Text style={style.boxtext9}>Ibuprofen</Text>
                    <Text style={style.boxtext10}>Manufacture</Text>
                    <Text style={style.boxtext11}>Duisyn, Russia</Text>
                    
                </View>

                <TouchableOpacity style={style.button}>
                    <Text style={style.text}>Add to cart</Text>
                </TouchableOpacity>
            </View>

        </View>

        </ImageBackground>


    )
}

const style = StyleSheet.create({
    text: {
        fontWeight:'400',
        fontSize: 20,
        color: 'white',
      },
      imagestyle:{
        flex:1
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#446DDE',
        padding: 15,
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 1,
        left:20,
        width:'90%',
        marginTop:390
      },

    container: {
        width: "100%",
        height: '40%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#C3E5F2',
        borderRadius: 50

    },
    container2: {
        width: "100%",
        height: '190%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderRadius: 50,
        marginTop: 50,
    },
    box: {
        width: '80%',
        height: '60%',
        marginLeft: 50,
        padding: 5,
        borderRadius: 20
    },

    boxtext1: {
        fontWeight: 'bold',
        fontSize: 50,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 30,
        left: 20,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext2: {
        fontWeight: '900',
        fontSize: 22,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 140,
        left: 20,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext3: {
        fontWeight: '400',
        fontSize: 20,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 90,
        left: 20,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext4: {
        fontWeight: '400',
        fontSize: 18,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 200,
        left: 20,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext5: {
        fontWeight: '800',
        fontSize: 20,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 230,
        left: 20,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext6: {
        fontWeight: '400',
        fontSize: 18,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 280,
        left: 20,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext7: {
        fontWeight: '800',
        fontSize: 20,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 310,
        left: 20,
        color: '#000000',
        shadowColor: 'black'
    },

    boxtext8: {
        fontWeight: '400',
        fontSize: 18,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 200,
        left: 220,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext9: {
        fontWeight: '800',
        fontSize: 20,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 230,
        left: 220,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext10: {
        fontWeight: '400',
        fontSize: 18,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 280,
        left: 220,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext11: {
        fontWeight: '800',
        fontSize: 20,
        position: 'absolute',
        paddingHorizontal: 5,
        top: 310,
        left: 220,
        color: '#000000',
        shadowColor: 'black'
    },
    banner: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginBottom: 60
    },
})
export default Ibuprofen;