import React from "react";
import { View, Text, Button, TouchableOpacity} from "react-native";
import styles from "./styles";


console.log("lala")
export default function ChooseListItem({isSelected, id, name, color, lists}) {
    return (
        <TouchableOpacity onPress = {() => moveTask(id)}>
            <View style={[styles.ListItemContainer, {backgroundColor: color}, isSelected ? {opacity: .5} :{}]}>
                <Text style={styles.BaseText}>{name}</Text>
            </View>  
        </TouchableOpacity>
    )
}