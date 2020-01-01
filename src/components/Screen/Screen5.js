import React, { Component } from 'react';
import { FlatList, Text, View,StyleSheet, TouchableOpacity, Button } from 'react-native'
import flatListData from '../../../data/firstListData';
// import { TouchableOpacity } from 'react-native-gesture-handler'
import Navigation from '../Navigation';
import { createStackNavigator } from 'react-navigation-stack'
import DetailScreen from './DetailScreen';
import Nav from '../Navigation';

export default class Screen5 extends Component {    

    render() {
        return (
            <View>
                <FlatList
                    data={flatListData}
                    renderItem={({ item }) => {
                        return (
                        <View>
                            <Button title={item.title}　onPress={() => {this.props.navigation.navigate('Detail', item)}} />
                        </View>
                        )
                    }}>
                </FlatList>
            </View>
        )
    }
}

