import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions';


const Navigation = ({ navigation }) => {
    const tabsClass = `ui three item stackable tabs menu`;

    const changeMode = ({ mode }) => {
        return actions.changeMode({ mode });
    }

    return (
        <div className={tabsClass}>
            <a className={navigation.mode === 'learn' ? "active item" : "item"}
               data-tab="learn"
               onClick={() => changeMode({ mode: 'learn' })}>

               1) Learn Mnemonic Major System
            </a>
            <a className={navigation.mode === 'challenge' ? "active item" : "item"}
               data-tab="challenge"
               onClick={() => actions.changeMode({ mode: 'challenge' })}>

               2) Create words from numbers
            </a>
            <a className={navigation.mode === 'test' ? "active item" : "item"}
               data-tab="test"
               onClick={() => actions.changeMode({ mode: 'test' })}>

               3) Play Digit Span
            </a>
        </div>
    );
};

Navigation.propTypes = {
    navigation: PropTypes.object.isRequired
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
)(Navigation);
