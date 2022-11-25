import React from "react";
import PropTypes from "prop-types";
import { View, Text} from "react-native";
import NativeModal from "react-native-modal";
import styles from "./styles";
import TaskForm from "../TaskForm"
import {MaterialIcons} from '@expo/vector-icons'
import data from '../../resources/data.json';

export default function TaskModal ({isOpen, closeModal, tasks, setTasks, listId, effectTasks}) {

    return (
        <NativeModal visible = {isOpen} 
               closeModal = {closeModal}
               animationType = 'slide'
               style={styles.modal}>
            <View style = {styles.body}> 
                <TaskForm effectTasks = {effectTasks} />
                <MaterialIcons style = {styles.icon} name = 'close' onPress={closeModal}/>
            </View>
        </NativeModal>
    )
}