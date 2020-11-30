import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Screens from './screens';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Screens.Login} />
        <Stack.Screen name="Register" component={Screens.Register} />
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen name="AddNote" component={Screens.AddNote} />
        <Stack.Screen name="EditNote" component={Screens.EditNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
