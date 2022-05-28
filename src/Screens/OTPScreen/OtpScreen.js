import React, {useContext, useEffect, useRef, useState} from 'react';
import {Text, Pressable, TextInput, View, ScrollView} from 'react-native';
import {Icon} from '@rneui/themed';
import styles from './styles';
// import {AuthContext} from '../../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
const OtpScreen = ({
  route: {
    params: {phoneNumber},
  },
  navigation,
}) => {
  // const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']);
  // const [submittingOtp, setSubmittingOtp] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const [confirm, setConfirm] = useState(null);

  // const firstTextInputRef = useRef(null);
  // const secondTextInputRef = useRef(null);
  // const thirdTextInputRef = useRef(null);
  // const fourthTextInputRef = useRef(null);
  // const fivthTextInputRef = useRef(null);
  // const sixthTextInputRef = useRef(null);
  // const refCallback = textInputRef => node => {
  //   textInputRef.current = node;
  // };
  useEffect(() => {
    signInWithPhoneNumber();
  }, []);

  async function signInWithPhoneNumber() {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    } catch (e) {
      console.log(e);
    }
  }

  // async function
  const confirmCode = () => {
    if (errorMessage.length == 0) {
      Alert.alert('Please enter an otp.', [{text: 'Okay'}]);
      return;
    } else {
      navigation.navigate('HomeScreen');
    }
    // try {
    //   alert();
    //   // const code = otpArray.join('');
    //   const response = await confirm.confirm();
    //   console.log(response);
    //   if (response) {
    //     navigation.navigate('HomeScreen');
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  };
  // const onOtpChange = index => {
  //   return value => {
  //     if (isNaN(Number(value))) {
  //       return;
  //     }
  //     const otpArrayCopy = otpArray.concat();
  //     otpArrayCopy[index] = value;
  //     setOtpArray(otpArrayCopy);
  //     // if (value !== '') {
  //     //   if (index === 0) {
  //     //     secondTextInputRef.current.focus();
  //     //   } else if (index === 1) {
  //     //     thirdTextInputRef.current.focus();
  //     //   } else if (index === 2) {
  //     //     fourthTextInputRef.current.focus();
  //     //   } else if (index === 3) {
  //     //     fivthTextInputRef.current.focus();
  //     //   } else if (index === 4) {
  //     //     sixthTextInputRef.current.focus();
  //     //     setSubmittingOtp(false);
  //     //   }
  //     // }
  //   };
  // };
  // const onOtpKeyPress = index => {
  //   return ({nativeEvent: {key: value}}) => {
  //     if (value === 'Backspace' && otpArray[index] === '') {
  //       if (index === 1) {
  //         firstTextInputRef.current.focus();
  //       } else if (index === 2) {
  //         secondTextInputRef.current.focus();
  //       } else if (index === 3) {
  //         thirdTextInputRef.current.focus();
  //       } else if (index === 4) {
  //         fourthTextInputRef.current.focus();
  //       } else if (index === 5) {
  //         fivthTextInputRef.current.focus();
  //       }
  //       if (isAndroid && index > 0) {
  //         const otpArrayCopy = otpArray.concat();
  //         otpArrayCopy[index - 1] = '';
  //         setOtpArray(otpArrayCopy);
  //       }
  //     }
  //   };
  // };

  return (
    <View style={styles.maincontainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.headingText}>
            Enter OTP sent to your Number{' ' + phoneNumber}
          </Text>
        </View>

        <View style={styles.formWholeContainer}>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              {/* {[
                firstTextInputRef,
                secondTextInputRef,
                thirdTextInputRef,
                fourthTextInputRef,
                fivthTextInputRef,
                sixthTextInputRef,
              ].map((textInputRef, index) => ( */}
              <TextInput
                //  style={styles.inputTex}
                // value={otpArray[index]}
                // onKeyPress={onOtpKeyPress(index)}
                // onChangeText={onOtpChange(index)}
                value={errorMessage}
                onChangeText={() => {
                  setErrorMessage(errorMessage);
                }}
                keyboardType={'numeric'}
                maxLength={1}
                // autoFocus={index === 0 ? true : undefined}
                // refCallback={refCallback(textInputRef)}
                // key={index}
                style={styles.inputText}
                placeholderTextColor={'grey'}
                placeholder=" OTP "
              />
              {/* ))} */}
            </View>
            {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}
            <Pressable
              style={styles.LoginContainer}
              onPress={() => confirmCode()}
              // disabled={submittingOtp}
            >
              <Text style={styles.loginText}>LOGIN</Text>
            </Pressable>

            {/* <Pressable
              style={[styles.LoginContainer, {backgroundColor: '#cb0003'}]}
              onPress={() => navigation.replace('SignIn')}>
              <Text style={styles.loginText}>Cancel</Text>
            </Pressable> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OtpScreen;
