import React from 'react';
import PropTypes from 'prop-types';

import Game from '../containers/Game';
import Navigation from '../containers/Navigation';

// eslint-disable-next-line react/prop-types
const App = () => {
    return (
        <div className="ui container">
            <br />
            <h1 className="ui dividing header">DIGIT SPAN MNEMONICS</h1>
            <div className="ui info message">
                <div className="header">Welcome!</div>
                <ul className="list">
                    <p>
                        This app will train you to associate numbers with letters
                        using the Mnemonic major system. When the association becomes innate,
                        it will challenge you to create words quickly by inserting vowels
                        in between the letters. This conversion to letters -> words should
                        help with memorizing digits (as in the digit span game) because
                        words are easier to remember. Enjoy! :]
                    </p>
                </ul>
            </div>
            <Navigation />
            <Game />
        </div>
    );
};

App.PropTypes = {
    match: PropTypes.string
};


export default App;
