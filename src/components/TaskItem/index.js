import React from "react";
import { TouchableOpacity, View, Text} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

export default function BoardItem({onLongPress, isSelected, id, listId, name, description, isFinished}) {
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
    <View style={[styles.taskItem, isSelected ? {opacity: .5} : {}]} >

        <Text style={styles.text}>{name}</Text>
        
        <Text style={styles.text}>{description}</Text>
        </View>
        </TouchableOpacity>
    ); 
}