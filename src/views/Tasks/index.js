import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import styles from './styles';

export default function Tasks ({ route }) {
    const { id } = route.params;
    const [tasks, setTasks] = useState(data.tasks);
    const tasklists = tasks.filter(tasks => tasks.listId === id);
    const [selectedTasks, setSelectedTasks] = useState([]);

    const onBoardLongPress = id => {
        if (selectedTasks.indexOf(id) !== -1) {
            setSelectedTasks(selectedTasks.filter(task => task !== id));
        } else {
            setSelectedTasks([...selectedTasks, id]);
        }
        
    };
    return (
    <View style={styles.container}>
        <Toolbar hasSelectedTasks={selectedTasks.length > 0} name1 = {'Add Task'} name2 = {'Delete Task'}/>
        <TaskList 
        onLongPress={id => onBoardLongPress(id)}
        selectedTasks={selectedTasks}
        tasklists={tasklists}/>
    </View>
    )
}