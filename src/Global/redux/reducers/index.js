import {combineReducers} from 'redux';
import login from './login'
import pattern from './pattern'
import sound from './sound'


const appReducer = combineReducers({
    login,
    pattern,
    sound
});

export default appReducer;
