import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import NativeModal from 'react-native-modal'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons'

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
        swipeDirection={['up', 'down']}
        style={styles.modal}>
        <View style={styles.body}>
        <MaterialIcons style = {styles.icon} name = 'close' onPress={closeModal}/>
            <Text>{title}</Text>
            {children}
        </View>
    </NativeModal>
)

Modal.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node
}

export default Modal
