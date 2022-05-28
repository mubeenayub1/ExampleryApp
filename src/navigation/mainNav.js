import React, {useContext, useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

// Screens
import SignInScreen from '../Screens/SignUp/SignInScreen';
import SignUpScreen from '../Screens/SignIn/SignupScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ForgetPassword from '../Screens/ForgetPassword/ForgetPassword';
import OtpScreen from '../Screens/OTPScreen/OtpScreen';

const Stack = createNativeStackNavigator();

const MainNav = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? (
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OtpScreen"
            component={OtpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ForgetPassword"
            component={ForgetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="OtpScreen"
            component={OtpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainNav;
