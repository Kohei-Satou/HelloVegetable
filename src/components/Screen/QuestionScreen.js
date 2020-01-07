import React, { Component } from 'react'
import { Button, View, StyleSheet, ImageBackground, FlatList } from 'react-native';
import questions from './../../../data/organic'
import vegetableImage from '../../../image/vegetable.png'

export default class QuestionScreen extends Component {

    render() {
      return (
        <View style={{flex: 1}}>
            <ImageBackground source={vegetableImage} style={styles.backgroundImageStyle}>

            <FlatList
                data={questions}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.buttonBackStyle}>
                            <View style={styles.buttonStyle}>
                                <Button 
                                    title={item.num}
                                    color={'#000000'}
                                    onPress={() =>
                                        {this.props.navigation.navigate('Quiz', item)}} />
                            </View>
                        </View>
                    )
                }}
            >
            </FlatList>

            </ImageBackground>
      </View>
      );
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
        marginBottom: 3,
        margin: 15,
    },
    buttonBackStyle: {
        backgroundColor: '#fff',
    }
});
