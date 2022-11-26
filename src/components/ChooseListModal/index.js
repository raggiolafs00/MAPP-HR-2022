import React from 'react'
import { View, FlatList } from 'react-native'
import NativeModal from 'react-native-modal'
import styles from './styles'
import ChooseListItem from '../ChooseListItem'
import { MaterialIcons } from '@expo/vector-icons'

console.log('hello')

export default function ChooseListModal ({ isOpen, closeModal, changeTaskListId, lists }) {
  return (
        <NativeModal visible = {isOpen}
               closeModal = {closeModal}
               animationType = 'slide'
               style={styles.modal}>
            <View style={styles.body}>
                <FlatList
                data={lists}
                renderItem={({ item: { id, name, color } }) => (
                    <ChooseListItem
                        id={id}
                        name={name}
                        color={color}
                        lists={lists}
                        changeTaskListId={changeTaskListId}
                        />
                )}
                keyExtractor={(lists) => lists.id} />
                <MaterialIcons style = {styles.icon} name = 'close' onPress={closeModal}/>
             </View>
        </NativeModal>
  )
}
