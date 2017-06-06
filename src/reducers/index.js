import { combineReducers } from 'redux';

import games from './games';
import navigation from './navigation';
import challenge from './challenge';
import learn from './learn';
import testing from './testing';

const App = combineReducers({
    navigation,
    games,
    challenge,
    learn,
    testing
});


export default App;
