import React from "react";
import PropTypes from "prop-types";
import { View, Text} from "react-native";
import NativeModal from "react-native-modal";
import styles from "./styles";

console.log(NativeModal);

const Modal = ({ 
    isOpen,
    closeModal,
    title,
    children
}) => (
    <NativeModal
        isVisible={isOpen}
        onBackdrop={true}
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        swipeDirection={["up", "down"]}
        style={styles.modal}>
        <View style={styles.body}>
            <Text>{title}</Text>
            {children}
        </View>
    </NativeModal>
);

Modal.PropTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node
};

export default Modal;