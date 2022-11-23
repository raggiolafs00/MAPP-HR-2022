import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function ListItem({id, name, color, boardId}){
    return (
        <View style={styles.ListItemContainer}>
            <Text style={styles.BaseText}>{name}</Text>
        </View>  
    )
}