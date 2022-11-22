import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import BoardList from '../../components/BoardList'
import data from '../../resources/data.json'


export default function BoardView() {
    return (
        <View>
            <BoardList boards = {data.boards}/>
        </View>
    );
}

