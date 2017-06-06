import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Accordion } from 'semantic-ui-react';

import * as actions from '../actions';
import MnemonicMajorSystem from '../components/MnemonicMajorSystem';
import Cards from '../components/Cards';


const Learn = ({ games }) => {
    const panels = [
        {
            title: 'Reference',
            content: <MnemonicMajorSystem />
        },
        {
            title: 'Cards',
            content: <Cards />
        },
        {
            title: 'Practice',
            content: 'Learn game...'
        }
    ];

    return (
        <Accordion style={{ width: "100%" }}
                   panels={panels}
                   defaultActiveIndex={-1} styled />
    );
};

Learn.propTypes = {
    games: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Learn);
