import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import vegetableImage from '../../../image/vegetable.png'



export default class DetailsScreen extends Component {

  render() {
        return (
            <View>
                <ImageBackground source={vegetableImage} style={styles.imageStyle}>
                    <Text style={styles.textStyle}>{this.props.navigation.state.params.description}</Text>
                </ImageBackground>
            </View>
      );
    }
  }
  
const styles=StyleSheet.create({
    textStyle:{
        fontSize: 17,
        lineHeight: 24,
        marginTop: 10,
        width: "98%",
        alignSelf: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
    },
    imageStyle:{
        width: "100%",
        height: "100%"
    }
})

