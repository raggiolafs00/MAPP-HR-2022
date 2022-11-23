import React from "react";
import { Image, TouchableOpacity, View, Text} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

export default function BoardItem({onLongPress, isSelected, id, name, thumbnailPhoto}) {
    return (
        <TouchableOpacity
        onLongPress={() => onLongPress(id)}>
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
            source={{ uri:thumbnailPhoto}} 
            />

        <Text style={styles.text}>{name}</Text>
        </View>
        </TouchableOpacity>
    ); 
}