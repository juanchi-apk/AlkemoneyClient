
import React from 'react';
import {Link, useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import("./navbar.scss");


function Navbar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateUser = useSelector(state => state.authData)
    const [user, setUser] = useState(stateUser)

     
    const  logout = async () =>{
        dispatch({ type: 'LOGOUT' })
        navigate("/" , {replace: false})
    }
    useEffect(()=>{
        setUser(stateUser)
    },[stateUser])
    

    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
             
                    <h3 className = "navbar-brand brandtitle">Alkemoney</h3>
         
                <div className="d-flex userBar" >
                    {user? (
                    <>
                        {user.result.ImageUrl && (

                            <>
                            <img className='userBar' src={user.result.ImageUrl}  alt="user"></img>
                            </>
                        )}    
                        
                    
                    <h6 style={{color:"white", marginRight:"10px" }}>Bienvenido {user.result.givenName||user.result.first_name}!!!</h6>
                    <button  type="button" className="btn btn-success" onClick={logout}>Log Out</button>
                    </>
                    ):(<></>)}
                </div>
            </div>
        </nav>
    )
}


  export default Navbar

