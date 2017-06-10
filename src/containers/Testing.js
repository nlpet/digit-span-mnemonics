import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';

import * as actions from '../actions';


const Testing = ({ games }) => {
    return (
        <div>
            <Header as="h2">
                Test Mode
                <Header.Subheader>
                    Play Digit Span and see how your performance has improved.
                </Header.Subheader>
            </Header>
            <div>{games.test}</div>
        </div>
    );
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
