import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const intialState = {    
    message: "none"
};

export const notificationReducer = (state = intialState, action) => {
    console.log('notificationReducer', action);
    if(action.type === "MESSAGE"){
        return (
            store.addNotification({
            title: 'Success',
            message: 'action.payload',
            type: 'success',                         // 'default', 'success', 'info', 'warning'
            container: 'top-right',                // where to position the notifications
            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
            dismiss: {
                duration: 3000
            }
        }));   
    } 
}