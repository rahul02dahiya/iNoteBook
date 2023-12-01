import React, { useContext, useEffect } from 'react'
import noteContext from "../context/notes/noteContext";
import NoteItem from './NoteItem';

const Notes = () => {

    const context = useContext(noteContext);
    const { notes, setNotes } = context;

    return (
    <div>
        <h2>Your notes</h2>
        <div className='row m-3 '>
            {notes.map(
                (note) => {
                    return <NoteItem note={note} />;
                })}

        </div>
    </div>
    )
}

export default Notes;