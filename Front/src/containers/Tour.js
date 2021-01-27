import { connect } from 'react-redux';

import Tour from 'src/components/Tour';
import { } from 'src/actions/tour';

const mapStateToProps = ({ tournee }) => {
  const { list} = tournee;

  return ({
    list,
  });
};

const mapDispatchToProps = (dispatch) => ({
   //
});

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(Tour);
