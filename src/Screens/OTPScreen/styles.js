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
    backgroundColor: Theme.colors.whiteColor,
  },
  headerContainer: {
    height: moderateScale(150),
    width: '100%',
    backgroundColor: Theme.colors.whiteColor,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headingText: {
    color: Theme.colors.blackColor,
    fontSize: Theme.fontSizes.big,
    fontFamily: Theme.fontFamily.bold,
    fontWeight: '800',
    paddingBottom: moderateScale(10),
  },
  headingDetailTextContainer: {
    marginTop: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingDetailText: {
    marginTop: moderateScale(5),
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: '600',
  },
  headingButton: {
    paddingHorizontal: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingButtonText: {
    color: Theme.colors.bluePColor,
    fontSize: Theme.fontSizes.medium,
    fontWeight: '600',
  },
  formWholeContainer: {
    height: moderateScale(550),
    width: '100%',
    backgroundColor: Theme.colors.whiteColor,
    // alignItems: 'center',
    paddingTop: moderateScale(20),
    borderTopLeftRadius: moderateScale(25),
    borderTopRightRadius: moderateScale(25),
  },
  textContainer: {
    marginLeft: moderateScale(30),
    marginTop: moderateScale(20),
  },
  formContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    height: moderateScale(50),
    width: '80%',
    backgroundColor: Theme.colors.whiteColor,
    marginTop: moderateScale(30),
    borderRadius: moderateScale(25),
    flexDirection: 'row',
    overflow: 'hidden',
    paddingRight: moderateScale(10),
    elevation: 5,
    // borderColor: 'grey',
    // borderWidth: 1,
  },
  inputIconContainer: {
    marginLeft: moderateScale(2),
    height: '100%',
    width: '15%',
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.medium,
    paddingHorizontal: moderateScale(20),
    width: '100%',
  },
  forgetTextContainer: {
    width: '80%',
    height: moderateScale(20),
    alignItems: 'flex-end',
    marginTop: moderateScale(5),
    // backgroundColor: 'black',
  },

  forgetText: {
    color: Theme.colors.bluePColor,
    fontSize: Theme.fontSizes.medium,
    fontWeight: '600',
  },
  LoginContainer: {
    height: moderateScale(50),
    width: '80%',
    backgroundColor: Theme.colors.bluePColor,
    marginTop: moderateScale(30),
    borderRadius: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 5,
  },
  loginText: {
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.xmedium,
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
    height: moderateScale(100),
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
