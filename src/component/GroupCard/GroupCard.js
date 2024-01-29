import React, { useState } from 'react'
import Styles from "./GroupCard.module.css";
const GroupCard = ({ color,group,selectedGroup, selectGroup }) => {
  const [isSelectedGrp,setIsSelectedGrp]=useState();
  let notesName = group.split(" ");
  let notesSymbol = "";
  console.log(notesName)
  let notesNameLength = notesName.length;
  if( notesNameLength===1){
    notesSymbol=notesName[0].charAt(0)+notesName[0].charAt(1);
  }else{
    let count=0;
    for (let data of notesName) {
      notesSymbol += data.charAt(0);
      count++;
      if(count>2)
        break;
    }
  }
  
  notesSymbol = notesSymbol.toUpperCase();
  console.log(color)
  console.log(notesSymbol)
  
  // if(!color){
  //   color="#764534"
  // }

 
  const handleSelectGroup=(group)=>{
    console.log(group);

      selectGroup(group)
      
      setIsSelectedGrp(group);
  };

  return <div 
  className={Styles.group_card} 
  onClick={() => handleSelectGroup(group)} 
  style={{backgroundColor:(selectedGroup && selectedGroup)===`${group}`?'lightgrey':'', borderRadius:'5px'}}
  >
    <div style={{backgroundColor:`${color}`}}>{notesSymbol}</div>
    <b>{group}</b>
  </div>
}

export default GroupCard