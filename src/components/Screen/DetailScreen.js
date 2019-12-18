import React, { Component } from 'react'
import { Button, View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon, withTheme, Header } from 'react-native-elements';
import { GlobalStyle } from '../../grobalStyles/GrobalStyles';
import GoogleFontLoader from 'react-google-font-loader';
import vegetableImage from '../../../image/vegetable.png'



export default class DetailsScreen extends Component {
    // constructor(props){
    //     super(props)
    //     const {params}=this.props.navigation.state
    //     this.text=params.item
    // }

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
        // fontFamily: 'YuGothic',
        fontSize: 24,
        fontWeight: "500"
    },
        imageStyle:{
            width: "100%",
            height: "100%"
        }
})

