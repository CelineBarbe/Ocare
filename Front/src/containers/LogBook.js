import { connect } from 'react-redux';

import LogBook from 'src/components/LogBook';

const mapStateToProps = ({logBook}, ownProps) => {
  const { list, picture } = logBook;
  const { entryModal, closeModalEntry, patientId } = ownProps;
  return ({
    entryModal,
    closeModalEntry,
    list,
    patientId,
    picture
  })
}

// appel a connect et export
export default connect(mapStateToProps,null)(LogBook);
