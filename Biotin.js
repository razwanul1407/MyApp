import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity,  Button, Feather, TextInput } from 'react-native'
import tabImage from './Images/raw.png'
import image from './Images/IbuprofenBImage.jpg'
import Back from 'react-native-vector-icons/Ionicons'
import Heart from 'react-native-vector-icons/AntDesign'

const Biotin = (props) => {

    const [agree, setAgree] = useState(false);

    return (
        <ImageBackground source={image} style={style.imagestyle} >


            <View style={style.container}>

                <TouchableOpacity style={{ marginLeft: 10, marginTop: 10 }}
                    onPress={() => props.navigation.navigate("Home")}>
                    <Back name="arrow-back" size={30} />
                </TouchableOpacity>

                <View style={style.box}>
                    <Image source={tabImage} style={style.banner} />
                </View>

                <View style={style.container2}>

                    <View style={style.mediBox} >
                        <Text style={style.boxtext1}>Biotin</Text>
                        <Text style={style.boxtext3}>Tablets - 60 pices</Text>
                        <Text style={style.boxtext2}>$10.02</Text>

                        <Text style={style.boxtext4}>Dosege from</Text>
                        <Text style={style.boxtext5}>Pills</Text>
                        <Text style={style.boxtext6}>Dosege</Text>
                        <Text style={style.boxtext7}>0.2 g</Text>
                    </View>

                    <View style={style.mediBox2} >

                        <TouchableOpacity style={{alignItems:'flex-end',marginTop:15}}>

                        <Heart name="hearto" size={30}
                        color='black' />
                        </TouchableOpacity>

                        <Text style={style.boxtext8}>Active Substanc</Text>
                        <Text style={style.boxtext9}>Biotin</Text>
                        <Text style={style.boxtext10}>Manufacture</Text>
                        <Text style={style.boxtext11}>Russia</Text>
                    </View>

                    <View style={style.mediBox3} >

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
        fontWeight: '400',
        fontSize: 20,
        color: 'white',
    },
    imagestyle: {
        flex: 1
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#446DDE',
        padding: 15,
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 1,
        left: 20,
        width: '90%',
        marginTop: 250
    },

    container: {
        width: "100%",
        height: '40%',
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#C3E5F2',
        borderRadius: 30

    },
    container2: {
        width: "100%",
        height: '166%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 50,
        //backgroundColor: 'red'
    },
    mediBox: {
        width: '50%',
        height: '10%',
       // backgroundColor: 'blue',
        marginLeft: 10,
        marginTop: 20,
    },
    mediBox2: {
        width: '35%',
        height: '10%',
       // backgroundColor: 'red',
        marginTop: 20,
        marginLeft: 5
    },
    mediBox3: {
        width: '35%',
        height: '10%',
        //backgroundColor: 'yellow',
        marginTop: 30,
        marginLeft: 150
    },
    box: {
        width: '80%',
        height: '60%',
        marginLeft: 50,
        padding: 5,
        borderRadius: 10
    },

    boxtext1: {
        fontWeight: '600',
        fontSize: 35,
        color: '#000000',
        shadowColor: 'black',
        marginLeft: 10
    },
    boxtext2: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20,
        marginLeft: 10,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext3: {
        fontWeight: '300',
        fontSize: 15,
        color: '#000000',
        shadowColor: 'black',
        marginLeft: 10
    },
    boxtext4: {
        fontWeight: '400',
        fontSize: 18,
        top: 30,
        left: 5,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext5: {
        fontWeight: '800',
        fontSize: 20,
        top: 35,
        left: 5,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext6: {
        fontWeight: '400',
        fontSize: 18,
        top: 80,
        left: 5,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext7: {
        fontWeight: '800',
        fontSize: 20,
        // position: 'absolute',
        // paddingHorizontal: 5,
        top: 85,
        left: 5,
        color: '#000000',
        shadowColor: 'black'
    },

    boxtext8: {
        fontWeight: '400',
        fontSize: 18,
        top: 105,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext9: {
        fontWeight: '800',
        fontSize: 20,
        top: 110,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext10: {
        fontWeight: '400',
        fontSize: 18,
        top: 160,
        color: '#000000',
        shadowColor: 'black'
    },
    boxtext11: {
        fontWeight: '800',
        fontSize: 20,
        top: 165,
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
export default Biotin;