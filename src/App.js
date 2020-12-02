import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Screens from './screens';
import {useDispatch, connect} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {IS_AUTHENTICATED} from './actions/action.type';

const App = ({authState}) => {
  const dispatch = useDispatch();
  const onStateChanged = (user) => {
    //On state changed
    //Some changes done
    if (user) {
      console.log('User is authenticated');
      dispatch({
        type: IS_AUTHENTICATED,
        payload: true,
      });
    } else {
      console.log('User is not authenticated');
      dispatch({
        type: IS_AUTHENTICATED,
        payload: false,
      });
    }
  };

  useEffect(() => {
    console.log(authState);
    const subscriber = auth().onAuthStateChanged(onStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!authState.isAuthenticated ? (
          <>
            <Stack.Screen name="Login" component={Screens.Login} />
            <Stack.Screen name="Register" component={Screens.Register} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Screens.Home} />
            <Stack.Screen name="AddNote" component={Screens.AddNote} />
            <Stack.Screen name="EditNote" component={Screens.EditNote} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  authState: state.auth,
});

export default connect(mapStateToProps)(App);
