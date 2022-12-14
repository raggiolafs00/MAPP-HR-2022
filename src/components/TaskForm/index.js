import React from 'react'
import { View, TextInput, Button } from 'react-native'
import { Formik } from 'formik'
import styles from './styles'

export default function TaskForm ({ effectTasks }) {
  console.log(effectTasks)
  return (
        <Formik
        initialValues={{ name: '', description: '' }}
        onSubmit={values => effectTasks(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput style={styles.input}
              placeholder = 'Name'
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />

            <TextInput style={styles.input}
              placeholder = 'Description'
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />
            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
  )
}
