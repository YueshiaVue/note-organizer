const noteData = require("../db/noteData");

const saveNotes = (data) => {
    console.log('save data in api route',data);
    // TODO: push data to the mock database
    noteData.push(data);
    console.log(noteData);
};

const getNotes = () => {
    return noteData
}

module.exports = {saveNotes, getNotes};