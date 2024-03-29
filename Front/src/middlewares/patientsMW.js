import axios from 'axios';
import { GET_PATIENTS, UPDATE_PATIENT, CREATE_PATIENT, GET_PATIENT } from 'src/actions/types';
import { seedPatients, createPatientSucceeded, seedPatient } from 'src/actions/patients';
import { success, error, close, notify } from 'src/actions/notification';
import {returnFirstLetterUpper} from 'src/utils/searchAndReturn';

const URL = "http://localhost:3000/";

const patientsMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  const Recupstore = store.getState();
  const { default_cabinet } = Recupstore.auth;
  if (action.type === GET_PATIENTS) {
    console.log('passe par get patients');
    const config = {
      method: 'get',
      url: `${URL}patient`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(seedPatients(response.data));
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  };
  if (action.type === GET_PATIENT) {
    console.log('passe par get patient');
    const {id} = action;
    const config = {
      method: 'get',
      url: `${URL}patient/${id}`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(seedPatient(response.data.patient[0]));
          
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  };

  if (action.type === UPDATE_PATIENT) {
    const { firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking } = Recupstore.patients;
    console.log("passe par Update Patient");
    const {id} = action;
    const config = {
      method: 'patch',
      url: `${URL}patient/${id}`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        firstname,
        lastname: returnFirstLetterUpper(lastname),
        birthdate,
        gender,
        address,
        zip_code,
        city,
        phone_number,
        pathology,
        daily_checking,
        number_daily_checking: 1,
        cabinet_id: default_cabinet,
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(notify("Informations du patient mise à jour"))
          store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
          console.log("Update DONE");
        }
      })
      .catch((err) => {
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        console.log(err);
      });
    next(action);
  };

  if (action.type === CREATE_PATIENT) {
    const { firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking } = Recupstore.patients;
    console.log('passe par create patients');
    console.log(firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, default_cabinet)
    const config = {
      method: 'post',
      url: `${URL}patient/`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        firstname,
        lastname: returnFirstLetterUpper(lastname),
        birthdate,
        gender,
        address,
        zip_code,
        city,
        phone_number,
        pathology,
        daily_checking,
        number_daily_checking,
        cabinet_id: default_cabinet,
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(notify("Patient bien créé"))
          store.dispatch(createPatientSucceeded(response.data.savedPatient.id));
          store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        } 
      })
      .catch((err) => {
        store.dispatch(notify("Erreur : un des champs est incorrect."))
        store.dispatch(error());
        setTimeout(() => {
          store.dispatch(close());
        }, 3000)
        console.log(err);
      });
    next(action);
  };
  next(action);
}

export default patientsMW;
