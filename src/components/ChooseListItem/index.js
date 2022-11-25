import React from "react";
import { View, Text, Button} from "react-native";
import NativeModal from "react-native-modal";
import styles from "./styles";
import TaskForm from "../TaskForm"
import {MaterialIcons} from '@expo/vector-icons'

console.log("lala")
export default function ChooseListItem({isOpen, closeModal, selectedTasks, moveTask, deleteTask}) {
    return (
        <NativeModal visible = {isOpen} 
               closeModal = {closeModal}
               animationType = 'slide'
               style={styles.modal}>
            <View style = {styles.body}> 
                <MaterialIcons style = {styles.icon} name = 'close' onPress={closeModal}/>
            </View>
        </NativeModal>
    )
}