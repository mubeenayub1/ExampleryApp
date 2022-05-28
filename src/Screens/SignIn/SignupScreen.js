import React, {useContext, useState} from 'react';

import {
  Pressable,
  Alert,
  ScrollView,
  Text,
  TextInput,
  View,
  Keyboard,
} from 'react-native';
import styles from './styles';
import {Icon} from '@rneui/themed';
import * as Animatable from 'react-native-animatable';

import {AuthContext} from '../../navigation/AuthProvider';
const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();

  const {register, phoneLogin} = useContext(AuthContext);
  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setInputs({
        ...inputs,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setInputs({
        ...inputs,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };
  const SignUpHandle = (email, password) => {
    Keyboard.dismiss;
    if (inputs.email.length == 0) {
      Alert.alert('Empty Emial', 'Please enter an Email.', [{text: 'Okay'}]);
      return;
    } else if (phone.length == 0) {
      Alert.alert('Empty Phone Number', 'Please enter a phone number.', [
        {text: 'Okay'},
      ]);
      return;
    } else if (inputs.password.length == 0) {
      Alert.alert('Empty Password', 'Please enter password.', [{text: 'Okay'}]);
      return;
    } else if (name.length == 0) {
      Alert.alert('Empty Name', 'Please enter name', [{text: 'Okay'}]);
      return;
    } else {
      register(email, name, password);
      phoneLogin(phone);
      navigation.replace('HomeScreen');
    }
  };
  // const handleValidEmail = val => {
  //   let reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.edu.pk$/;
  //   if (val.length === 0) {
  //     Alert.alert('enter valid email');
  //   } else if (reg.test(val) === false) {
  //     setEmailValidError('enter valid email');
  //     setisValid(true);
  //   }
  // };
  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setInputs({
        ...inputs,
        password: val,
        isValidPassword: true,
      });
    } else {
      setInputs({
        ...inputs,
        password: val,
        isValidPassword: false,
      });
    }
  };

  return (
    <View style={styles.maincontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headingText}>CREATE ACCOUNT</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.headingDetailText}>Sign up to get started</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}>
              <Icon name="user" type="antdesign" />
            </View>
            <TextInput
              style={styles.inputText}
              placeholder="Name"
              value={name}
              onChangeText={name => setName(name)}
              placeholderTextColor={'grey'}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}>
              <Icon name="mail" type="feather" />
            </View>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              // value={email}
              placeholderTextColor={'grey'}
              onChangeText={val => textInputChange(val)}
              // onEndEditing={e => handleValidUser(e.nativeEvent.text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}>
              <Icon name="key" type="entypo" />
            </View>
            <TextInput
              style={styles.inputText}
              placeholder="Phone Number"
              placeholderTextColor={'grey'}
              value={phone}
              onChangeText={phone => setPhone(phone)}
              keyboardType={'numeric'}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputIconContainer}>
              <Icon name="key" type="entypo" />
            </View>
            <TextInput
              style={styles.inputText}
              placeholder="Password"
              // value={password}
              placeholderTextColor={'grey'}
              secureTextEntry={true}
              onChangeText={val => handlePasswordChange(val)}
            />
          </View>
          {inputs.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <Pressable
            style={styles.LoginContainer}
            onPress={() => {
              SignUpHandle();
              // phoneLogin(phone);
              // register(name, inputs.email, inputs.password);
              // navigation.replace('SignIn');
              // // HandleRegister(inputs.email, inputs.password);
            }}>
            <Text style={styles.loginText}>SIGN UP</Text>
          </Pressable>
          <View style={styles.headingDetailTextContainer}>
            <Text
              style={[
                styles.headingButtonText,
                {textDecorationLine: 'none', color: 'black'},
              ]}>
              I'm already a member.
            </Text>
            <Pressable
              style={styles.headingButton}
              onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.headingButtonText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
