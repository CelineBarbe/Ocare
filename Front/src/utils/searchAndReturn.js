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
 