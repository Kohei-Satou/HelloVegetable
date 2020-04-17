import React,{Component} from 'react'
import {Text,View,FlatList,StyleSheet, Image, Button, Linking, ImageBackground } from 'react-native'
import * as newsApi from '../../Apis/api'
import vegetableImage from '../../../image/vegetable.png'

export default class Screen2 extends Component{

    constructor(props){
        super(props)
        this.state=({
            list:[]
        })
    };
    
    componentDidMount(){
        newsApi.getContents('', 50)
            .then((data)=>{
                this.setState({
                    list:data
                })
            })
            .catch((res)=>{
                console.log('error')
            })
    };
    
    render(){
        
        return(
            <View style={{ flex: 1 }}>
                <ImageBackground source={vegetableImage} style={styles.backgroundImageStyle}>

                    <FlatList
                        data={this.state.list}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ flexDirection: 'row', borderBottomWidth: 1 }}>
                                    <Text style={styles.flatListItem} onPress={() => Linking.openURL(item.url)}>{item.title}</Text>
                                    <Image source={{uri: item.urlToImage}} style={styles.itemImageStyle}></Image>
                                </View>
                            )
                        }}>
                    </FlatList>

                </ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImageStyle: {
        width: "100%",
        height: "100%"
    },
    flatListItem: {
        padding: 10,
        fontSize: 18,
        textShadowOffset: {width: 0, height: 0},
        textShadowRadius: 100,
        width: "70%",
        maxHeight: "100%",
        backgroundColor: '#ffffff',
        lineHeight: 18*1.5
    },
    itemImageStyle: {
        width: "100%",
        height: "100%",
        alignItems: 'flex-end',
        flex: 1
    }
})

