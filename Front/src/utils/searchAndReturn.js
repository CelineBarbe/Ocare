export const findDefaultCabinet = (data, idcabinet) => data.find(cabinet => (cabinet.id === idcabinet));

export const sortCabinets = (cabinets, idCabinetDefault) => {
  const defautCab = cabinets.find(cab => cab.id !== idCabinetDefault);
  const cabFilter = cabinets.filter(cab=> cab.id == idCabinetDefault);
  return [...new Set([defautCab,...cabFilter])] ; 
}

export const alphabetic = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

export const sortAlphabet= (a, b) => {
  if(a.lastname < b.lastname) { return -1; }
  if(a.lastname > b.lastname) { return 1; }
  return 0;
};

export const returnArrayFirstLetterSorted = (array, letter) => {
  const arrayByLetter = array.filter(element => element.lastname.charAt(0) === letter)
  const arrayByLetterSorted = arrayByLetter.sort(sortAlphabet);
  return arrayByLetterSorted;
 }
 
 export const returnNameById = (array, id) => {
   const result = array.find(human => human.id == id);
   return {
     fistname: result.firstname,
     lastname: result.lastname,
     gender: result.gender,
   }
 }

 //TODO check this null
 export const returnVoid = (entry) => {
  if (entry.length <= 1) {
    //test sur une seule entrée
     if (entry[0]) {
       return [entry[0]]
     } else {
       return []
     }
  } 
  else {
    return entry
  } 
 }


export const returnArrayHandleChange = (array, input) => {
  if(input.length == 1 ){
    const arrayByLetter = array.filter(element => element.lastname.charAt(0) === input[0].toUpperCase())
  console.log(arrayByLetter);
  return arrayByLetter;
  } else if (input.length == 2){
    const arrayByLetter = array.filter(element => element.lastname.charAt(0) === input[0].toUpperCase() && element.lastname.charAt(1) === input[1])
    console.log(arrayByLetter);
    return arrayByLetter
  } else if (input.length == 3){
    const arrayByLetter = array.filter(element => element.lastname.charAt(0) === input[0].toUpperCase() && element.lastname.charAt(1) === input[1] && element.lastname.charAt(2) === input[2])
    console.log(arrayByLetter);
    return arrayByLetter
  }else {
    return []
  }
 }

 export const returnObjectTourList = (data, list, listpatient) => {
   const {tour_id}  = list[0];
  console.log('je suis dans return object et data vaut', data);
  console.log('je suis dans return object et list vaut', list);
  const lastOrder = list.sort((a,b) => (b.order_tour - a.order_tour)) 
  console.log('lastOrder', lastOrder[[0]])
  const newOrder = lastOrder[0].order_tour+1;
  const names = listpatient.filter(patient => patient.id == data.patient_id);
  console.log('names',names)
  const firstname = names[0].firstname;
  const lastname = names[0].lastname;
  return {
    id: null,
    tour_id,
    patient_id: data.patient_id,
    order_tour: newOrder,
    firstname,
    lastname,
    medical_act_id: data?.medical_act_id ?? 1,
    medical_act_name: data?.medical_act_name ?? "Soins infirmiers",
    logbook_id: data.id,
  }
 }


 export const toOrder = (data) => {
  return data.sort((a,b)=> a.order_tour-b.order_tour)
 }

 export const doneTask= (list,id) => {
  console.log('list', list);
  const task = list.find(el => el.logbook_id===id);
  console.log('task',task)
  task.done = true;

  const listwithoutTask = list.filter(el => el.logbook_id!==id);
  let listReturn = [...listwithoutTask, task];
  console.log('listReturn avant order', listReturn)
  return toOrder(listReturn)
 }

 export const filterDeletePatientList= (idLog, List) => {
   const newList = List.filter(element => element.logbook_id !== idLog);
   console.log(newList);
   return newList
 }


 export const filterUnsubNurseList= (idNurse, staffList) => {
  const newList = staffList.filter(element => element.id !== idNurse);
  console.log(newList);
  return newList
}

export const filterUnsubCabinet= (cabinetId, list) => {
  const newList = list.filter(element => element.id !== cabinetId);
  console.log(newList);
  return newList
}
