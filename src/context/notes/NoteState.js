import React from "react";
import NoteContext from "./noteContext";
import { useState } from 'react'


const NoteState = (props)=>{

const setInitialNotes = [
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b816e8f6f5a6ef114065",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Love you jindgi",
      "tag": "General",
      "date": "2023-11-30T16:28:06.563Z",
      "__v": 0
    },
    {
      "_id": "6568b842e8f6f5a6ef114067",
      "user": "6557b0032d5a2eb63c681f68",
      "title": "greetings",
      "description": "Have a good night with a sweet dream",
      "tag": "General",
      "date": "2023-11-30T16:28:50.352Z",
      "__v": 0
    }
  ]

  const [notes, setNotes] = useState(setInitialNotes)

    return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;
