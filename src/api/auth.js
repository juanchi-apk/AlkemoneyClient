import axios from 'axios';

const api = axios.create( {baseURL: 'http://localhost:3001'})

export async function signUpUser (formData) {

    try {
        api.post(`/auth/signup` , formData).then( response => {
            localStorage.setItem('profile', response.data)
            return response.data
        })
      
    
    } catch (error) {
        console.log(error.response)
    }
    
    

}

export async function signInUser (formData) {

    try {
       const response = await api.post(`/auth/signin` , formData)
        return response.data
    } catch (error) {
        
        console.log(error.response)
    }
    
    

}

export async function singWithGoogle(data){
    const  {email, givenName , familyName , googleId} = data
    
    const formData = {
        username : email, 
        firstname: givenName,
        lastname: familyName, 
        email:email, 
        password:googleId
    }
    try {
        const response = await api.post(`/auth/signwith` , formData)
    
    } catch (error) {
        console.log(error.response.data.isUser)
        if (    !error.response.data.isUser){
            console.log( error.response)

        } else{
            console.log("El usuario ya existe")
        }
    }
    
}


