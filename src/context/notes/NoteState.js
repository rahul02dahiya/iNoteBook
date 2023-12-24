import React from "react";
import NoteContext from "./noteContext";
import { useState } from 'react'


const NoteState = (props) => {

  const host = "http://127.0.0.1:5000";

  const setInitialNotes = []
  const [notes, setNotes] = useState(setInitialNotes);


  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('inotetoken')
        }
      })
      const dNotes = await response.json();
      console.log(dNotes);
      setNotes(dNotes);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);

    }
  }


  // Add note
  const addNote = async (title, description, tag) => {
    // todo api call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('inotetoken')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // frontend
    const note = await response.json();
    setNotes(notes.concat(note));
  }
  // Delete note
  const deleteNote = async (id) => {
    // Api calls 
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('inotetoken')
      }
    });
    // const json = response.json();
    // console.log(json);

    // console.log(`note deleted ${id}`);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }
  // Edit note
  let newNotes = JSON.parse(JSON.stringify(notes));
  const editNote = async (id, title, description, tag) => {
    for (let i = 0; i < notes.length; i++) {
      if (newNotes[i]._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        // console.log(newNotes[i]);
        break;
      }
    }
    setNotes(newNotes);

    // API calls

    await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('inotetoken')
      },
      body: JSON.stringify({ id, title, description, tag }),
    }).then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    })
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
