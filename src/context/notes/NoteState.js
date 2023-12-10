import React from "react";
import NoteContext from "./noteContext";
import { useState } from 'react'


const NoteState = (props) => {

  const host = "http://127.0.0.1:5000";

  const setInitialNotes = []
  const [notes, setNotes] = useState(setInitialNotes);


  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1N2IwMDMyZDVhMmViNjNjNjgxZjY4In0sImlhdCI6MTcwMDI4ODc5Mn0.xFT49lrJNaZ1fTu0A9WE2v9Gs_LoVyMOa2bJlF80gsw"
      }
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  }


  // Add note
  const addNote = async (title, description, tag) => {
    // todo api call
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1N2IwMDMyZDVhMmViNjNjNjgxZjY4In0sImlhdCI6MTcwMDI4ODc5Mn0.xFT49lrJNaZ1fTu0A9WE2v9Gs_LoVyMOa2bJlF80gsw"
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    // frontend
    const note = {
      "_id": "6568b5816he8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    };
    setNotes(notes.concat(note));
  }
  // Delete note
  const deleteNote = async (id) => {
    // Api calls 
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1N2IwMDMyZDVhMmViNjNjNjgxZjY4In0sImlhdCI6MTcwMDI4ODc5Mn0.xFT49lrJNaZ1fTu0A9WE2v9Gs_LoVyMOa2bJlF80gsw"
      }
    });
    const json = response.json();
    console.log(json);

    console.log(`note deleted ${id}`);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes);
  }
  // Edit note
  const editNote = async (id, title, description, tag) => {
    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }

    // API calls

    const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU1N2IwMDMyZDVhMmViNjNjNjgxZjY4In0sImlhdCI6MTcwMDI4ODc5Mn0.xFT49lrJNaZ1fTu0A9WE2v9Gs_LoVyMOa2bJlF80gsw"
      },
      body: JSON.stringify({ id, title, description, tag }),
    });
    const json = response.json();
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
