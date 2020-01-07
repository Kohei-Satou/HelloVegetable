import React from 'react'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Icon } from 'react-native-elements';
import {StyleSheet } from 'react-native'
import Screen1 from './Screen/Screen1'
import Screen2 from './Screen/Screen2'
import Screen5 from './Screen/Screen5'
import QuestionScreen from './Screen/QuestionScreen'
import DetailScreen from './Screen/DetailScreen'
import QuizScreen from './Screen/QuizScreen'
import AnswerScreen from './Screen/AnswerScreen'

const styles=StyleSheet.create({
    screenShadow:{
        shadowRadius: 10,
        shadowOpacity: 10
    }
})

// Quizの画面を定義
const QuizTab = createStackNavigator({
    QuizTop: {
        screen: Screen1,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#64A12E",
            },
            headerTintColor: "#ffffff",
            headerTitle: "Top",
        }
    },
    QuestionList: {
        screen: QuestionScreen,
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: "#64A12E",
            },
            headerTintColor: "#ffffff",
            headerTitle: navigation.getParam("title"),
          })
    },
    Quiz: {
        screen: QuizScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: "#64A12E",
            },
            headerTintColor: "#ffffff",
            title: `${navigation.state.params.num}`,
        })
    },
    Answer: {
        screen: AnswerScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#64A12E",
            },
            headerTintColor: "#ffffff",
            headerTitle: '答え',
        }
    },
});

// Listの画面を定義
const ListTab = createStackNavigator({
    List: {
        screen: Screen5,
        navigationOptions: {
            headerTitle: 'List',
            headerStyle: {
                backgroundColor: "#64A12E",
            },
            headerTintColor: "#ffffff",
        }
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions:({navigation}) => ({
            title: `${navigation.state.params.title}`,
            headerStyle: {
                backgroundColor: "#64A12E",
            },
            headerTintColor: "#ffffff",
        }),
    },
});

const News = createStackNavigator({
    News: {
        screen: Screen2,
        navigationOptions: {
            headerTitle: 'News',
            headerStyle: {
                backgroundColor: "#64A12E",
            },
            headerTintColor: "#ffffff",
        }
    }
});

const BottomTab = createMaterialTopTabNavigator(
    {
        Top: {
            screen: QuizTab,
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
            screen: ListTab,
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