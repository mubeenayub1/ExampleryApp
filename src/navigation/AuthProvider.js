import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
// import {parseAsync} from '@babel/core';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          // if (!email || !password) {
          //   Alert.alert('please all all the fields');
          //   return;
          // }
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        phoneLogin: async phone => {
          try {
            await auth().signInWithPhoneNumber(phone);
          } catch (e) {
            console.log(e);
            // alert(JSON.stringify(e));
          }
        },
        register: async (email, name, password) => {
          // if (!email || !password || !name) {
          //   Alert.alert('Please Fill all the fields');
          //   return;
          // }
          try {
            await auth().createUserWithEmailAndPassword(email, name, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
