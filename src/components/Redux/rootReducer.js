import {combineReducers} from 'redux';
import authReducer from './Auth/AuthReducer';


export default combineReducers({
  auth : authReducer
})