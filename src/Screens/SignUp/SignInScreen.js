import React, {useContext, useState} from 'react';
import {
  Text,
  Pressable,
  Alert,
  TextInput,
  View,
  ScrollView,
  Keyboard,
} from 'react-native';
import {Icon} from '@rneui/themed';
import styles from './styles';
// import {useTheme} from 'react-native-paper';
import {AuthContext} from '../../navigation/AuthProvider';
import * as Animatable from 'react-native-animatable';
const SignInScreen = ({navigation}) => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  // const {colors} = useTheme();

  // const {signIn} = React.useContext(AuthContext);

  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  // const updateSecureTextEntry = () => {
  //   setData({
  //     ...data,
  //     secureTextEntry: !data.secureTextEntry,
  //   });
  // };

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (email, password) => {
    Keyboard.dismiss;
    if (data.email.length == 0) {
      Alert.alert('Email Empty!', 'Please enter an email.', [{text: 'Okay'}]);
      return;
    } else if (data.password.length == 0) {
      Alert.alert('Empty Password!', 'Please enter a password', [
        {text: 'Okay'},
      ]);
      return;
    } else {
      login(email, password);
      navigation.replace('HomeScreen');
    }
  };
  const {login} = useContext(AuthContext);
  return (
    <View style={styles.maincontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headingText}>LOGIN</Text>
        </View>

        <View style={styles.formWholeContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headingDetailText}>Welcome Back,</Text>
            <Text style={styles.headingDetailText}>Sign in to continue</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.inputIconContainer}>
                <Icon name="mail" type="feather" />
              </View>
              <TextInput
                style={styles.inputText}
                placeholder="Enter an Email"
                placeholderTextColor={'grey'}
                onChangeText={val => textInputChange(val)}
                onEndEditing={e => handleValidUser(e.nativeEvent.text)}
              />
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputIconContainer}>
                <Icon name="key" type="entypo" />
              </View>
              <TextInput
                style={styles.inputText}
                placeholder="Password"
                onChangeText={val => handlePasswordChange(val)}
                placeholderTextColor={'grey'}
              />
            </View>
            {data.isValidPassword ? null : (
              <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>
                  Password must be 8 characters long.
                </Text>
              </Animatable.View>
            )}
            <Pressable style={styles.forgetTextContainer}>
              <Text
                style={styles.forgetText}
                onPress={() => {
                  navigation.navigate('ForgetPassword');
                }}>
                Forget Password?
              </Text>
            </Pressable>
            <Pressable
              style={styles.LoginContainer}
              onPress={() => {
                loginHandle();
              }}>
              <Text style={styles.loginText}>LOGIN</Text>
            </Pressable>
            <View style={styles.headingDetailTextContainer}>
              <Text style={[styles.headingButtonText, {color: 'black'}]}>
                New member?
              </Text>
              <Pressable
                style={styles.headingButton}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.headingButtonText}>Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View style={styles.footerContainer}>
        <Text style={styles.footerText}>OR</Text>
        <View style={styles.footerButtonConatiner}>
          <Pressable style={styles.iconContainer}>
            <Icon name="google" type="fontisto" color={'#cb0003'} />
          </Pressable>
          <Pressable style={styles.iconContainer}>
            <Icon name="facebook" type="fontisto" color={'#094994'} />
          </Pressable>
        </View>
      </View> */}
    </View>
  );
};

export default SignInScreen;
