import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import styles from './styles';

export default function Tasks () {
    const [tasks, setTasks] = useState(data.tasks);

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
        <Toolbar hasSelectedBoards={selectedTasks.length > 0} name1 = {'Add Task'} name2 = {'Delete Task'}/>
        <TaskList 
        onLongPress={id => onBoardLongPress(id)}
        selectedTasks={selectedTasks}
        tasks={tasks}/>
    </View>
    )
}