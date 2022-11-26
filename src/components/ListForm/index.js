import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import { Formik, Field } from 'formik';
import styles from './styles';
import { SelectList } from 'react-native-dropdown-select-list';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function ListForm ({createList}) {
    console.log(createList)
    const [selected, setSelected] = useState([]);
    console.log(selected)
    return (
        <Formik
        initialValues={{ name: '' , color: ''}}
        onSubmit={values => createList(values, selected)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
            <TextInput style={styles.input}
              placeholder = 'Name'
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            /> 
            <SelectList
                placeholder = 'Select color'
                data={['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange']}
                setSelected={(val) => setSelected(val)}
                
                
            /> 
            <Button onPress={handleSubmit} title="Submit" />
            </View>
        )}
        </Formik>
        
    )
   
}

