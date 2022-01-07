import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:3001'})

export async function getUserTransactions (userData) {

            try {

                const response = api.get('/transactions/get',{
                    headers: {
                      Authorization: `Bearer ${userData.token}` //the token is a variable which holds the token
                    }
                   })

                return response.data
            
            } catch (error) {
        
                console.log(error.response)
            }
            
            
        
        }

        