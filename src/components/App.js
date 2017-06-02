import React from 'react';
import { head } from 'ramda';
import PropTypes from 'prop-types';

import Game from '../containers/Game';
import Navigation from '../containers/Navigation';

// eslint-disable-next-line react/prop-types
const App = () => {
    return (
        <div className="ui container">
            <br />
            <h1 className="ui dividing header">DIGIT SPAN MNEMONICS</h1>
            <p className="first">Welcome!</p>
            <Navigation />
            <Game />
        </div>
    );
};

App.PropTypes = {
    match: PropTypes.string
};


export default App;
