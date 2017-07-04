import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import actions from '../actions/Actions';

export default combineReducers({
    routing: routerReducer,
    actions
})