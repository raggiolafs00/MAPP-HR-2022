import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

export default function ChooseListItem({id, name, color, moveTask}) {
    return (
        <TouchableOpacity 
        onPress={() => moveTask()}>
        <View style={[styles.ListItemContainer, {backgroundColor: color}]}>
            <Text style={styles.BaseText}>{name}</Text>

        </View>  
        </TouchableOpacity>
    )
}