import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width, height } = Dimensions.get('window') || { width: 0, height: 0 };

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.VerifyOtpContainer}>
        <Text style={styles.ForgotText}>Reset Password</Text>
      </View>

      <View style={styles.createContainer}>
        <Text style={styles.createText}>
          Remember your password?
          <Text style={styles.createColor}> Login</Text>
        </Text>
      </View>

      <View style={styles.LoginContainer}>
        <View style={styles.TextInputContainer}>
          <View style={styles.textinput}>
            <Icon name="at" size={20} color="#D3D3D3" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="new password"
              onChangeText={(text) => setNewPassword(text)}
              value={newPassword}
              autoCapitalize="none"
            />
          </View>
         </View>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  VerifyOtpContainer: {
    marginTop: height / 5,
    marginLeft: width / 34,
  },
  ForgotText: {
    fontSize: 32,
    fontWeight: '700',
  },
  createContainer: {
    marginTop: height / 33,
    marginLeft: width / 22,
  },
  createText: {
    color: '#D3D3D3',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  createColor: {
    color: '#D5715B',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  textinput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    marginHorizontal: width / 22,
    marginBottom: height / 33,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },

  LoginContainer: {
    marginTop: height / 10
  },
  TextInputContainer: {
    width: width / 1.1,
    height: height / 14,
    backgroundColor: 'white',
    margin: height / 50,
    borderRadius: Math.min(width, height) / 24,
    marginRight: "100%",
    elevation: 0.5,


  },
  textinput: {
    paddingLeft: width / 50,
    flexDirection: 'row',
    fontWeight: 500,
    padding: height / 50,
    marginLeft: height / 60,


  },
});
