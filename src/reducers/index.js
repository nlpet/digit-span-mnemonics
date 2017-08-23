import { combineReducers } from 'redux';

import navigation from './navigation';
import challenge from './challenge';
import learn from './learn';
import testing from './testing';

const App = combineReducers({
    challenge,
    learn,
    testing
});


export default App;
