import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet, Image, Button, Linking, CameraRoll, TextInput } from 'react-native'
import topImage from '../../../image/top_info.png'
import Firebase from '../../Apis/firebase'

// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default class Screen1 extends Component {
    state = {
        inputValue: "Your mail address",
        inputPass: "Your password"
    };

    _handleTextChange = inputValue => {
        this.setState({inputValue});
    }

    _handlePassChange = inputPass => {
        this.setState({inputPass});
    }

    render() {
        const url = "https://d13krdvwknzmgv.cloudfront.net/files/topics/5323996_ext_col_03_0.jpg?v=1552636675";
        const googleAuthenticate = (token) => {
            const provider = firebase.auth.GoogleAuthProvider;
            provider.addScopes('profile');
            provider.addScopes('email');
            const credential = provider.credential(token);
            return firebase.auth().signInWithCredential(credential);
          }; 
        return (
            <View style={{ flex: 1 }}>
                <Image source={topImage} style={styles.imageStyle}></Image>
                <Text>ここにアプリの説明文が入る</Text>
                <Button title="画像を保存する" onPress={() => CameraRoll.saveToCameraRoll(url, 'photo')}></Button>
                <TextInput
                    value={this.state.inputValue}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, textAlign: "center", backgroundColor: "silver"}}
                />
                <TextInput
                    value={this.state.inputPass}
                    onChangeText={this._handlePassChange}
                    style={{ width: 200, height: 44, padding: 8, textAlign: "center", backgroundColor: "silver" }}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    imageStyle:{
        width: "100%",
        height: "30%"
    }
})
