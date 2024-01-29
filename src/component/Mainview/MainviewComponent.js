import React from 'react';
import Image from '../../assets/images/mainView.png';
import Styles from './Mainview.module.css';
import lockIcon from '../../assets/icons/lock.png';

export const MainviewComponent = () => {

    return (
        <div className={Styles.mainview}>
            <div style={{alignItems:'center', marginTop:'20vh'}}>
                <img src={Image} alt='main view image' />
            </div>
            <div style={{textAlign:'center'}} >
                <h1>Pocket Notes</h1>
                <p>
                    Send and receive messages without keeping your phone online.<br/>
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                </p>
                <p style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'25vh'}}><img src={lockIcon} alt="icon"/>&nbsp;&nbsp;end-to-end encrypted</p>
            </div>

        </div>
    )
}