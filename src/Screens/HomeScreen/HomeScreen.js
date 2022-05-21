import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: '#094994', fontSize: 18, fontWeight: '600'}}>
        Welcome To Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;
