import React, { Component } from 'react';
import { FlatList, View,StyleSheet, Button, Text, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import flatListData from '../../../data/firstListData';
import vegetableImage from '../../../image/vegetable.png';

export default class Screen5 extends Component {    

    constructor(props) {
        super(props);
        this.state = {isVisible : false};
    }

    overlayState = () => {
        this.setState({ isVisible: true })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ImageBackground source={vegetableImage} style={styles.backgroundImageStyle}>
                    <FlatList
                        data={flatListData}
                        renderItem={({ item }) => {
                            return (
                                <View style={ styles.buttonBackStyle }>
                                    <View style={ styles.buttonstyle }>

                                        <TouchableWithoutFeedback
                                            onPress={() => 
                                                {this.props.navigation.navigate('Detail', item)}}>
                                            <Text style={styles.textStyle}>{ item.title }</Text>
                                        </TouchableWithoutFeedback>
                                        
                                    </View>
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
        width: '100%',
        height: '100%'
    },
    buttonStyle: {
        alignSelf: 'center',
        width: '95%',
        marginBottom: 3,
        margin: 15,
    },
    buttonBackStyle: {
        backgroundColor: '#fff',
        opacity: 0.8
    },
    textStyle: {
        fontSize: 17,
        textAlign: 'center',
        color: '#000000',
        marginBottom: 3,
        margin: 15,
        lineHeight: 17*1.5
    }
});
