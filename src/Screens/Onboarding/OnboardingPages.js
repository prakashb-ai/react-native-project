import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, FlatList,TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window') || { width: 0, height: 0 }



const slides = [
    {
        key: '1',
        title: 'Quality',
        description: 'Sell your fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain',
        image: require('../../../images/Group44.png'),
        text: 'Join the movement',
        loginText: 'Login',
        backgroundColor: '#5EA25F'
    },
    {
        key: '2',
        title: 'Convenient',
        description: 'Our team of delivery will make sure your orders are picked up on time and promptly delivered to your customers',
        image: require('../../../images/Group.png'),
        text: 'Join the movement',
        loginText: 'Login',
        backgroundColor: '#D5715B'
    },
    {
        key: '3',
        title: 'Local',
        description: 'We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time',
        image: require('../../../images/Group46.png'),
        text: 'Join the movement',
        loginText: 'Login',
        backgroundColor: '#F8C569',
    }
];

const OnboardingPages = ({navigation}) => {
    const [showHomePage, setShowHomePage] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderSlide = ({ item, index }) => {
        return (
            <View style={styles.container}>
                <View style={[styles.imageContainer, { backgroundColor: item.backgroundColor }]}>
                    <Image
                        source={item.image}
                        style={styles.images}
                    />
                </View>

                <View style={styles.boxInformation}>
                    <View style={styles.titleName}>
                        <Text style={styles.titleSize}>{item.title}</Text>
                    </View>

                    <View style={styles.descriptionsContainer}>
                        <Text style={styles.descriptionName}>{item.description}</Text>
                    </View>

                    <View style={styles.dotsContainer}>
                        {slides.map((_, index) => (
                            <View
                                key={index}
                                style={[styles.dot, index === currentIndex ? styles.activeDot : null]}
                            />
                        ))}
                    </View>

                    <View style={[styles.buttonContainer, { backgroundColor: item.backgroundColor }]}>
                        <Text style={styles.buttonText}>{item.text}</Text>
                    </View>


                    <View style={styles.LoginContainer}>
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('LoginPage')}
                        >
                        <Text style={styles.loginText}>{item.loginText}</Text>
                        </TouchableOpacity>
                    </View>

                </View>



            </View>
        );
    };

    return (
        <View style={styles.container}>
            {!showHomePage && (
                <>
                    <FlatList
                        data={slides}
                        renderItem={renderSlide}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.key}
                        onScroll={(event) => {
                            const { contentOffset } = event.nativeEvent;
                            const index = Math.round(contentOffset.x / width);
                            setCurrentIndex(index);
                        }}
                    />

                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,

    },
    imageContainer: {
        width: width * 1,
        height: height / 1.44,
        paddingTop: height / 26,

    },
    images: {
        width: width,
        height: height / 2,
        resizeMode: 'contain',

    },

    boxInformation: {
        width: width,
        height: height,
        backgroundColor: 'white',
        elevation: 6,
        borderTopLeftRadius: height / 17,
        marginTop: -height / 6.5,
        borderTopRightRadius: height / 17,

    },
    titleName: {
        alignItems: 'center',
        marginTop: height / 27
    },
    titleSize: {
        fontSize: 24,
        fontWeight: '700'
    },
    descriptionsContainer: {
        alignItems: 'center',
        marginTop: height / 18,
        margin: width / 12,


    },
    descriptionName: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20.45,
        textAlign: 'center'
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: height / 4.6,

    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 5,
        backgroundColor: '#261C12'
    },
    activeDot: {
        width: 15,
        height: 7,
        borderRadius: 3,
        backgroundColor: '#261C12',
    },
    buttonContainer: {
        marginTop: -height / 6,
        width: width / 1.2,
        height: height / 14,
        borderRadius: 48,
        justifyContent: 'center',
        alignSelf: 'center'

    },
    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
    },
    LoginContainer: {
        marginTop: height / 35

    },
    loginText: {
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 20.45,
        textDecorationLine: 'underline'
    },

});

export default OnboardingPages;
