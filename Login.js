import React, { useState } from 'react'
import { ImageBackground, View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native'
import image from './Images/LoginBackGround.png'

const Login = (props) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const [userError, setUserError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [agree, setagree] = useState(false); 

    return (


        <ImageBackground source={image} style={style.imagestyle} >


            <Text
                style={{
                    fontSize: 30,
                    padding: 10,
                    color: '#000000',
                    textShadowColor: 'black',
                    fontWeight: '800'
                }}
            >Login</Text>

            <TextInput
                style={style.input}
                onChangeText={(text) => setUser(text)}
                placeholder="Email"
                autoCorrect={false}
            />

            <TextInput
                style={style.input}
                onChangeText={(text) => setPassword(text)}
                placeholder="Password"
                secureTextEntry={true}
            />
                
            
            <TouchableOpacity style={style.button} onPress={() => props.navigation.navigate("Home", { user })}>
                <Text style={{ fontSize: 20 }}>Login </Text>
            </TouchableOpacity>


            <TouchableOpacity style={style.forgetbutton}>
                <Text style={{ fontSize: 15 }}>Forget Password ?</Text>
            </TouchableOpacity>


        </ImageBackground>

    )
}

const style = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#EC5050',
        padding: 9,
        borderRadius: 30,
        borderColor: 'red',
        margin: 10,
        borderWidth: 1,
        width: '80%'

    },
    forgetbutton: {
        alignItems: 'center',
        //backgroundColor: '#EC5050',
        //padding: 50,
        // borderRadius:30,
        //borderColor: 'skyblue',
        margin: 30,
        //borderWidth: 1,
        width: '80%',

    },
    imagestyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {

        borderRadius: 30,
        borderColor: 'red',
        borderWidth: 1,
        fontSize: 18,
        margin: 5,
        padding: 10,
        //flexDirection:'row',
        width: '80%',

    }
})


export default Login;