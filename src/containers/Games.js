import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';
import Learn from './Learn';
import Challenge from './Challenge';
import Testing from './Testing';


const Games = ({ navigation }) => {
    const gamesObj = {
        learn: <Learn />,
        challenge: <Challenge />,
        test: <Testing />
    };

    return <div>{gamesObj[navigation.mode]}</div>;
};


Games.propTypes = {
    navigation: PropTypes.object.isRequired
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
)(Games);
