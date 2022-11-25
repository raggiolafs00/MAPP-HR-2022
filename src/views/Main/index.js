import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import logo from '../../resources/logo.png';
import styles from './styles';




const Main = ({navigation: { navigate }}) => (
        <View style={styles.container}>
            <Text style={styles.paragraph}>TOODLER APP</Text>
            <Image style={styles.logo}source={logo} />
            <TouchableHighlight 
                onPress={() => navigate('Boards')}
                style={styles.button}>
                <Text>Boards</Text>
            </TouchableHighlight> 
        </View>
);

export default Main;
