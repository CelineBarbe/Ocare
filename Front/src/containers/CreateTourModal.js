import { connect } from 'react-redux';

import { tourChangeField, createTour, changeTourDate} from 'src/actions/tour';

import CreateTourModal from 'src/modal/CreateTourModal';

const mapStateToProps = ({tournee}, ownProps) => {

  const { tour_date } = tournee;
  const { closeModalCreateTour } = ownProps;
  return ({
    closeModalCreateTour,
    tour_date,
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(tourChangeField(value, field));
  },
  handleTour: () => {
    console.log("je suis dans mon container");
    dispatch(createTour());
  },
  changeTourDate: (date) => {
    dispatch(changeTourDate(date));
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(CreateTourModal);
