import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Toolbar from '../../components/Toolbar';
import ListsList from '../../components/ListsList';
import data from '../../resources/data.json';
import styles from './styles';


export default function Lists ({ navigation, route }) {
    const { id } = route.params;
    const [lists, setLists] = useState(data.lists);
    const listlists = lists.filter(lists => lists.boardId === id);
    const [selectedLists, setSelectedLists] = useState([]);


    const onListLongPress = id => {
        if (selectedLists.indexOf(id) !== -1) {
            setSelectedLists(selectedLists.filter(list => list !== id));
        } else {
            setSelectedLists([...selectedLists, id]);
        }  
    };

    const deleteSelectedLists = async () => {
        // setLoadingLists(true);

        // await Promise.all(selectedLists.map(list => fileService.remove(list)));
        setSelectedLists([]);
        setLists(lists.filter(list => selectedLists.indexOf(list.id) === -1))
        // setLoadingLists(false);
    }


    return (
    <View style={styles.container}>
        <Toolbar 
        hasSelectedLists={selectedLists.length > 0} name1 = {'Add List'} name2 = {'Delete List'}
        onRemove={() => deleteSelectedLists()}
        />
        
        <ListsList
        onLongPress={id => onListLongPress(id)}
        selectedLists={selectedLists} 
        listlists={listlists}
        lists = {lists}
        navigation={navigation}/>
    </View>
    )
}