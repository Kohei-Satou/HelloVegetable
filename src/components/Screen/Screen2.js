import React,{Component} from 'react'
import {Text} from 'react-native'


export default class Screen2 extends Component{
    constructor(props){
        super(props)
        this.text='text'
    }
    render(){
        return(
            //returnの中で{}で囲った部分はjsが使えます
            <Text>{this.text}</Text>
        )
    }
}


