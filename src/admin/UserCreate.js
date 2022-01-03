  import React, {useState}  from 'react';
  import {setUser, setMail ,setPassword, setError, setName, setLastName} from '../store/payloads/actions';
  import { connect } from 'react-redux';
  import axios from 'axios';
  import ('./UserCreate.scss')

  function UserCreate({
      onUserChange, 
      onEmailChange, 
      onPasswordChange, 
      onFormErrors,
      onNameChange,
      onLastNameChange,
      user,
      name,
      lastname,
      mail,
      password,
      errors
    })

    {

      const [userFormErrors, setuserFormErrors] = useState(false);

      
    async function newUser (event){
      event.preventDefault();
      setuserFormErrors(false)
      onFormErrors([]);

      try {
        const response = await axios.post(`http://localhost:3001/user/add`, {
          user,
          name,
          lastname,
          mail, 
          password,
        });
    
        
        // Success 🎉
       
        

      

    } catch (error)  {
      
           
         if (error.response) {
          
          if (error.response.status===404){

          }
        else{
          
          onFormErrors( error.response.data);
          
          setuserFormErrors(true)

        }
        
        } 
         /* else if (error.request) {
          console.log("error en el error.request")
          console.log(error)
        } else {
            // Something happened in setting up the request and triggered an Error
            console.log("error en el ultimo else")
            console.log(error)
        }
      */
      }

      
  }
    return (
      
          
  
      
      

          <div className="container-fluid mx-auto col-sm-12">
            <div className="col-sm-5 mx-auto">
            <form id="userForm"  onSubmit={event=>newUser(event)}>
              <div className="form-group row col-sm-12 mx-auto">
                <label htmlFor="inputUser" className="col-sm-3 col-form-label">User</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control " name="inputUser" id="inputUser" placeholder="Choose your User Name" onInput={(e) => onUserChange(e.target.value)}/>
                </div>
              </div>
              <div className="form-group row col-sm-12 mx-auto">
                <label htmlFor="inputName" className="col-sm-3 col-form-label">First Name</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control " name="inputName" id="inputName" placeholder="Your Name" onInput={(e) => onNameChange(e.target.value)}/>
                </div>
              </div>
              <div className="form-group row col-sm-12 mx-auto">
                <label htmlFor="inputLast" className="col-sm-3 col-form-label">Last Name</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control " name="inputLast" id="inputLast" placeholder="Your Last Name" onInput={(e) => onLastNameChange(e.target.value)}/>
                </div>
              </div>
              <div className="form-group row mx-auto col-sm-12">
                <label htmlFor="inputMail" className="col-sm-3 col-form-label">E-mail</label>
                <div className="col-sm-9">
                  <input type="email" className="form-control" name="inputMail" id="inputMail" placeholder="name@example.com" onInput={(e) => onEmailChange(e.target.value)}/>
                </div>
              </div>
              <div className="form-group row mx-auto col-sm-12">
                <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Password</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="inputPassword" id="inputPassword" placeholder="Create your password" onInput={(e) => onPasswordChange(e.target.value)}/>
                </div>
              </div>
              { userFormErrors&&(
            
                (errors.length>0)&&errors.map( function (element) {
                    return(
                      <div className="form-group row col-sm-12 mx-auto">
                      <p><small className ="text-center errors" >{element.msg}</small></p>

                      </div>
                    )
                })
              )}
              <div className="form-group row mx-auto">
                <div className="offset-sm-2 col-sm-10">
                  <button type="submit" className="btn btn-primary" >Action</button>
                </div>
              </div>
            </form>
            </div>
          </div>
    
      )
  }

  const mapStateToProps = (state) => {
    
      return{ 
              user: state.user,
              mail: state.mail,
              password: state.password,
              errors:state.errors,
              name: state.name,
              lastname:state.lastname,
      
      }
    }
    

  function mapDispatchToProps(dispatch){
      return {
        onUserChange: function(user){
          dispatch(setUser(user))
        },
        onEmailChange: function(mail){
          dispatch(setMail(mail))
        },
        onPasswordChange: function(password){
          dispatch(setPassword(password))
        },
        onFormErrors: function (errors){
          dispatch(setError (errors))
        },
        onNameChange: function(name){
          dispatch(setName (name))

        },
        onLastNameChange: function(lastname){
          dispatch(setLastName (lastname))

        }
      
      
      }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(UserCreate);
