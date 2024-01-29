import React from 'react';
import Image from '../../assets/images/mainView.png';
import Styles from './Mainview.module.css';

export const MainviewComponent = () => {

    return (
        <div className={Styles.mainview}>
            <div style={{alignItems:'center'}}>
                <img src={Image} alt='main view image' />
            </div>
            <div>
                <h1>Pocket Notes</h1>
                <p>
                    Send and receive messages without keeping your phone online.
                    Use Pocket Notes on up to 4 linked devices and 1 mobile phone
                </p>
            </div>

        </div>
    )
}