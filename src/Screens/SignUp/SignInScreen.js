import React, {useContext, useState} from 'react';
import {Text, Pressable, TextInput, View} from 'react-native';
import {Icon} from '@rneui/themed';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';
const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, googleLogin, fbLogin} = useContext(AuthContext);
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingText}>Login</Text>
        <View style={styles.headingDetailTextContainer}>
          <Text style={styles.headingDetailText}>Don't have an account?</Text>
          <Pressable
            style={styles.headingButton}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.headingButtonText}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.inputIconContainer}>
            <Icon name="mail" type="feather" />
          </View>
          <TextInput
            style={styles.inputText}
            placeholder="Enter an Email"
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
            onChangeText={password => setPassword(password)}
          />
        </View>
        <Pressable
          style={styles.LoginContainer}
          onPress={() => {
            login(email, password);
            navigation.replace('HomeScreen');
          }}>
          <Text style={styles.loginText}>LOGIN</Text>
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

export default SignInScreen;
