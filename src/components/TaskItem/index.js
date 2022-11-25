import React from "react";
import { TouchableOpacity, View, Text} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

export default function BoardItem({onLongPress, isSelected, id, listId, name, description, isFinished, onTaskPress}) {
    return (
        <TouchableOpacity
        onLongPress={() => onLongPress(id)}
        onPress={() => onTaskPress()}>
        {
            isSelected 
            ? 
            <AntDesign name="checkcircleo" style={styles.checkmark} />
            :
            <></>
        }
    <View style={[styles.taskItem, isSelected ? {opacity: .5} : {}]} >

        <Text style={styles.nameText}>{name}</Text>
        
        <Text style={styles.descriptionText}>{description}</Text>
        </View>
        </TouchableOpacity>
    ); 
}