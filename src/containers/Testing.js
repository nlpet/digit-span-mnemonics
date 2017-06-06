import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';


const Testing = ({ games }) => {
    console.log('Testing', games);
    return <div>{games.test}</div>;
};


Testing.propTypes = {
    games: PropTypes.object.isRequired
};


const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Testing);
