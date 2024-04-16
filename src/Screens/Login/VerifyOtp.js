import { StyleSheet, View, Dimensions, Text, TextInput,TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'


const { width, height } = Dimensions.get('window') || { width: 0, height: 0 }



const VerifyOtp = ({navigation}) => {


    const [otp, setOtp] = useState(['', '', '', '', '']);
    const otpBoxes = useRef([]);

    const handleOTPChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < otp.length - 1) {
            otpBoxes.current[index + 1].focus();
        }
    };



    return (
        <View style={styles.container}>
            <View style={styles.VerifyOtpContainer}>
                <Text style={styles.ForgotText}>Verify OTP</Text>
            </View>

            <View style={styles.createContainer}>
                <Text style={styles.createText}>Remember your password?
                    <Text style={styles.createColor}> Login</Text>
                </Text>
            </View>


            <View style={styles.otpBoxes}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(ref) => (otpBoxes.current[index] = ref)}
                        style={styles.input}
                        onChangeText={(value) => handleOTPChange(index, value)}
                        value={digit}
                        maxLength={1}
                        keyboardType="numeric"
                    />
                ))}
            </View>


            <TouchableOpacity 
                onPress={()=>navigation.navigate('ResetPassword')}
            >
                <View style={[styles.buttonContainer, { backgroundColor: "#D5715B" }]}>
                    <Text style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableOpacity>

            <View>
                <Text style={styles.resend}>Resend Code</Text>
            </View>
        </View>
    )
}

export default VerifyOtp

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    VerifyOtpContainer: {
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
    otpBoxes: {

        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: height / 10


    },
    input: {
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
        textAlign: 'center',
        width: width / 8,
        height: height / 16,
        fontSize: 20,
        margin: width / 35
    },
    buttonContainer: {
        margin: height / 28,
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
        color: 'white'
    },
    resend: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: '400',
        fontSize: 14

    }



})