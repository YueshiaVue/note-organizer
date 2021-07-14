let noteData = require("../db/noteData");

const saveNotes = (data) => {
    console.log('save data in api route',data);
    // TODO: push data to the mock database
    noteData.push(data);
    console.log(noteData);
};

const getNotes = () => {
    return noteData
}

const deleteNote = (id) => {
    console.log(id);
    noteData = noteData.filter((obj)=>{
    console.log("Object", obj);
        return obj.id !== id;
    })
    console.log(noteData);
}

module.exports = {saveNotes, getNotes, deleteNote};