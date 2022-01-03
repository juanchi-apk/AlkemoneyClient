
  import React, {useState}  from 'react';
  import {setCatName, setError} from '../store/payloads/actions';
  import { connect } from 'react-redux';
  import axios from 'axios';
  import ('./CategoryCreate.scss')

  function CategoryCreate({onCatNameChange, onFormErrors,catname,errors}){
   
    const [prodFormErrors, setprodFormErrors] = useState(false);

    async function newUser (event){
      
      event.preventDefault();

      try {
        const response = await axios.post(`http://localhost:3001/categories/add`, {
          catname
        });
    
        // Success 🎉
        console.log(response);
    } catch (error)  {
      console.log(error)
      setprodFormErrors(true);
      /*   if (error.response) {
           
            if (error.response.status===404){
                onFormErrors(null)
            }
            else{
            
                onFormErrors( error.response.data)

            }
 
         
        } else if (error.request) {
            console.log("oesto" , error)
            return error
        } else { 
       
       

        } */
        
      
    } 
    
   
  }
    return (
      
          
            <div className="container-fluid mx-auto col-sm-12">
            <div className="col-sm-5 mx-auto">
            <form>
              <div className="form-group row col-sm-12 mx-auto">
                <label htmlFor="inputCategory" className="col-sm-3 col-form-label">User</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control " name="inputCategory" id="inputCategory" placeholder="Insert New Category" onInput={(e) => onCatNameChange(e.target.value)}/>
                </div>
              </div>
 
              { prodFormErrors&&(
                console.log(errors)
                /* errors.errors.map( function (element) {
                    console.log(element);
                    return(
                      <div className="form-group row col-sm-12 mx-auto">
                      <p><small className ="text-center errors" >{element.msg}</small></p>

                      </div>
                    )
                }) */
              ) }
              <div className="form-group row mx-auto">
                <div className="offset-sm-2 col-sm-10">
                  <button type="submit" className="btn btn-primary" onClick={event=>newUser(event)}>Create!</button>
                </div>
              </div>
            </form>
            </div>
          </div>
    
      )
  }

  const mapStateToProps = (state) => {
    
      return{ 
                 catname: state.catname,
                 errors:state.errors,
            
      }
    }
    

  function mapDispatchToProps(dispatch){
      return {
        onCatNameChange: function(catname){
          dispatch(setCatName(catname))
        },
        onFormErrors: function(errors){
          dispatch(setError(errors))
        },
      }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreate);
