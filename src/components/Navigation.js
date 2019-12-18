import React, { Component } from 'react'
import {  createMaterialTopTabNavigator, createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer, Image } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import { Button, Icon, withTheme } from 'react-native-elements';
import {StyleSheet } from 'react-native'
import Screen1 from './Screen/Screen1'
import Screen2 from './Screen/Screen2'
import Screen3 from './Screen/Screen3'
import Screen4 from './Screen/Screen4'
import Screen5 from './Screen/Screen5'
import DetailScreen from './Screen/DetailScreen'
import BackgroundImage from '../../image/vegetable.png'

const styles=StyleSheet.create({
    screenShadow:{
        shadowRadius: 10,
        shadowOpacity: 10
    }
})


// 画面全ての画面を定義
const App = createStackNavigator({
    List: {
        screen: Screen5,
        navigationOptions: {
            headerTitle: 'List',
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions:({navigation}) => ({
            title: `${navigation.state.params.title}`,
        }),
    },
});

const Top = createStackNavigator({
    Home: {
        screen: Screen1,
        navigationOptions: {
            headerTitle: 'Home',
        }
    }
});

const News = createStackNavigator({
    News: {
        screen: Screen2,
        navigationOptions: {
            headerTitle: 'News',
            headerStyle: styles.screenShadow
        }
    }
});



const BottomTab = createMaterialTopTabNavigator(
    {
        Top: {
            screen: Top,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                    <Icon name={'home'} size={22} color={'#168bc9'}/>
                )
            }
        },
        News: {
            screen: News,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon name={"send"} size={22} color={'#168bc9'}/>
                )
            }
        },
        List: {
            screen: App,
            navigationOptions: {
                tabBarIcon: () => (
                    <Icon name={"book"} size={22} color={'#168bc9'}/>
                )
            }
        },
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            upperCaseLabel: false,
            activeTintColor: '#168bc9',
            inactiveTintColor: 'black',
            style: {
                backgroundColor: '#cbdd45',
                color: '#13455',
            }
        },
    });


    
export default createAppContainer(BottomTab)