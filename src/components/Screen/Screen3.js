import React, { Component } from 'react';
import { FlatList, Text, View,StyleSheet, TouchableOpacity, Button } from 'react-native'
import flatListData from '../../../data/firstListData';
import vegetableImage from '../../../image/vegetable.png';

export default class Screen3 extends Component {    

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
                                        <Button
                                            title={ item.title }
                                            color={'#000000'}
                                            onPress={() => 
                                                {this.props.navigation.navigate('Detail', item)}}
                                        />
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
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        width: '95%',
    },
    buttonBackStyle: {
        backgroundColor: '#fff',
    }
});
