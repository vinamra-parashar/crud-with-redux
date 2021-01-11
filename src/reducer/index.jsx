import { combineReducers } from 'redux';
import { contactReducer } from './ContactReducer';
// import { notificationReducer } from './NotificationReducer';

// console.log('notificationReducer', notificationReducer);

export default combineReducers({
    contacts: contactReducer,
    // message: notificationReducer
})