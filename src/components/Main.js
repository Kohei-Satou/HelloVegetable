import React,{Component} from 'react'
import Navigation from './Navigation'
import SafeAreaView from 'react-native-safe-area-view';
import {View, StyleSheet } from 'react-native';

export default class Main extends Component{
    render(){
        return(
            <SafeAreaView style={styles.safeArea}>
                <Navigation />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#ddd'
    }
})