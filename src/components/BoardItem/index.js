import React from "react";
import PropTypes from "prop-types";
import { Image, TouchableOpacity, View, Text} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

export default function BoardItem({onLongPress, isSelected, id, name, thumbnailPhoto, navigation: { navigate }}) {
    return (
        <TouchableOpacity
        onLongPress={() => onLongPress(id)} onPress={() => navigate('Lists', { id })}>
        {
            isSelected 
            ? 
            <AntDesign name="checkcircleo" style={styles.checkmark} />
            :
            <></>
        }
        
        
    <View style={[styles.boardItem, isSelected ? {opacity: .5} : {}]} >
        <Image
            style={styles.image}
            rezizeMode="cover"
            source={{ uri:thumbnailPhoto, $: 'image/jpeg' }} 
            />

        <Text style={styles.text}>{name}</Text>
        </View>
        </TouchableOpacity>
    )
    BoardItem.propTypes = {
        name: PropTypes.string.isRequired,
        thumbnailPhoto: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired,
        onLongPress: PropTypes.func.isRequired
    };
}
