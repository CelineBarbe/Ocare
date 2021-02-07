import React, { Fragment, useEffect, useState } from 'react';
import { storage } from 'src/Firebase';

// == Import
import './entryModal.scss';

//== Import data -> array medical acte
import { data } from 'src/utils/data';

//== Import images 
import close from 'src/assets/icones/close.svg';
import check from 'src/assets/icones/checkWhite.svg';

const EntryModal = ({
  closeModalEntry,
  planned_date,
  ending_date,
  observations,
  daily,
  done,
  tags,
  isCreated,
  changeField,
  handleLogbook,
  patientId,
  id,
  time,
  done_date,
  medical_act_name,
  picture

}) => {

  const Select = () => {
    return (
      <select value={medical_act_name} id="medical_act_name" name="medical_act_name" onChange={handleChange} className="form-input create-patient-select big" placeholder="Choisissez un soin">
       {
        data.map((acte,index) => (
          <option key={acte} index={index} value={acte}>{acte}</option>
        )
        )
       } 
      </select>
    )
  } 

  /*FIREBASE STUFF */
const [image, setImage] = useState(null);
const [urlImage, setUrlImage] = useState(picture);

//avatar par défaut
const handleChangeFile = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
};

const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {},
            error =>{
                console.log(error);
            },
            () => {
                storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then (url => {
                    console.log(url);
                    handleChangePicture(url)
                })
            }
        )
    };
  
  /* */
  const targetPicture = 'picture';
  const handleChangePicture = (url) => {
    console.log('urlImage dans handleChangePicture',url);
    setUrlImage(url);
    changeField(url, targetPicture);
  }
  const handleChange = (event) => {
    console.log(event.target.name);
    changeField(event.target.value, event.target.name);
  }

  const handleChecked = (event) => {
    changeField(event.target.checked, event.target.name);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('planned date dans submit', planned_date);
    handleLogbook(patientId, id);
    closeModalEntry();
  };

  const onFocus = (event) => {
    event.currentTarget.type = "date";
  }

  return (
    <div className="modal-entry-new">
      <form className="form" onSubmit={handleSubmit}>
      <img onClick={closeModalEntry} src={close} className="modal-patient-close" alt="close"/>

      <Select />
      <input
      className="form-input big"
      type="text"
      name="observations"
      placeholder="Observations"
      value={observations}
      onChange={handleChange}
      />
      <input type="file" id="profile_pic" name="profile_pic"
            accept="image/*, .jpg, .jpeg, .png"  onChange={handleChangeFile}/>
        <button onClick={handleUpload} type='button'>Upload</button>
      <img className="modal-patient-avatar" src={urlImage} />
      <input type="checkbox" id="date" name="daily" onChange={handleChecked} value={daily}
      />
      <label htmlFor="isQuotidien">Ajouter dates</label>
      {daily
        ?
        <Fragment>
        <input
        className="form-input big"
        type="text"
        onFocus={onFocus}
        name="planned_date"
        onChange={handleChange}
        value={planned_date}
        placeholder="Date de début du soin"
      />
      <input
        className="form-input big"
        type="text"
        onFocus={onFocus}
        name="ending_date"
        onChange={handleChange}
        value={ending_date}
        placeholder="Date de fin du soin"
      />
      </Fragment>
      : null
      }
      <div className="formulaire-button" onClick={handleSubmit} >
        <span className="formulaire-button-title">Valider</span>
        <img className="formulaire-button-img" src={check} alt="valider"/>
      </div>
  </form>
  </div>
  )
};

export default EntryModal;
