import React, { useContext, useEffect, useRef, useState } from 'react'
import AddNote from './AddNote';
import NoteItem from './NoteItem';
import noteContext from "../context/notes/noteContext";
import logo from '../mediaFiles/output-onlinegiftools.gif';

const Notes = () => {
    const context = useContext(noteContext);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        getNotes();
        // eslint-disable-next-line
    }, []);

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

    const handleAddNote = (e) => {
        e.preventDefault();
        console.log("Note updated");
        editNote(note.id, note.etitle, note.edescription, note.etag);
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const ref = useRef(null);

    return (
        <div className='container m-5'>
                       
            <AddNote />
            {/* <!-- Button trigger modal --> */}
            <button type="button" ref={ref} className="btn btn-primary" style={{"display":"none"}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Update your Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <form>
                    <div className="form-group">
                        <label htmlFor="etitle">Add your Title</label>
                        <input type="text" className="form-control" id="etitle" value={note.etitle} name="etitle" aria-describedby="emailHelp" placeholder="Title" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="edescription">Descrption</label>
                        <input type="text" className="form-control" id="edescription" value={note.edescription} name='edescription' placeholder="description" onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="etag">Tag</label>
                        <input type="text" className="form-control" id="etag" value={note.etag} name='etag' placeholder="tag" onChange={onChange} />
                    </div>
                </form>
                        </div>
                        <div className="modal-footer">
                        <button type="submit" disabled={note.etitle.length<2 || note.edescription.length<5} className="btn btn-primary my-2" onClick={handleAddNote} data-bs-dismiss="modal">Update</button>

                        </div>
                    </div>
                </div>
            </div>
            <h2>Your notes</h2>
            <div className='row m-3 '>
                {notes.length===0 && <div className="container"><img src={logo} style={{"width":"100px"}} alt="loading..." /> <h6>Waiting... <p>for your Notes</p></h6> </div>}
                {notes.map(
                    (note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />;
                    })}

            </div>
        </div>
    )
}

export default Notes;