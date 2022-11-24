import * as FileSystem from 'expo-file-system';

const imageDirectory = `${FileSystem.documentDirectory}boards`;

const copyFile = async (file, newLocation) => {
    return await FileSystem.copyAsync({
        from: file,
        to: newLocation
    });
};

const setupDirectory = async () => {
    const dir = await FileSystem.getInfoAsync(imageDirectory);
    if (!dir.exists) {
        await FileSystem.makeDirectoryAsync(imageDirectory);
    }
};

export const addImage = async (BoardLocation) => {
    const folderSplit = BoardLocation.split('/');
    const fileName = folderSplit[folderSplit.length - 1];

    await copyFile(BoardLocation, `${imageDirectory}/${fileName}`);

    return {
        id: fileName,
        type: 'image',
        file: await loadBoard(fileName)
    };
};
    
const loadBoard = async (fileName) => {
    return await FileSystem.readAsStringAsync(`${imageDirectory}/${fileName}`, {
        encoding: FileSystem.EncodingType.Base64
    });
}

export const getAllImages = async () => {
    await setupDirectory();

    const result = await FileSystem.readDirectoryAsync(imageDirectory);

    return Promise.all(result.map(async filename => {
        return {
        id: id,
        type: 'board',
        file: loadBoard(board)
    }
    }));
}
