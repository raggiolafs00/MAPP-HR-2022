import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ListItem({id, name, color, boardId, navigation: { navigate }}) {
    return (
        <TouchableOpacity onPress={() => navigate('Tasks', { id })}>
        <View style={styles.ListItemContainer}>
            <Text style={styles.BaseText}>{name}</Text>
        </View>  
        </TouchableOpacity>
    )
}