import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './styles'

const Spinner = (isOpen) => (
    <View style={styles.spinner} visible = {isOpen} >
        <ActivityIndicator color="black" />
    </View>
)

export default Spinner
