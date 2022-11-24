import React from "react";
import PropTypes from "prop-types";
import { View, Text} from "react-native";
import NativeModal from "react-native-modal";
import styles from "./styles";
import TaskForm from "../TaskForm"
import {MaterialIcons} from '@expo/vector-icons'
import data from '../../resources/data.json';

export default function TaskModal ({isOpen, closeModal, tasks, setTasks, listId}) {

    const addTask = (task) => {
        var lastId = tasks.length - 1;
        task.id = lastId + 1;
        console.log(task.id);
        task.isFinished = false;
        task.listId = listId;
        console.log(listId);
        setTasks((currentTasks) => {
            console.log(currentTasks)
            console.log(task)
            return [...currentTasks, task];
        })
        closeModal()
    }

    return (
        <NativeModal visible = {isOpen} 
               closeModal = {closeModal}
               animationType = 'slide'
               style={styles.modal}>
            <View style = {styles.body}> 
                <TaskForm addTask = {addTask} />
                <MaterialIcons style = {styles.icon} name = 'close' onPress={closeModal}/>
            </View>
        </NativeModal>
    )
}