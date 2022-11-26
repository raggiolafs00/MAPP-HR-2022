import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListsList from '../../components/ListsList';
import data from '../../resources/data.json';
import styles from './styles';
import ListModal from '../../components/ListModal';


export default function Lists ({ navigation, route }) {
    const { id } = route.params;
    const [lists, setLists] = useState(data.lists);
    const listlists = lists.filter(lists => lists.boardId === id);
    const [selectedLists, setSelectedLists] = useState([]);
    const [isAddModelOpen, setIsAddModelOpen] = useState(false);
    const [isChangeModelOpen, setIsChangeModelOpen] = useState(false);
    const [selectedcolor, setSelectedcolor] = useState([]);

    useEffect(() => {
        data.lists = lists;
    }, [lists]);

    const onListLongPress = id => {
        if (selectedLists.indexOf(id) !== -1) {
            setSelectedLists(selectedLists.filter(list => list !== id));
        } else {
            setSelectedLists([...selectedLists, id]);
        }  
    };

    const createList = (list, color) => {
        var lastId = lists.length;
        list.id = lastId + 1;
        list.boardId = id;
        list.color = color;
        setLists((currentlists) => {
            return [...lists, list];
        })
        setIsAddModelOpen(false);
        console.log(list);
    }

    const modifyList = (list) => {
        if (selectedLists.length > 1){
            alert("You can only modify one board at a time");
        }
        else {
            setIsChangeModelOpen(true);
        }
        
    }

    const deleteSelectedLists = async () => {
        setSelectedLists([]);
        setLists(lists.filter(list => selectedLists.indexOf(list.id) === -1))
    }

    const changeList = (list, color) => {
        console.log(list)
        var index = lists.findIndex(x => x.id === selectedLists[0]);
        if (list.name != '') {
            lists[index].name = list.name;
        }
        else if (color != '') {
            lists[index].color = color;
        }
        setIsChangeModelOpen(false);
        setSelectedLists([]);
    }

    
    


    return (
    <View style={styles.container}>
        <Toolbar 
        hasSelectedLists={selectedLists.length > 0} name1 = {'Add List'} name2 = {'Change list'} name3 = {'Delete List'}
        onAdd={() => setIsAddModelOpen(true)}
        onRemove={() => deleteSelectedLists()}
        onChange={() => modifyList()}
        />
        
        <ListsList
        onLongPress={id => onListLongPress(id)}
        selectedLists={selectedLists} 
        listlists={listlists}
        lists = {lists}
        navigation={navigation}/>

        <ListModal 
        createList={createList}
        isOpen={isAddModelOpen}
        closeModal={() => setIsAddModelOpen(false)}
        boardId = {id}
        setSelectedcolor = {(color) => setSelectedcolor(color)}
        />
        <ListModal 
        createList={changeList}
        isOpen={isChangeModelOpen}
        closeModal={() => setIsChangeModelOpen(false)}
        boardId = {id}
        setSelectedcolor = {(color) => setSelectedcolor(color)}
        />


    </View>
    )
    
}