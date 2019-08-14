import React, { Component } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import logo from '../../assets/logo.png';

export default class Main extends Component {
  render() {
    return (
    <View>
        <Image style={styles.logo} source={logo} />

        <TextInput
        style={styles.input}
        placeholder="Crie uma box"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        />

        <TouchableOpacity onPress={() => {}} style={style=styles.button}>
            <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
    </View>
    );
  }
}