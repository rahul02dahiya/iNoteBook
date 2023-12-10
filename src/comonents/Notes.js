import React, { useContext, useEffect } from 'react'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import noteContext from "../context/notes/noteContext";

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes } = context;
    useEffect(()=>{
        getNotes();
        // eslint-disable-next-line
    },[]);
    return (
        <div className='container m-5'>
            <AddNote />
            <h2>Your notes</h2>
            <div className='row m-3 '>
                {notes.map(
                    (note) => {
                        return <NoteItem key={note._id} note={note} />;
                    })}

            </div>
        </div>
    )
}

export default Notes;