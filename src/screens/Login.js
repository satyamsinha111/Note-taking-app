import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Button} from 'native-base';

const Login = ({navigation, route}) => {
  return (
    <ScrollView contentContainerStyle={styles.Container}>
      <View style={styles.FormContainer}>
        <View style={styles.LogoContainer}>
          <Text style={styles.Text}>Note taking app</Text>
        </View>
        <View style={styles.ContentContainer}>
          <Text style={styles.FormLabel}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#bbbbbb"
            style={styles.FormInput}
            // style={{ textAlign: 'left' }}
          />
          <Text style={styles.FormLabel}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            placeholderTextColor="#bbbbbb"
            style={styles.FormInput}
          />
          <Button block style={styles.SigninButton}>
            <Text style={{color: '#eee', fontSize: 16, letterSpacing: 1}}>
              Sign In to your account
            </Text>
          </Button>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 10,
              color: '#f8f7de',
              fontSize: 20,
              letterSpacing: 1,
            }}>
            Or
          </Text>
          <Button
            block
            style={styles.CreateButton}
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={{color: '#eee', fontSize: 16, letterSpacing: 1}}>
              Create a new account
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#1c2b2d',
  },
  FormContainer: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 120,
    // backgroundColor: 'red',
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 2,
    color: '#eee',
    paddingBottom: 10,
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: '#eee',
    paddingLeft: 8,
    // textAlign: 'left',
  },

  ContentContainer: {
    flex: 10,
    justifyContent: 'center',

    // backgroundColor: 'violet',
  },
  FormInput: {
    borderWidth: 2,
    borderRadius: 30,
    marginVertical: 13,
    fontSize: 20,
    borderColor: '#eee',
    color: '#eee',
    paddingHorizontal: 10,
  },
  FormLabel: {
    color: '#f8f7de',
    fontSize: 20,
    marginLeft: 10,
  },
  SigninButton: {
    width: '100%',
    backgroundColor: '#931a25',
    borderRadius: 30,
    marginTop: 10,
    height: 50,
  },
  CreateButton: {
    width: '100%',
    backgroundColor: '#bb2205',
    borderRadius: 30,
    marginTop: 10,
    height: 50,
  },
  LogoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 0,
  },
});
