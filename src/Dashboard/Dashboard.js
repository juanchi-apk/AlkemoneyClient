import React, { useState, useEffect } from 'react';
import { getUserTransactions } from '../api/transactions';
import {useDispatch, useSelector} from 'react-redux';
import { onSetUserTransactions, setUserBalance, setUserIncomes, setUserOutcomes } from '../store/payloads/actions';
import TransactionCreate from '../admin/TransactionCreate';
import TransactionBoard from '../admin/TransactionBoard';
import("./dashboard.scss");



const Dashboard = ()=>{

    const stateUser = useSelector(state => state.authData);
    const stateTransactions = useSelector(state=>state.transactions);
    const stateBalance = useSelector(state=>state.balance)

    const [userData, setUserData] = useState(stateUser)
    const [userTransactions, setUserTransactions] = useState(stateTransactions)
    const [userBalance , setUserBalance] = useState(stateBalance);
    const dispatch = useDispatch()
    

    useEffect(()=>{
      
     
            const fetchUserTransactions = async () => {
            const response = await getUserTransactions(userData).catch(error=>{console.log(error.message)});
            dispatch(onSetUserTransactions(response?.data)); 
        
            

          
            }
            fetchUserTransactions();    
            setUserTransactions(stateTransactions);
            setUserBalance(stateBalance)
          /*  setUT()
          then((data)=>{return data});
            console.log(userTransactions) */

        },[])
    console.log(stateTransactions)
    console.log(stateBalance)

        
  
    return (<div className='dashboardContainer'>
        {(!stateTransactions.length>0) && (
            <div>
                Bienvenido {userData?.result.givenName}! Aca podes hacer tu primer transaccion!
               
            </div>
        )}
        <div>
        <div>
        Bienvenido {userData?.result.givenName}! Tu Balance total es <strong>{`$ ${stateBalance}`}</strong>!

        </div>
        <TransactionBoard transactions={stateTransactions}/>
         <TransactionCreate userData={userData}/>
        
        </div>
         </div>)



}

export default Dashboard