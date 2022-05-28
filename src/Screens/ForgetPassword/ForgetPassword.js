import React, {useContext, useState} from 'react';
import {Text, Pressable, TextInput, View, ScrollView} from 'react-native';
import {Icon} from '@rneui/themed';
import styles from './styles';
// import {AuthContext} from '../../navigation/AuthProvider';
const ForgetPassword = ({navigation}) => {
  // const [email, setEmail] = useState();
  //   const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');

  const GetOTP = () => {
    if (phoneNumber && phoneNumber.length > 9) {
      navigation.navigate('OtpScreen', {phoneNumber});
    } else alert('Please enter 10 digit phone number');
  };
  // const {login, googleLogin, fbLogin} = useContext(AuthContext);
  return (
    <View style={styles.maincontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headingText}>RESET PASSWORD</Text>
        </View>

        <View style={styles.formWholeContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.headingDetailText}>
              Do You Forget Your Password?
            </Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <View style={styles.inputIconContainer}>
                <Icon name="mail" type="feather" />
              </View>
              <TextInput
                style={styles.inputText}
                placeholder="Enter Phone Number"
                placeholderTextColor={'grey'}
                value={phoneNumber}
                onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
              />
            </View>

            <Pressable
              style={styles.LoginContainer}
              onPress={() => {
                GetOTP();
              }}>
              <Text style={styles.loginText}>GET OTP</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForgetPassword;
