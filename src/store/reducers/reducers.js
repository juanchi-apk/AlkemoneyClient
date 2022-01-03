import {CHANGE_USER, 
        CHANGE_EMAIL,
        CHANGE_PASSWORD,
        CHANGE_NAME,
        CHANGE_LASTNAME,
        SET_ERROR,
        SET_CAT_NAME,
        SET_ALL_CAT,
        AUTH,
        LOGOUT,
        SIGNUP,
        SIGNIN
       
    } from '../actions/actionTypes';


const initialState = {
    
    user:"",
    name:"",
    lastname:"",
    mail:"",
    password:"",
    errors: undefined,
    catname:"",
    categories:null,
    authData : null
   

    
}

export function rootReducer(state = initialState, action) {
    switch (action.type) {
            case CHANGE_USER: 
            return {
                ...state,
                user: action.payload.user
            }
            case CHANGE_EMAIL: 
            return {
                ...state,
                mail : action.payload.mail
            }
            case CHANGE_PASSWORD: 
            return {
                ...state,
                password : action.payload.password
            }
            case SET_ERROR: 
            return {
                ...state,
                errors : action.payload.errors
            }
            case CHANGE_NAME: 
            return {
                ...state,
                name : action.payload.name
            }
            case CHANGE_LASTNAME: 
            return {
                ...state,
                lastname : action.payload.lastname
            }
            case SET_CAT_NAME: 
            return {
                ...state,
                catname : action.payload.catname
            }
            case AUTH: 
            
            localStorage.setItem('profile', JSON.stringify({...action?.payload}))

            return {
                ...state,
                authData: action.payload
            }
            case LOGOUT: 
            localStorage.clear()
            return {
                ...state,
                authData:null
            }
            case SET_ALL_CAT: 
            return {
                ...state,
                categories : action.payload.categories
            }

            case SIGNIN:
                localStorage.setItem('profile', JSON.stringify({...action?.payload}))

                return {
                    ...state,
                    authData: action.payload
                }
                case SIGNUP:
                localStorage.setItem('profile', JSON.stringify({...action?.payload}))

                return {
                    ...state,
                    authData: action.payload
                }

            
            default:
            return state;
   }
}