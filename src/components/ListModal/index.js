import React from "react";
import { View, Text} from "react-native";
import NativeModal from "react-native-modal";
import styles from "./styles";
import ListForm from "../ListForm"
import {MaterialIcons} from '@expo/vector-icons'


export default function ListModal ({ createList, isOpen, closeModal, boardId, setSelected}) {
    return (
        <NativeModal visible = {isOpen} 
               closeModal = {closeModal}
               animationType = 'slide'
               style={styles.modal}>
            <View style = {styles.body}> 
                <ListForm createList = {createList}/>
                <MaterialIcons style = {styles.icon} name = 'close' onPress={closeModal}/>
            </View>
        </NativeModal>
    )
}