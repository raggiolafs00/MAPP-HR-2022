import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ModalForm from "../ModalForm";
import Modal from "../Modal";
import styles from "./styles";


export default function AddModal ({addBoard, isOpen, closeModal, selectFromCameraRoll, takePhoto}) {
    return (
    <Modal
        isOpen = {isOpen}
        closeModal = {closeModal}>
        <View>
            <MaterialIcons style = {styles.icon} name = 'close' onPress={closeModal}/>
            <ModalForm
                addBoard = {addBoard}
                takePhoto = {takePhoto}
                selectFromCameraRoll = {selectFromCameraRoll}/>
        </View>
    </Modal>
);
    }
AddModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    takePhoto: PropTypes.func.isRequired,
    selectFromCameraRoll: PropTypes.func.isRequired
};

