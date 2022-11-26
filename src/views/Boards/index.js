import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Toolbar from '../../components/Toolbar'
import Boardlist from '../../components/BoardList'
import AddModal from '../../components/AddModal'
import data from '../../resources/data.json'
import styles from './styles'
import * as imageService from '../../services/imageService'

export default function Boards ({ navigation }) {
  const [boards, setBoards] = useState(data.boards)

  const [selectedBoards, setSelectedBoards] = useState([])

  const [photo, setPhoto] = useState({})

  const [isAddModelOpen, setIsAddModelOpen] = useState(false)

  const [isChangeModelOpen, setIsChangeModelOpen] = useState(false)

  useEffect(() => {
    data.boards = boards
  }, [boards])

  const onBoardLongPress = id => {
    if (selectedBoards.indexOf(id) !== -1) {
      setSelectedBoards(selectedBoards.filter(board => board !== id))
    } else {
      setSelectedBoards([...selectedBoards, id])
    }
  }

  const selectFromCameraRoll = async () => {
    const photo = await imageService.selectFromCameraRoll()
    setPhoto(photo[0].uri)
  }

  const addBoard = (board) => {
    const lastId = boards.length
    board.id = lastId + 1
    board.isFinished = false
    board.thumbnailPhoto = photo
    setBoards((currentBoards) => {
      return [...boards, board]
    })
    setIsAddModelOpen(false)
  }

  const deleteSelectedBoards = async () => {
    setSelectedBoards([])
    setBoards(boards.filter(board => selectedBoards.indexOf(board.id) === -1))
  }

  const modifyBoard = (board) => {
    if (selectedBoards.length > 1) {
      alert('You can only modify one board at a time')
    } else {
      setIsChangeModelOpen(true)
    }
  }
  const changeBoard = (board) => {
    const index = boards.findIndex(x => x.id === selectedBoards[0])
    if (board.name != '') {
      boards[index].name = board.name
    } else if (photo != '') {
      boards[index].thumbnailPhoto = photo
    }
    setBoards(boards)
    setIsChangeModelOpen(false)
    setSelectedBoards([])
  }

  return (
    <View style={styles.container}>
        <Toolbar
        onAdd={() => setIsAddModelOpen(true)}
        onRemove={() => deleteSelectedBoards()}
        onChange={() => modifyBoard()}
        hasSelectedBoards={selectedBoards.length > 0} name1 = {'Add Board'} name2 = {'Change Board'} name3 = {'Delete Board'}/>
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
