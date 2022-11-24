import React, {useEffect, useState} from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import Toolbar from '../../components/Toolbar';
import Boardlist from '../../components/BoardList';
import AddModal from '../../components/AddModal';
import Spinner from '../../components/Spinner';
import data from '../../resources/data.json';
import styles from './styles';
import * as imageService from '../../services/imageService';
import * as fileService from '../../services/fileService';

export default function Boards({navigation}) {
    const [boards, setBoards] = useState(data.boards);

    const [selectedBoards, setSelectedBoards] = useState([]);

    const [loadingBoards, setLoadingBoards] = useState(true);

    const [isAddModelOpen, setIsAddModelOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const boards = await fileService.getAllBoards();
            setBoards(boards);
            setLoadingBoards(false);
        })();
    }, []);

    const onBoardLongPress = id => {
        if (selectedBoards.indexOf(id) !== -1) {
            setSelectedBoards(selectedBoards.filter(board => board !== id));
        } else {
            setSelectedBoards([...selectedBoards, id]);
        }
        
    };

    const addBoard = async BoardLocation => {
        setLoadingBoards(true);

        const newImage = await fileService.addBoard(BoardLocation);

        setBoards([...boards, newImage]);
        setIsAddModelOpen(false);
        setLoadingBoards(false);
    };


    const takePhoto = async () => {
        const photo = await imageService.takePhoto();
        if (photo.length > 0) { await addBoard(BoardLocation); }
    };

    const selectFromCameraRoll = async () => {
        const photo = await imageService.selectFromCameraRoll();
        if (photo.length > 0) { await addBoard(BoardLocation); }
    };

    return (
    <View style={styles.container}>
        <Toolbar 
        onAdd={() => setIsAddModelOpen(true)}
        hasSelectedBoards={selectedBoards.length > 0} name1 = {'Add Board'} name2 = {'Delete Board'}/>
        {
            // loadingBoards 
            // ? 
            // <Spinner /> 
            // : 
            <Boardlist 
                onLongPress={id => onBoardLongPress(id)}
                selectedBoards={selectedBoards}
                boards={boards}
                navigation={navigation}/>
        }
        <AddModal
            isOpen={isAddModelOpen}
            closeModal={() => setIsAddModelOpen(false)}
            takePhoto={() => takePhoto()}
            selectFromCameraRoll={() => selectFromCameraRoll()} />
    </View>
    )
};



