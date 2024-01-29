import React, { useState } from 'react'
import GroupCard from '../GroupCard/GroupCard'
import NotesCard from '../NotesCard/NotesCard';
import Styles from './GroupNotes.module.css';
import sendBtn from '../../assets/icons/Vector.png';

const GroupNote = ({ selectedNote, selectedGroup, addnewNote }) => {
    const [newNote, setNewNotes] = useState(null)
    let notesName = selectedGroup.split(" ");
    let notesSymbol = "";
    console.log(notesName)
    let notesNameLength = notesName.length;
    if (notesNameLength === 1) {
        notesSymbol = notesName[0].charAt(0) + notesName[0].charAt(1);
    } else {
        let count = 0;
        for (let data of notesName) {
            notesSymbol += data.charAt(0);
            count++;
            if (count > 2)
                break;
        }
    }
    notesSymbol = notesSymbol.toUpperCase();

    const handleAddNotes=()=>{
        addnewNote(newNote); 
        setNewNotes("") ;
    };

    return <div className={Styles.group_notes}>
        <header className={Styles.group_card} style={{ backgroundColor: '', cursor: '', margin: 0, padding: "5px" }}>
            <div className={Styles.notes_symbol} style={{ backgroundColor: `${selectedNote.color}` }}>{notesSymbol}</div>
            <b>{selectedGroup}</b>
        </header>
        <div className={Styles.notes_wrapper}>
            {
                selectedNote && selectedNote.val && selectedNote.val.map(notes => <NotesCard notes={notes} />)
            }

        </div>
        <div className={Styles.create_note}>
          
           <textarea type='text' style={{padding:"5px 60px 5px 5px"}} value={newNote} onChange={(e) => setNewNotes(e.target.value)} max={300} placeholder='Enter your text here.....'/><br />
            <button disabled={!newNote?true:false}  style={{cursor:'pointer'}}onClick={() => handleAddNotes() }><img src={sendBtn}/></button>
          
        </div>
    </div>
}

export default GroupNote