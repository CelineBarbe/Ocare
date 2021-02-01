import React, { Fragment, useState } from 'react';

import './notification.scss';

import checkWhite from 'src/assets/icones/checkWhite.svg';
import errorImg from 'src/assets/icones/errorImg.svg';
import x from 'src/assets/icones/x.svg';

const Notification = ({
  closeModal,
  success,
  error,
  message,

}) => {

  console.log(message);

  function closeModalNotify(){
    closeModal(true);
  }

  return (
    <Fragment>
    { success  
    ? <div className="notification-message success">
        <img src={x} className="notification-message-close" onClick={closeModalNotify}/>
        <img src={checkWhite} className="notification-message-img"/>
        <p className="notification-message-title">
          {message}
        </p>
      </div>
    : null
    }
    { error  
    ? <div className="notification-message error">
        <img src={x} className="notification-message-close" onClick={closeModalNotify}/>
        <img src={errorImg} className="notification-message-img"/>
        <p className="notification-message-title">
          {message}
        </p>
      </div>
    : null
    }
    </Fragment>
  );
  
}

export default Notification;
