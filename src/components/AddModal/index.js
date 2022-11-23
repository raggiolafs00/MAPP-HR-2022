import React from "react";
import PropTypes from "prop-types";
import Entype from "@expo/vector-icons/Entypo";
import { View, TouchableOpacity } from "react-native";
import Modal from "../Modal";
import styles from "./styles";

const AddModal = ({ 
    isOpen, 
    closeModal, 
    takePhoto,
    selectFromCameraRoll
}) => (
    <Modal
        isOpen = {isOpen}
        closeModal = {closeModal}>
        <View>
            <TouchableOpacity
                onPress={() => takePhoto()}>
                <Entype style={styles.icon} name="camera"/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => selectFromCameraRoll()}>
                <Entype style={styles.icon} name="image"/>
            </TouchableOpacity>
        </View>
    </Modal>

);

AddModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    takePhoto: PropTypes.func.isRequired,
    selectFromCameraRoll: PropTypes.func.isRequired
};

export default AddModal;
