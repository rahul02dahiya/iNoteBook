import React from 'react'

const NoteItem = (props) => {
    return (
        <div className='col-md-3'>
        <div class="card text-bg-light mb-4" style={{"max-width": "18rem"}}>
            <div class="card-header">Header</div>
            <div class="card-body">
                <h5 class="card-title">{props.note.title}</h5>
                <p class="card-text">{props.note.description}</p>
            </div>
        </div>
        </div>
    )
}

export default NoteItem;