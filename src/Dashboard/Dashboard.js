import React, { useState, useEffect } from 'react';
import { getUserTransactions } from '../api/dashboard';
import {useDispatch, useSelector} from 'react-redux'


const Dashboard = ()=>{

    const stateUser = useSelector(state => state.authData)
    const [userData, setUserData] = useState(stateUser)
    const dispatch = useDispatch()
    
   
    useEffect(()=>{
        getUserTransactions(userData);
    },[userData])

    return (<div> hola </div>)



}

export default Dashboard