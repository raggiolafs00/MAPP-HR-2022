import React from "react";
import {View} from "react-native";
import ModalForm from "../ModalForm";
import Modal from "../Modal";

export default function AddModal ({addBoard, isOpen, closeModal, selectFromCameraRoll}) {
    return (
    <Modal
        isOpen = {isOpen}
        closeModal = {closeModal}>
        <View>
            
            <ModalForm
                addBoard = {addBoard}
                selectFromCameraRoll = {selectFromCameraRoll}/>
            
        </View>
    </Modal>
);
    }


