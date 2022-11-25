import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image, Modal, Button } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import styles from './styles';
import TaskModal from '../../components/TaskModal'
import MoveTaskModal from '../../components/MoveTaskModal'

export default function Tasks ({ navigation, route }) {
    const { id } = route.params;
    const [tasks, setTasks] = useState(data.tasks);
    const tasklists = tasks.filter(tasks => tasks.listId === id);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [loadingTasks, setLoadingTasks] = useState(true);
    const [ModalOpen, setModalOpen] = useState(false);
    const [ChangeModalOpen, setChangeModalOpen] = useState(false);
    const [MoveModalOpen, setMoveModalOpen] = useState(false);

    const onTaskLongPress = id => {
        if (selectedTasks.indexOf(id) !== -1) {
            setSelectedTasks(selectedTasks.filter(task => task !== id));
        } else {
            setSelectedTasks([...selectedTasks, id]);
        }
    }

    const deleteSelectedTasks = async () => {
        setLoadingTasks(true);
        setSelectedTasks([]);
        setTasks(tasks.filter(task => selectedTasks.indexOf(task.id) === -1))
    }

    const modifyTask = (task) => {
        if (selectedTasks.length > 1){
            alert("You can only modify one task at a time");
        }
        else {
            setChangeModalOpen(true);
        }
        
    }
    const changeTask = (task) => {
        var index = tasks.findIndex(x => x.id === selectedTasks[0]);
        tasks[index].name = task.name;
        tasks[index].description = task.description;
        setTasks(tasks);
        setChangeModalOpen(false);
        setSelectedTasks([]);
    }

    const addTask = (task) => {
        var lastId = tasks.length - 1;
        task.id = lastId + 1;
        console.log(task.id);
        task.isFinished = false;
        task.listId = listId;
        console.log(listId);
        setTasks((currentTasks) => {
            console.log(currentTasks)
            console.log(task)
            return [...currentTasks, task];
        })
        closeModal()
    }

    const openChooseList = () => {
        setMoveModalOpen(true);
    }

    const moveTask = (task) => {
        console.log('hello')
    }

    return (
    <View style={styles.container}>
        <TaskModal 
        isOpen = {ModalOpen} 
        closeModal={() => setModalOpen(false)} 
        effectTasks = {addTask}
        tasks={tasks} 
        listId = {id}/>

        <MoveTaskModal 
        isOpen = {MoveModalOpen} 
        closeModal={() => setMoveModalOpen(false)}
        lists={route.params.lists}
        moveTask={moveTask}
        navigation = {navigation}/>

        <TaskModal 
        isOpen = {ChangeModalOpen} 
        closeModal={() => setChangeModalOpen(false)} 
        tasks = {tasks} 
        effectTasks = {changeTask} 
        listId = {id}/>

        <Toolbar 
        onAdd = {() => setModalOpen(true)}
        onRemove={() => deleteSelectedTasks()}
        onChange={() => modifyTask()}
        hasSelectedTasks={selectedTasks.length > 0} 
        name1 = {'Add Task'} 
        name2 = {'Delete TasK'}/>

        <TaskList 
        onLongPress={id => onTaskLongPress(id)}
        onTaskPress={() => setMoveModalOpen(true)}
        selectedTasks={selectedTasks}
        tasklists={tasklists}/>
    </View>
    )
}