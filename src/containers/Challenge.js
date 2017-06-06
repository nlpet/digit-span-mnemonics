import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';

import * as actions from '../actions';


const Challenge = () => {
    return <div>Challenge</div>;
};


Challenge.propTypes = {
};


const mapStateToProps = (state) => ({
    navigation: state.navigation
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Challenge);
