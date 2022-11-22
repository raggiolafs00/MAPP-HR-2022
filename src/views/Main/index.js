import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';



export default function Main() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}source={logo} />
            <Text style={styles.paragraph}>TODDLER APP</Text>
            <TouchableHighlight style={styles.button}>
                <Text>Gallery</Text>
            </TouchableHighlight> 
        </View>
    )
}