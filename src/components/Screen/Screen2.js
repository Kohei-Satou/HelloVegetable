import React,{Component} from 'react'
import {Text,View,FlatList,StyleSheet, Image, Button, Linking } from 'react-native'
import * as kohei from '../../Apis/api'
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Linkify from 'react-linkify';

const styles = StyleSheet.create({
    flatListItem: {
        padding: 10,
        fontSize: 18,
        // color: '#000000',
        // textShadowColor: '#000000',
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 100,
        width: "70%",
        maxHeight: "100%",
        backgroundColor: '#ffffff',
        opacity: 0.5,
        // border
    },
    imageStyle: {
        width: 120,
        height: 100,
        // position: 'absolute',
        alignItems: 'flex-end',
        // textAlign: 'right',
        // right: 0,
        // marginTop: 22
    }
})


export default class Screen2 extends Component{
    constructor(props){
        super(props)
        this.state=({
            list:[]
        })
    }
    
    componentDidMount(){
        kohei.getContents('ラグビー', 50)
            .then((data)=>{
                this.setState({
                    list:data
                })
            })
            .catch((res)=>{
                console.log('error')
            })
    }    
    
    render(){
        const html = '<a href="https://cpoint-lab.co.jp/article/201903/8569/">ページを開く</a>'
        
        return(
            
            //returnの中で{}で囲った部分はjsが使えます
            <View style={{ flex: 1,  maxWidth: "100%", maxHeight: "100%"}}>
                
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.flatListItem} onPress={() => Linking.openURL(item.url)}>{item.title}</Text>
                                <Image source={{uri: item.urlToImage}} style={styles.imageStyle}></Image>
                            </View>
                        )
                    }}>
                </FlatList>
            </View>
        )
    }
}
