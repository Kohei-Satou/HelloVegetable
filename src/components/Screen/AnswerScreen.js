import React, { Component } from 'react';
import { Text, View,StyleSheet, ImageBackground, Image, TouchableWithoutFeedback, Button } from 'react-native'
import vegetableImage from '../../../image/vegetable.png'
import { Overlay } from 'react-native-elements';

var Dimensions = require('Dimensions');
var { width } = Dimensions.get('window'); 

export default class AnswerScreen extends Component {   
    constructor(props) {
        super(props);
        this.state = {isVisible : false};
    }
    
    overlayState = () => {
        this.setState({ isVisible: true })
    }

    render() {
        const navigation = this.props.navigation;
        const correctImage = navigation.state.params[1].correct ? require('./../../../image/correct.png') : require('./../../../image/incorrect.png');
        return (
            <View>
                <ImageBackground source={vegetableImage} style={styles.backgroundImageStyle}>
                    
                
                    <View onLayout={this.onLayout}>
                        <Image source={correctImage} style={styles.correctImageStyle}></Image>
                    </View>
                    <View style={styles.correctAnswer}>
                        <Text style={styles.correctText}>正解: {navigation.state.params[0].correct}</Text>
                    </View>

                        <TouchableWithoutFeedback
                            onPress={() =>
                                this.overlayState()
                            }
                        >
                            <View　style={styles.correctDiscription}>
                                <Text>解説(タップで展開)</Text>
                            </View>
                        </TouchableWithoutFeedback>
                            
                        <Overlay
                            isVisible={this.state.isVisible}
                            onBackdropPress={() => this.setState({ isVisible: false })}
                        >
                            <Text style={styles.textStyle}>{navigation.state.params[0].discription}</Text>
                        </Overlay>

                </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    textStyle: {
        fontSize: 17,
        lineHeight: 25
    },
    backgroundImageStyle: {
        width: "100%",
        height: "100%"
    },
    correctImageStyle: {
        maxWidth: '100%',
        maxHeight: '100%',
        marginTop: 50,
        alignSelf: "center",
    },
    correctText: {
        fontSize: 24
    },
    correctAnswer: {
        marginTop: 15,
        fontSize: 24,
        width: "95%",
        alignSelf: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 3,
        marginBottom: 20
    },
    correctDiscription: {
        marginTop: 5,
        fontSize: 24,
        width: "95%",
        alignSelf: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 3,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'white',
        width: width,
        overflow: 'visible',
    }  
})
