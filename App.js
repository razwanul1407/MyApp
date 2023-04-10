import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './Login';
import Home from './Home';
import Ibuprofen from './Ibuprofen';

const Stack = createNativeStackNavigator();
const App = ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown:false}}
      >

        <Stack.Screen name='Login' component={Login} />
        
        <Stack.Screen name='Home' component={Home} />

        <Stack.Screen name='Ibuprofen' component={Ibuprofen} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}



export default App;