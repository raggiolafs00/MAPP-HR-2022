import React from "react";
import PropTypes from "prop-types";
import { View, Text, Modal} from "react-native";
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
            return [...currentTasks, task];
        })
        closeModal()
    }

    return (
        <Modal visible = {isOpen} 
               closeModal = {closeModal}
               animationType = 'slide'>
            <View style = {styles.modal}> 
                <TaskForm addTask = {addTask} />
                <MaterialIcons style = {styles.icon} name = 'close' onPress={closeModal}/>
            </View>
        </Modal>
    )
}