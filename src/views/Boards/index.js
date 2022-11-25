import React, {useEffect, useState} from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Toolbar from '../../components/Toolbar';
import Boardlist from '../../components/BoardList';
import AddModal from '../../components/AddModal';
import data from '../../resources/data.json';
import styles from './styles';
import * as imageService from '../../services/imageService';
import * as fileService from '../../services/fileService';

export default function Boards({navigation}) {
    const [boards, setBoards] = useState(data.boards);

    const [selectedBoards, setSelectedBoards] = useState([]);

    const [photo, setPhoto] = useState({});

    const [loadingBoards, setLoadingBoards] = useState(true);

    const [isAddModelOpen, setIsAddModelOpen] = useState(false);

    const [isChangeModelOpen, setIsChangeModelOpen] = useState(false);

    // useEffect(() => {
    //     (async () => {
    //     const [boards, setBoards] = useState(data.boards);
    //     const [lists, setLists] = useState(data.lists);
    //     const [tasks, setTasks] = useState(data.tasks);
    //     })();
    // },[]);

    const onBoardLongPress = id => {
        if (selectedBoards.indexOf(id) !== -1) {
            setSelectedBoards(selectedBoards.filter(board => board !== id));
        } else {
            setSelectedBoards([...selectedBoards, id]);
        }
        
    };

    const selectFromCameraRoll = async () => {
        const photo = await imageService.selectFromCameraRoll();
        setPhoto(photo[0].uri);
    };

    const addBoard = (board) => {
        var lastId = boards.length;
        board.id = lastId + 1;
        board.isFinished = false;
        board.thumbnailPhoto = photo;
        setBoards((currentBoards) => {
            return [...boards, board];
        })
        setIsAddModelOpen(false);
    }

    const deleteSelectedBoards = async () => {
        setLoadingBoards(true);
        setSelectedBoards([]);
        setBoards(boards.filter(board => selectedBoards.indexOf(board.id) === -1))
        setLoadingImages(false);
    }

    const modifyBoard = (board) => {
        if (selectedBoards.length > 1){
            alert("You can only modify one board at a time");
        }
        else {
            setIsChangeModelOpen(true);
        }
        
    }
    const changeBoard = (board) => {
        var index = boards.findIndex(x => x.id === selectedBoards[0]);
        boards[index].name = board.name;
        boards[index].thumbnailPhoto = photo;
        setBoards(boards);
        setIsChangeModelOpen(false);
        setSelectedBoards([]);
    }


    return (
    <View style={styles.container}>
        <Toolbar 
        onAdd={() => setIsAddModelOpen(true)}
        onRemove={() => deleteSelectedBoards()}
        onChange={() => modifyBoard()}
        hasSelectedBoards={selectedBoards.length > 0} name1 = {'Add Board'} name2 = {'Delete Board'}/>
        {
            <Boardlist 
                onLongPress={id => onBoardLongPress(id)}
                selectedBoards={selectedBoards}
                boards={boards}
                navigation={navigation}/>
        }
        <AddModal
            addBoard={addBoard}
            isOpen={isAddModelOpen}
            closeModal={() => setIsAddModelOpen(false)}
            selectFromCameraRoll={selectFromCameraRoll}
            takePhoto={() => takePhoto()}
            boards={boards}
            setBoards={setBoards}
             />
        <AddModal
            addBoard={changeBoard}
            isOpen={isChangeModelOpen}
            closeModal={() => setIsChangeModelOpen(false)}
            selectFromCameraRoll={selectFromCameraRoll}
            takePhoto={() => takePhoto()}
            boards={boards}
            setBoards={setBoards}/>
            
    </View>
    )
};



