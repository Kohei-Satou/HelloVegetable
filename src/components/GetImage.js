import React, { Component } from 'react'
import { FlatList, Text, View, StyleSheet, Image, Button, Linking, CameraRoll } from 'react-native'

_handleButtonPress = () => {
    CameraRoll.saveToCameraRoll()
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
      });
    };