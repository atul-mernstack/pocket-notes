import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import GroupNote from '../GroupNote/GroupNote';
import Styles from './HomeComponent.module.css';
import CreateGroup from '../CreateGroup/CreateGroup';
import { MainviewComponent } from '../Mainview/MainviewComponent';
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomeComponent = () => {
  const [notes, setnotes] = useState();
  const [selectedGroup, setSelectedGroup] = useState(null)
  const [selectedNote, setSelectedNote] = useState("")
  const [createGroup, setCreateGroup] = useState(false)
  const [isMobileView,setIsMobileView]=useState(true);
  const getData = async () => { 
    let notes = await localStorage.getItem("notes")
    if (notes) {
      let data = JSON.parse(notes)
      setnotes(data)
    }
  }
  useEffect(() => {
    getData();
  }, [])

  const selectGroup = (groupName) => {

    setSelectedNote(notes[groupName])
    setSelectedGroup(groupName);
    if(window.innerWidth<=480){
      setIsMobileView(false);
    }      
  
  }
  const openDialog = () => {
    setCreateGroup(true)
  }

  const closeDialog=()=>{
    setCreateGroup(false);
  }

  const createGroupfun=async(data)=>{
         
         if(notes&&notes[data.name]){
          toast('Group already exist!');
          return;
         }
         let allGroups={
          ...notes,
          [data.name]:{
            color:data.color,
            val:[]
          }
         }
         await localStorage.setItem("notes",JSON.stringify(allGroups));
         setnotes(allGroups);
          }

  const addnewNote=async(note)=>{    
      let allGroups={
        ...notes
       }
       allGroups[selectedGroup].val.push({text:note,date:new Date()})
       await localStorage.setItem("notes",JSON.stringify(allGroups));
       setnotes(allGroups);
       setSelectedNote(allGroups[selectedGroup]);       
  }

  return <>    
    <div className={Styles.pocket_notes}>
      {isMobileView&&<Sidebar notes={notes} selectGroup={selectGroup} selectedGroup={selectedGroup} addGroup={openDialog} />}
      
      { selectedGroup?(<GroupNote addnewNote ={addnewNote} setIsMobileView={setIsMobileView} setSelectedGroup={setSelectedGroup} selectedNote={selectedNote} selectedGroup={selectedGroup}/>):
      (<MainviewComponent/>)}

    </div>
    <div className={Styles.create_group}>
      {
        createGroup && <CreateGroup onClose={closeDialog} createGroup={createGroupfun}/>
      }
    </div>    
  </>
}

export default HomeComponent;