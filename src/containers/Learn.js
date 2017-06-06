import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';

import * as actions from '../actions';


const Learn = () => {
    return <div>Learn</div>;
};


Learn.propTypes = {
};


const mapStateToProps = (state) => ({
    state
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Learn);
