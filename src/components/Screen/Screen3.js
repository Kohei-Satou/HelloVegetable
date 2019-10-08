import React, { Component } from 'react'
import {Text,StyleSheet} from 'react-native'

export default class Screen3 extends Component {
    render() {
        return (
            <Text style={styles.textStyle}>これはテストです。</Text>
        )
    }
}

const styles=StyleSheet.create({
    textStyle:{
        color:'red',
        fontSize:29
    }
})
