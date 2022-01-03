import {signUpUser, signInUser , singWithGoogle} from '../../api/auth';
import {CHANGE_USER, 
        CHANGE_PASSWORD, 
        CHANGE_EMAIL,
        CHANGE_NAME,
        CHANGE_LASTNAME,
        SET_ERROR,
        SET_CAT_NAME,
        SET_ALL_CAT,
        AUTH,
        LOGOUT,
        SIGNUP,
        SIGNIN,
    
    }
from '../actions/actionTypes';


export function setUser(user){
    return {type: CHANGE_USER, payload: { user } };
}

export function setMail(mail){
    return {type: CHANGE_EMAIL, payload: { mail } };
}

export function setPassword(password){
    return {type: CHANGE_PASSWORD, payload: { password } };
}

export function setError(errors){
  
    return {type: SET_ERROR, payload: {errors: errors.errors}}
}

export function setName(name){
    return {type: CHANGE_NAME, payload: { name } };
}


export function setLastName(lastname){
    return {type: CHANGE_LASTNAME, payload: { lastname } };
}

export function setCatName(catname){
    return {type: SET_CAT_NAME, payload: { catname } };
}

export function setAllCategories(categories){
    return {type: SET_ALL_CAT, payload: { categories } };
}

export function onAuth(result, token){
    
  

    const  {email, givenName , familyName , googleId} = result
    const dataForm = {
        username : email, 
        firstname: givenName,
        lastname: familyName, 
        email:email, 
        password:googleId
    }

    singWithGoogle(dataForm)

    return {type: AUTH, payload: { result, token } };
}
export function onLogout(){
    return {type: LOGOUT };
}

export  function onSignUp(result, token){

    
    return {type: SIGNUP, payload: { result, token }}
}

export function onSignIn(result, token){       
    
    return {type: SIGNIN, payload: { result, token } };
    
}




