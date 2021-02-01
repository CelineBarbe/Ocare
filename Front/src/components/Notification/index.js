import React, { useState } from 'react';

import './notification.scss';

import checkWhite from 'src/assets/icones/checkWhite.svg';
import x from 'src/assets/icones/x.svg';

const Notification = () => {

  const [notify,setNotify] = useState(false);

  function openModalNotify() {
    setNotify(true);
  }

  function closeModalNotify(){
    setNotify(false);
  }


  return (
    <div className="notification">
    { notify 
    ? <div className="notification-message">
        <img src={x} className="notification-message-close" onClick={closeModalNotify}/>
        <img src={checkWhite} className="notification-message-img"/>
        <p className="notification-message-title">
          Success
        </p>
      </div>
    : null
    }
      
      <button className="btn" onClick={openModalNotify}>Notify !</button>
    </div>
  );
  
}

export default Notification;
