import React from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList} from "react-native";
import NativeModal from "react-native-modal";
import styles from "./styles";
import ChooseListItem from '../ChooseListItem'
import { MaterialIcons } from '@expo/vector-icons'

export default function MoveTaskModal ({onTaskPress, isOpen, closeModal, listlists, moveTask, navigation: { navigate }}) {

    return (
        <NativeModal 
        visible = {isOpen}
        closeModal = {closeModal}
        style={styles.modal}>
            <View style={styles.ListsContainer}>
            <Button onPress={() => navigate('Lists', { id })}></Button>
            <MaterialIcons style = {styles.icon} name = 'close' onPress={closeModal}/>
            </View>
        </NativeModal>
    )
}