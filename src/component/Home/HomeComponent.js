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
    // let obj={
    //     "HTML Notes":{"color":"#752342","val":[{"text":"HT Notes","date":new Date()},{"text":"H2","date":new Date() },{"text":"H2","date":new Date() },{"text":"HT Notes","date":new Date()},{"text":"H2","date":new Date() },{"text":"H2","date":new Date() },{"text":"HT Notes","date":new Date()},{"text":"H2","date":new Date() },{"text":"H2","date":new Date() },{"text":"HT Notes","date":new Date()},{"text":"H2","date":new Date() },{"text":"H2","date":new Date() }]},
    //     "CSS CN":{"color":"#FF0000","val":[{"text":"1T","date":new Date() },{"text":"33","date":new Date() }]}
    // }
    // await localStorage.setItem("notes",JSON.stringify(obj))
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
      
    // alert(selectedGroup)
  }
  const addGroup = () => {
    setCreateGroup(true)
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
         setCreateGroup(false)

  }
 // const [isPopupOpen, setPopupOpen] = useState(false);
 const handleOutsideClick = (event) => {
  // if (createGroup && !event.target.closest('.popup')) {
  //   setCreateGroup(false);
  // }
};

  // useEffect(() => {
    
  //  document.addEventListener('click', handleOutsideClick);

  //   return () => {
  //     document.removeEventListener('click', handleOutsideClick);
  //   };
  // }, [createGroup]);
  const addnewNote=async(note)=>{
      //alert(note)
      let allGroups={
        ...notes
       }
       allGroups[selectedGroup].val.push({text:note,date:new Date()})
       await localStorage.setItem("notes",JSON.stringify(allGroups));
       setnotes(allGroups);
       setSelectedNote(allGroups[selectedGroup])
       //setCreateGroup(false)
  }
  return <>    
    <div className={Styles.pocket_notes}>
      {isMobileView&&<Sidebar notes={notes} selectGroup={selectGroup} selectedGroup={selectedGroup} addGroup={addGroup} />}
      
      { selectedGroup?(<GroupNote addnewNote ={addnewNote} setIsMobileView={setIsMobileView} setSelectedGroup={setSelectedGroup} selectedNote={selectedNote} selectedGroup={selectedGroup}/>):
      (<MainviewComponent/>)}

    </div>
    <div className={Styles.create_group}>
      {
        createGroup && <CreateGroup  handleOutsideClick={handleOutsideClick}createGroup={createGroupfun}/>
      }
    </div>    
  </>
}

export default HomeComponent;