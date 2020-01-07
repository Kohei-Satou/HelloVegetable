import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import vegetableImage from '../../../image/vegetable.png'

export default class QuizScreen extends Component {

    render() {
      return (
        <View styles={styles.textStyle}>
            <ImageBackground source={vegetableImage} style={styles.imageStyle}>

                <View style={styles.questionStyle}>
                    <Text style={styles.questionTitle}>{this.props.navigation.state.params.question}</Text>
                </View>

                <View>
                    {this.props.navigation.state.params.answers.map(
                        data => {
                            return (
                                <TouchableWithoutFeedback
                                    onPress={() => {this.props.navigation.navigate('Answer', [this.props.navigation.state.params, data])}}
                                >

                                <View style={ styles.questionChoice }>
                                    <Text style={styles.textStyle}>{data.id}. {data.text}</Text>
                                </View>
                                
                                </TouchableWithoutFeedback>
                            )}
                        )
                    }
                </View>

            </ImageBackground>
        </View>
      );
    }
  }
  
const styles=StyleSheet.create({
    textStyle:{
       fontSize: 24,
       lineHeight: 24*1.5
    },
    imageStyle:{
        width: "100%",
        height: "100%"
    },
    questionStyle: {
        marginTop: 15,
        fontSize: 24,
        width: "95%",
        alignSelf: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 50
    },
    questionTitle: {
        fontSize: 28,
        lineHeight: 28*1.5
    },
    questionChoice: {
        marginTop: 15,
        fontSize: 24,
        width: "95%",
        alignSelf: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
    }
})

