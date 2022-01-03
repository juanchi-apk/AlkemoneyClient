import axios from 'axios';

const api = axios.create( {baseURL: 'http://localhost:3001'})

export async function signUpUser (formData) {

    try {
        const response = await api.post(`/auth/signup` , formData)
        return response.data
    
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

export async function singWithGoogle(formData){
    try {
        const response = await api.post(`/auth/signwith` , formData)
        console.log(response.data)
    
    } catch (error) {

        if (!error.response.data.isUser){
            console.log( error.response)

        }
    }
    
}
