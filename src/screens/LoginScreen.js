// src/screens/LoginScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => navigation.replace('Main')} />
    </View>
  );
};

export default LoginScreen;
