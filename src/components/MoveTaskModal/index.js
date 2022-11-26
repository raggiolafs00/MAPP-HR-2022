import React from 'react'
import { View, Text, Button } from 'react-native'
import NativeModal from 'react-native-modal'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'

export default function MoveTaskModal ({ isOpen, selectedTasks, closeModal, moveTask }) {
  return (
        <NativeModal visible = {isOpen}
               closeModal = {closeModal}
               animationType = 'slide'
               style={styles.modal}>
            <View style = {styles.body}>
                <Button title = "Move to" onPress = {() => moveTask(selectedTasks)}/>
                <MaterialIcons style = {styles.icon} name = 'close' onPress={closeModal}/>
            </View>
        </NativeModal>
  )
}
