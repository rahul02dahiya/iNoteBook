import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleAddNote = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        let addNoteForm = document.getElementById("addNoteForm");
        addNoteForm.reset();
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'><h2>Add notes</h2>
                <form id='addNoteForm'>
                    <div className="form-group">
                        <label htmlFor="title">Add your Title</label>
                        <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Tit;e" onChange={onChange}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descrption</label>
                        <input type="text" className="form-control" id="description" name='description' placeholder="description" onChange={onChange}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <input type="text" className="form-control" id="tag" name='tag' placeholder="tag" onChange={onChange} />
                    </div>
                    <button disabled={note.title.length<2 || note.description.length<5} type="submit" className="btn btn-primary my-2" onClick={handleAddNote}>Add note</button>
                </form>
                <div className="container m-3">
                </div>
            </div>
        </>
    )
}

export default AddNote