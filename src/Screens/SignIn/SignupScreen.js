import React, {useContext, useState} from 'react';

import {Pressable, ScrollView, Text, TextInput, View} from 'react-native';
import styles from './styles';
import {Icon} from '@rneui/themed';
import {AuthContext} from '../../navigation/AuthProvider';
const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {register} = useContext(AuthContext);
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>Sign up</Text>
        <View style={styles.headingDetailTextContainer}>
          <Text style={styles.headingDetailText}>Already have an account?</Text>
          <Pressable
            style={styles.headingButton}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.headingButtonText}>Login</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <Icon name="user" type="antdesign" />
          </View>
          <TextInput style={styles.inputText} placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <Icon name="mail" type="feather" />
          </View>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            value={email}
            onChangeText={email => setEmail(email)}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <Icon name="key" type="entypo" />
          </View>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
            onChangeText={password => setPassword(password)}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <Icon name="key" type="entypo" />
          </View>
          <TextInput style={styles.inputText} placeholder="Confirm Password" />
        </View>
        <Pressable
          style={styles.LoginContainer}
          onPress={() => {
            register(email, password);
            navigation.replace('SignIn');
          }}>
          <Text style={styles.loginText}>Sign Up</Text>
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>OR</Text>
        <View style={styles.footerButtonConatiner}>
          <Pressable style={styles.iconContainer}>
            <Icon name="google" type="fontisto" color={'#cb0003'} />
          </Pressable>
          <Pressable style={styles.iconContainer}>
            <Icon name="facebook" type="fontisto" color={'#094994'} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
