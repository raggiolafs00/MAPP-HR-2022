import React, {useState} from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Toolbar from '../../components/Toolbar';
import Boardlist from '../../components/BoardList';
import data from '../../resources/data.json';
import styles from './styles';

export default function Boards() {
    const [boards, setBoards] = useState(data.boards);

    const [selectedBoards, setSelectedBoards] = useState([]);

    const onBoardLongPress = id => {
        if (selectedBoards.indexOf(id) !== -1) {
            setSelectedBoards(selectedBoards.filter(board => board !== id));
        } else {
            setSelectedBoards([...selectedBoards, id]);
        }
        
    };
    return (
    <View style={styles.container}>
        <Toolbar hasSelectedBoards={selectedBoards.length > 0} name1 = {'Add Board'} name2 = {'Delete Board'}/>
        <Boardlist 
        onLongPress={id => onBoardLongPress(id)}
        selectedBoards={selectedBoards}
        boards={boards}/>
    </View>
    )
};



