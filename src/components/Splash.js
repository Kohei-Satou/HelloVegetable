import React, { Component } from 'react'
import Navigation from './Navigation'
import SafeAreaView, { SafeAreaProvider } from 'react-native-safe-area-view';
import { View, StyleSheet, ImageBackground } from 'react-native';
import vegetableImage from '../../image/vegetable.png'
import { SplashScreen } from 'expo';

export default class Main extends Component {
    render() {
        return (
            // <View>
                <ImageBackground source={vegetableImage} style={{width: '100%', height: '100%'}}>
                    <Navigation />
                </ImageBackground>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
    fontStyle: {
        color: '#ffffff',
    }
}) 
