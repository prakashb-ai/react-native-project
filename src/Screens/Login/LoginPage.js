import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image,TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'


const { width, height } = Dimensions.get('window') || { width: 0, height: 0 }

const LoginPage = ({navigation}) => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(false)



  const getPasswordValue = () => {
    return password ? password.toString() : ''

  }
  return (
    <View style={styles.container}>

      <View style={styles.WelcomeContainter}>
        <Text style={styles.welcomeText}>Welcome back!</Text>
      </View>

      <View style={styles.createContainer}>
        <Text style={styles.createText}>New here?
          <Text style={styles.createColor}> Create account</Text>
        </Text>
      </View>


      <View style={styles.LoginContainer}>
        <View style={styles.TextInputContainer}>

          <View style={styles.textinput}>
            <Icon name="at" size={20} color="#D3D3D3" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              onChangeText={text => setEmail(text)}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />



          </View>

          <View style={styles.passowordText}>
            <Icon name="lock" size={20} color="#D3D3D3" style={styles.passwordIcon} />
            <TextInput

              style={styles.paddingLeftinput}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
              secureTextEntry={true}

              value={getPasswordValue()}
              autoCapitalize="none"
            />
            <View style={styles.forgetText}>
              <TouchableOpacity
                onPress={()=>navigation.navigate('ForgotPage')}
              >
              <Text style={styles.forgetWord}>Forgot?</Text>
              </TouchableOpacity>
            </View>
          </View>


          <View style={[styles.buttonContainer, {  backgroundColor: "#D5715B"}]}>
            <Text style={styles.buttonText}>Login</Text>
          </View>


          <View style={styles.orLoginContainer}>
            <Text style={styles.LoginWithWord}>or login with</Text>
          </View>


          <View style={styles.loginIcon}>
            <View>
            <Image source={require('../../../images/googlemini.png')}></Image>
            </View>

            <View>
            <Image source={require('../../../images/appleiconmini.png')}></Image>
            </View>

            <View>
            <Image source={require('../../../images/facebookmini.png')}></Image>
            </View>
        </View>

        </View>


      </View>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  WelcomeContainter: {
    marginTop: height / 5,
    marginLeft: width / 34
  },
  welcomeText: {
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
  passowordText: {
    flexDirection: 'row',
    fontWeight: 500,
    padding: height / 50,
    marginRight: "100%",
    backgroundColor: 'white',
    marginTop: 20,
    width: width / 1.1,
    height: height / 14,
    borderRadius: Math.min(width, height) / 24,
    paddingLeft: width / 20,
    elevation: 0.5,



  },
  input: {
    fontSize: 17,
  },
  forgetWord: {
    fontSize: 12,
    color: "#D5715B",

  },

  icon: {
    marginRight: width / 50,
  },
  passwordIcon: {
    marginRight: width / 25

  },
  forgetText: {
    justifyContent: 'center',
    paddingLeft:width/2.5

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

orLoginContainer:{
  alignItems:'center'
},
LoginWithWord:{
  color: "#261C124D"
},

loginIcon:{
    flexDirection:'row',
    justifyContent:'space-between',
    top:height/30,
    margin:height/50
},





})