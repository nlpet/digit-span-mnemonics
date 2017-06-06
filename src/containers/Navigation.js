import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';


const Navigation = ({ navigation, actions }) => {
    const tabs = [];
    const tabsClass = `ui three item stackable tabs menu`;
    const tabNames = {
        learn: '1) Learn Mnemonic Major System',
        challenge: '2) Create words from numbers',
        test: '3) Play Digit span'
    };

    Object.keys(tabNames).forEach((tabName, i) => {
        tabs.push(
            <Link to={tabName}
                  key={i}
                  data-tab={tabName}
                  className={navigation.mode === tabName ? "active item" : "item"}
                  onClick={() => actions.changeMode({ mode: tabName })}>

               {tabNames[tabName]}
            </Link>
        );
    });

    return <div className={tabsClass}>{tabs}</div>;
};

Navigation.propTypes = {
    navigation: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
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
