import React, { Component } from 'react'
import { TouchableOpacity, FlatList, Text, View, StyleSheet, Image, Button, Linking, CameraRoll, TextInput, ActivityIndicator } from 'react-native'
import topImage from '../../../image/top_info.png'
import Firebase from '../../Apis/firebase'
import firebase from 'firebase'

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

    state = { email: '', password: '', error: '', loading: false};
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({error: '', loading: true});
     
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((this.onLoginSuccess.bind(this)))
          .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then((this.onLoginSuccess.bind(this)))
              .catch((this.onLoginFail.bind(this)));
          });
      }
    
      onLoginSuccess() {
        this.setState({
          email: '',
          password: '',
          loading: false,
          error: ''
        });
      }
     
      onLoginFail() {
        this.setState({
          loading: false,
          error: 'Authentication Failed'
        });
      }
     
      loadSpinner() {
        if (this.state.loading) {
          return <ActivityIndicator size="small" />
        }
     
        return (
          <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
              ログイン
            </Text>
          </TouchableOpacity>
        )
      }

    render() {
        const url = "https://d13krdvwknzmgv.cloudfront.net/files/topics/5323996_ext_col_03_0.jpg?v=1552636675";
        return (
            <View style={{ flex: 1 }}>
                <Image source={topImage} style={styles.imageStyle}></Image>
                <Text>ここにアプリの説明文が入る</Text>
                <Button title="画像を保存する" onPress={() => CameraRoll.saveToCameraRoll(url, 'photo')}></Button>

                <View style={styles.wrap}>
          <TextInput
              placeholder="user@gmail.com"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={styles.inputStyle}
            />
        </View>
        <View style={styles.wrap}>
          <TextInput
              secureTextEntry
              placeholder="password"
              autoCorrect={false}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              style={styles.inputStyle}
            />
        </View>
 
        <View style={styles.wrap}>
          {this.loadSpinner()}
        </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    imageStyle:{
        width: "100%",
        height: "30%"
    },
    wrap: {
        padding: 10
      },
      textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10
      },
      buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff'
      },
      inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 30,
        borderWidth: 1,
        borderColor: '#333'
      }
})
