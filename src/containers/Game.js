import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import * as actions from '../actions';


const Game = () => {
    return <div>Game</div>;
};


Game.propTypes = {
};


const mapStateToProps = (state) => ({
    boards: state.boards
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
