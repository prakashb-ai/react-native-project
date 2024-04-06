import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'


const { width, height } = Dimensions.get('window') || { width: 0, height: 0 }


const ForgotPage = () => {

  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <View style={styles.container}>
      <View style={styles.ForgotContainter}>
        <Text style={styles.ForgotText}>Forgot Password?</Text>
      </View>

      <View style={styles.createContainer}>
        <Text style={styles.createText}>Remember your pasword?
          <Text style={styles.createColor}> Login</Text>
        </Text>
      </View>


      <View style={styles.PhoneContainer}>
        <View style={styles.TextInputContainer}>

          <View style={styles.textinput}>
            <Image
              source={require('../../../images/callicon.png')}
              style={{ width: 20, height: 20, marginRight: width / 50, alignContent: 'center', justifyContent: 'center', }} // Adjust styles as needed
            />
            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              onChangeText={text => setPhoneNumber(text)}
              value={phoneNumber}
              keyboardType="numeric" 
              autoCapitalize="none"
            />

          </View>
        </View>
      </View>
      <View style={[styles.buttonContainer, { backgroundColor: "#D5715B" }]}>
        <Text style={styles.buttonText}>Send Code</Text>
      </View>

    </View>
  )
}





export default ForgotPage

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ForgotContainter: {
    marginTop: height / 5,
    marginLeft: width / 34
  },
  ForgotText: {
    fontSize: 32,
    fontWeight: '700'
  },
  createContainer: {
    marginTop: height / 33,
    marginLeft: width / 22

  },
  createText: {
    color: '#D3D3D3',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20

  },
  createColor: {
    color: '#D5715B',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20
  },

  PhoneContainer: {
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
  input: {
    fontSize: 17
  },

  buttonContainer:{
    margin:height/25,
    width: width / 1.2,
    height: height / 14,
    borderRadius: 48,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color:'white'
},



})