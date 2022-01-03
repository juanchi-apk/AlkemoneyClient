
import React from 'react';
import {Link, useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { onLogout } from '../store/payloads/actions';
import {connect, useDispatch} from 'react-redux'
import("./navbar.scss");


function Navbar(onAuthLogout) {
  
    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch = useDispatch()
    const logout = () =>{
        dispatch({ type: 'LOGOUT' })
        setUser(null)
        navigate("/")
        window.location.reload();
    }

    useEffect(() => {
      const token = user?.token
      setUser(JSON.parse(localStorage.getItem('profile')))
    },[])

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


function mapDispatchToProps(dispatch){
    return {
   
      onAuthLogout: () => {dispatch(onLogout())}, 
    }
  }

  export default connect( null, mapDispatchToProps)(Navbar);

