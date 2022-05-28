import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Theme.colors.bluePColor,
  },
  headerContainer: {
    height: moderateScale(150),
    width: '100%',
    backgroundColor: Theme.colors.bluePColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.xxbig,
    fontFamily: Theme.fontFamily.bold,
    fontWeight: '800',
    paddingBottom: moderateScale(10),
  },
  headingDetailTextContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
  },
  headingDetailText: {
    marginTop: moderateScale(30),
    marginBottom: moderateScale(10),
    fontWeight: '600',
    color: Theme.colors.blackColor,
    fontSize: Theme.fontSizes.xxmedium,
  },
  headingButton: {
    paddingHorizontal: moderateScale(5),
  },
  headingButtonText: {
    color: Theme.colors.bluePColor,
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  formContainer: {
    height: moderateScale(600),
    width: '100%',
    backgroundColor: Theme.colors.whiteColor,
    alignItems: 'center',
    paddingTop: moderateScale(20),
    borderTopLeftRadius: moderateScale(25),
    borderTopRightRadius: moderateScale(25),
  },
  inputContainer: {
    height: moderateScale(50),
    width: '90%',
    backgroundColor: Theme.colors.whiteColor,
    marginTop: moderateScale(20),
    borderRadius: moderateScale(25),
    flexDirection: 'row',
    overflow: 'hidden',
    paddingRight: moderateScale(10),
    elevation: 5,
    // borderColor: 'grey',
    // borderWidth: 1,
  },
  inputIconContainer: {
    height: '100%',
    width: '15%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.medium,
  },
  LoginContainer: {
    height: moderateScale(50),
    width: '90%',
    backgroundColor: '#FF0000',
    marginTop: moderateScale(30),
    borderRadius: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 5,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  loginText: {
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.xxmedium,
    fontWeight: '600',
  },
  footerContainer: {
    height: moderateScale(150),
    width: '100%',
    alignItems: 'center',
    // backgroundColor: Theme.colors.grayColor,
  },
  footerText: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.xmedium,
    marginVertical: moderateScale(10),
  },
  footerButtonConatiner: {
    flexDirection: 'row',
    width: '100%',
    height: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Theme.colors.grayColor,
  },
  iconContainer: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    marginHorizontal: moderateScale(20),
    backgroundColor: Theme.colors.whiteColor,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    height: moderateScale(150),
    width: '100%',
    alignItems: 'center',
    // backgroundColor: Theme.colors.grayColor,
  },
  footerText: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.xmedium,
    marginVertical: moderateScale(10),
  },
  footerButtonConatiner: {
    flexDirection: 'row',
    width: '100%',
    height: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: Theme.colors.grayColor,
  },
  iconContainer: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    marginHorizontal: moderateScale(20),
    backgroundColor: Theme.colors.whiteColor,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
