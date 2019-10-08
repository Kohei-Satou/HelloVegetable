import React, { Component } from 'react'
import {Text} from 'react-native'

export default class Screen4 extends Component {
    constructor(props){
        super(props)
        const {params}=this.props.navigation.state
        this.text=params.number
    }
    render() {
        
        return (
            <Text>{this.text}</Text>
        )
    }
}
