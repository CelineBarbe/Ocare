export const findDefaultCabinet = (data, idcabinet) => data.find(cabinet => (cabinet.id === idcabinet));

export const sortCabinets = (cabinets, idCabinetDefault) => {
  const defautCab = cabinets.find(cab => cab.id !== idCabinetDefault);
  const cabFilter = cabinets.filter(cab=> cab.id == idCabinetDefault);
  return [...new Set([defautCab,...cabFilter])] ; 
}
