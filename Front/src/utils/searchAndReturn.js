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

 export const returnVoid = (entry) => {
  if (entry.length <= 1) {
    //test sur une seule entrée
     let result = [...entry] ?? [];
     console.log('result', result);
     return result
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
