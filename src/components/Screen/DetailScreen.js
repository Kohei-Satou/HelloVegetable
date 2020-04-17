import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import vegetableImage from '../../../image/vegetable.png'



export default class DetailsScreen extends Component {

  render() {
        return (
            <View>
                <ImageBackground source={vegetableImage} style={styles.imageStyle}>
                    <View style={styles.textViewStyle}>
                        <Text style={styles.textStyle}>{this.props.navigation.state.params.description}</Text>
                    </View>
                </ImageBackground>
            </View>
      );
    }
  }
  
const styles=StyleSheet.create({
    textStyle:{
        fontSize: 15,
        lineHeight: 17*1.5,
    },
    imageStyle:{
        width: "100%",
        height: "100%"
    },
    textViewStyle: {
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        marginTop: 5,
        width: "98%",
        alignSelf: "center",
        padding: 5,
    }
})

