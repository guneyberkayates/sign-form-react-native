import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './pages/Welcome';
import MemberSign from './pages/MemberSign';
import MemberResult  from './pages/MemberResult';


const Stack = createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        
      }}>
        <Stack.Screen  name="Welcome" component={Welcome} />
      <Stack.Screen name='MemberSign' component={MemberSign}/>
      <Stack.Screen name='MemberResult' component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;