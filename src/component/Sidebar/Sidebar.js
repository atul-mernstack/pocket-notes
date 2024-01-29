import React from 'react'
import GroupCard from '../GroupCard/GroupCard'
import Styles from './Sidebar.module.css';

const Sidebar = ({notes,selectGroup,selectedGroup,addGroup}) => {
  return <div className={Styles.left_section}>
     <h1>Pocket Notes</h1>
     <div className={Styles.groupList}>
        {
        notes && Object.entries(notes).map(group=><GroupCard className={Styles.group} selectedGroup={selectedGroup} color={group[1].color} group={group[0]} selectGroup={selectGroup}/>)
        }
     </div>
     <div className={Styles.addnote_btn} onClick={addGroup}>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#5207df" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
     </div>
     
  </div>
}

export default Sidebar