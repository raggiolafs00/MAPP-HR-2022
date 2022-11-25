import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default function ListItem({onLongPress, isSelected, id, name, color, boardId, navigation: { navigate }}) {
    return (
        <TouchableOpacity 
        onLongPress={() => onLongPress(id)} onPress={() => navigate('Tasks', { id })}>
        {
            isSelected 
            ? 
            <AntDesign name="checkcircleo" style={styles.checkmark} />
            :
            <></>
        }
    <View style={[styles.ListItemContainer, {backgroundColor: color}, isSelected ? {opacity: .5} :{}]}>
            <Text style={styles.BaseText}>{name}</Text>

        </View>  
        </TouchableOpacity>
    )
}