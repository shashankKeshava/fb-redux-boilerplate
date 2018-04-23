import {combineReducers} from 'redux';
import app from '../duc';

export default combineReducers({
    [app.store]: app.reducer
})