import { GET_USERPROFILE, EDIT_FIRSTNAME } from "./type.actions";

/* User data recovery action */
export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE,
        payload: userData,
    }
}

/* Username update action */
export const updateFirstName = (firstName) => {
    return {
        type: EDIT_FIRSTNAME,
        payload: firstName,
    }
}