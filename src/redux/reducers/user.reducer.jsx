import { GET_USERPROFILE, EDIT_FIRSTNAME, LOGOUT } from "../actions/type.actions"

/* Initial user state */
const initialState = {
    status: 'VOID',
    userData: {}
}

export const userReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_USERPROFILE:
            return {
                ...state,
                status: 'SUCCEEDED',
                userData: action.payload
            }
        case EDIT_FIRSTNAME: 
            return {
                ...state,
                status: "MODIFIED",
                userData: {
                    ...state.userData,
                    firstName: action.payload.firstNAME
                } 
            } 
        case LOGOUT: {
            return initialState;  
        }   
        default:
            return state;    
    }
}

        