import React, { Component } from 'react'
import {  createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import Screen1 from './Screen/Screen1'
import Screen2 from './Screen/Screen2'
import Screen3 from './Screen/Screen3'
import Screen4 from './Screen/Screen4'

const BottomTab=createMaterialTopTabNavigator(
    {
        Web:{
            screen:Screen1,
        },
        Begin:{
            screen:Screen2
        },
        Style:{
            screen:Screen3
        },
        pom:{
            screen:Screen4,
            params:{
                number:1
            },
        }
    }
)

export default createAppContainer(BottomTab)
