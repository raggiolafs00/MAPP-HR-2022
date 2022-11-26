import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image, Modal, Button } from 'react-native';
import Toolbar from '../../components/Toolbar';
import TaskList from '../../components/TaskList';
import data from '../../resources/data.json';
import styles from './styles';
import TaskModal from '../../components/TaskModal'
import MoveTaskModal from '../../components/MoveTaskModal'
import ChooseListModal from '../../components/ChooseListModal'

export default function Tasks ({ route }) {
    const { id } = route.params;
    const [tasks, setTasks] = useState(data.tasks);
    const tasklists = tasks.filter(tasks => tasks.listId === id);
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [loadingTasks, setLoadingTasks] = useState(true);
    const [ModalOpen, setModalOpen] = useState(false);
    const [ChangeModalOpen, setChangeModalOpen] = useState(false);
    const [MoveModalOpen, setMoveModalOpen] = useState(false);
    const [ChooseListModalOpen, setChooseListModalOpen] = useState(false);

    const onTaskLongPress = id => {
        if (selectedTasks.indexOf(id) !== -1) {
            setSelectedTasks(selectedTasks.filter(task => task !== id));
        } else {
            setSelectedTasks([...selectedTasks, id]);
        }
    }

    const onTaskPressMove = id => {
        if (selectedTasks.indexOf(id) !== -1) {
            setSelectedTasks(selectedTasks.filter(task => task !== id));
        } else {
            setSelectedTasks([...selectedTasks, id]);
        }
        console.log(id);
        setMoveModalOpen(true);
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
        if (task.name != '') {
            tasks[index].name = task.name;
            
        }
        else if (task.description != '') {
            tasks[index].description = task.description;
        }
        setTasks(tasks);
        setChangeModalOpen(false);
        setSelectedTasks([]);
    }

    const addTask = (task) => {
        var lastId = tasks.length - 1;
        task.id = lastId + 1;
        task.isFinished = false;
        console.log(id);
        task.listId = id;
        setTasks((currentTasks) => {
            console.log(currentTasks)
            console.log(task)
            return [...currentTasks, task];
        })
        setModalOpen(false)
    }

    const moveTask = (task) => {
        setMoveModalOpen(false);
        var index = tasks.findIndex(x => x.id === selectedTasks[0]);
        console.log("ble");
        console.log(index);
        setChooseListModalOpen(true);
        // tasks[index].listId = task.listId;
        // setTasks(tasks);
        // setMoveModalOpen(false);
        // setSelectedTasks([]);
    }

    const finishTask = (task) => {
        var index = tasks.findIndex(x => x.id === task);
        // console.log(tasks[index].isFinished)
        if (tasks[index].isFinished) {
            tasks[index].isFinished = false;
        } else {
            tasks[index].isFinished = true;
        }
        setTasks(tasks);
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
        onLongPress={id => onTaskLongPress(id)}
        selectedTasks={selectedTasks}
        closeModal={() => setMoveModalOpen(false)}
        moveTask={(moveTask)}/>

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
        onTaskPress={id => onTaskPressMove(id)}
        moveTask={() => moveTask}
        selectedTasks={selectedTasks}
        tasklists={tasklists}
        finishTask = {id => finishTask(id)}/>

        <ChooseListModal 
        isOpen = {ChooseListModalOpen}
        closeModal = {() => setChooseListModalOpen(false)}
        lists = {route.params.lists}/>

    </View>
    )
}