import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, TouchableWithoutFeedback, Platform } from 'react-native'
import topImage from '../../../image/top_info.png'
import QuestionScreen from './QuestionScreen'
import vegetableImage from '../../../image/vegetable.png'

export default class Screen1 extends Component {
    render() {

        return (
            <View style={{flex: 1}}>
                <ImageBackground source={vegetableImage} style={styles.backgroundImageStyle}>
                    <Image source={topImage} style={styles.imageStyle}></Image>
                    {/* クイズに遷移する */}
                    <View style={styles.buttonStyle}>
                        <TouchableWithoutFeedback
                            onPress={() =>
                                this.props.navigation.navigate("QuestionList", {
                                title: "Organic Quiz",
                                questions: QuestionScreen,
                                color: "#36b1f0"
                                })
                            }
                        >
                            <Text style={styles.textStyle}>? Question ?</Text>
                        </TouchableWithoutFeedback>
                        
                    </View>
              </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    imageStyle:{
        width: "100%",
        height: "30%",
        marginTop: 30,
    },
    backgroundImageStyle: {
        width: '100%',
        height: '100%'
    },
    textStyle: {
        fontSize: 41,
        color: 'gray',
        textAlign: 'center',
        margin: 10,
    },
    buttonStyle: {
        backgroundColor: '#fff',
        borderRadius: 30,
        alignSelf: 'center',
        width: '100%',
        marginTop: 150,
        borderColor: 'gray',
        borderWidth: 1
    }
})
