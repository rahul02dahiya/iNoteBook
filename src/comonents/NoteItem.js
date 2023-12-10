import React from 'react'
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {

const context = useContext(noteContext);
const {deleteNote} = context;
const {note} = props;

    return (
        <div className='col-md-3'>
            <div className="card text-bg-light mb-4" style={{ "maxWidth": "18rem" }}>
                <div className="card-header d-flex align-items-center">
                    <div className='flex-grow-1'>{props.note.tag}</div>
                    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                </div>

                <div className="card-body">
                    <h5 className="card-title">{props.note.title}</h5>
                    <p className="card-text">{props.note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem;