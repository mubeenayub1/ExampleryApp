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
    // backgroundColor: Theme.colors.grayColor,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headingText: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.xxbig,
    fontFamily: Theme.fontFamily.bold,
    fontWeight: '800',
    paddingBottom: moderateScale(10),
  },
  headingDetailTextContainer: {
    flexDirection: 'row',
  },
  headingDetailText: {
    color: Theme.colors.blackColor,
    fontSize: Theme.fontSizes.xmedium,
  },
  headingButton: {
    paddingHorizontal: moderateScale(10),
  },
  headingButtonText: {
    color: Theme.colors.textColor,
    fontSize: Theme.fontSizes.xmedium,
    fontWeight: '600',
  },
  formContainer: {
    height: moderateScale(300),
    width: '100%',
    // backgroundColor: Theme.colors.grayColor,
    alignItems: 'center',
    paddingTop: moderateScale(20),
  },
  inputContainer: {
    height: moderateScale(50),
    width: '80%',
    backgroundColor: Theme.colors.whiteColor,
    marginTop: moderateScale(30),
    borderRadius: moderateScale(5),
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
    width: '80%',
    backgroundColor: Theme.colors.bluePColor,
    marginTop: moderateScale(40),
    borderRadius: moderateScale(5),
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
