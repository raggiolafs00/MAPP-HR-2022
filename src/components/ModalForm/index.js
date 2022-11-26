import React from 'react'
import { View, TouchableOpacity, TextInput, Button, Text } from 'react-native'
import { Formik } from 'formik'
import styles from './styles'
import Entype from '@expo/vector-icons/Entypo'

export default function ModalForm ({ addBoard, selectFromCameraRoll }) {
  return (
        <Formik
        initialValues={{ name: '', thumbnailPhoto: '' }}
        onSubmit={values => addBoard(values)}

      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput style={styles.input}
              placeholder = 'Name'
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <TouchableOpacity
                onPress={() => selectFromCameraRoll()} >
                    <Text style={styles.text}>
                        Select photo from cameraroll
                </Text>
                <Entype style={styles.icon} name="image"/>
            </TouchableOpacity>
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
  )
}
