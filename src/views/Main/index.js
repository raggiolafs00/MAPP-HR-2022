import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';



const Main = () => {
    <View style = {styles.container}>
        <Image style={styles.logo}source={logo} />
        <Text>TODDLER APP</Text>
        <TouchableHighlight>
            <Text>Gallery</Text>
        </TouchableHighlight>
    </View>
}

export default Main;