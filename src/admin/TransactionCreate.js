import React, { useEffect, useState } from 'react';

import { setAllCategories } from '../store/payloads/actions';
import { connect } from 'react-redux';
import axios from 'axios';
import('./UserCreate.scss')



function TransactionCreate({
    onDetailChange,
    onTypeSet,
    onUserset,
    onGetCategories,
    onCatSet,
    onAmountChange,
    onFormErrors,
    details,
    type,
    user_id,
    cat_id,
    amount,
    errors,
    categories,
}) {


    const [tranFormErrors, setTranFormErrors] = useState(false);

    useEffect(() => {
        onGetCategories()
    }, [])


    async function newUser(event) {

        event.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3001/transaction/add`, {
                details,
                type,
                user_id,
                cat_id,
                amount,
            });

            // Success 🎉
            console.log(response);

        } catch (error) {
            console.log(error)
            setTranFormErrors(true)
           /*  if (error.response) {
                if (error.response.status === 404) {
                    onFormErrors(null)
                }
                else {
                    onFormErrors(error.response.data)
                }
            } else if (error.request) {
                console.log(error)
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log(error)
            } */
        }
    }

    return (
        <div className="container-fluid mx-auto col-sm-12">
            <div className="col-sm-5 mx-auto">
                <form>
                    <div className="form-group row col-sm-12 mx-auto text-center">
                        Select type of transaction
                    </div>
                    <div className="form-group row col-sm-12 mx-auto">
                        <div className="form-check col-sm-5 mx-auto">
                            <input className="form-check-input" type="radio" name="typeRadio" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Incomes
                            </label>
                        </div>
                        <div className="form-check col-sm-5 mx-auto">
                            <input className="form-check-input" type="radio" name="typeRadio" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Outcomes
                            </label>
                        </div>
                    </div>
                    <div className="form-group row col-sm-12 mx-auto">
                        <label htmlFor="inputAmount" className="col-sm-3 col-form-label">Amount</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control " name="inputAmount" id="inputAmount" placeholder="Insert the amount, separated by ','" onInput={(e) => onAmountChange(e.target.value)} />
                        </div>
                    </div>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Select your category</option>
                        { categories!==null && categories.map(category => {
                               return( 
                                      <option key={category.cat_id} value={category.cat_id}>
                                        {category.cat_name}
                                      </option> 
                                        )                  
                        })
                    }
                        
                    </select>
                    <div className="form-group row col-sm-12 mx-auto">
                        <label htmlFor="inputDetails" className="col-sm-3 col-form-label">Details</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control " name="inputDetails" id="inputDetails" placeholder="If you like describe some details about the operation" onInput={(e) => onDetailChange(e.target.value)} />
                        </div>
                    </div>

                    {tranFormErrors && (
                        console.log(errors)
                       /*  errors.errors.map(function (element) {
                            console.log(element);
                            return (
                                <div className="form-group row col-sm-12 mx-auto">
                                    <p><small className="text-center errors" >{element.msg}</small></p>

                                </div>
                            )
                        }) */
                    )}
                    <div className="form-group row mx-auto">
                        <div className="offset-sm-2 col-sm-10">
                            <button type="submit" className="btn btn-primary" onClick={event => newUser(event)}>Action</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {

    return {
        user: state.user,
        mail: state.mail,
        password: state.password,
        errors: state.errors,
        name: state.name,
        lastname: state.lastname,
        categories: state.categories,


    }
}


function mapDispatchToProps(dispatch) {
    return {
        onDetailChange: function (description) {
            console.log(description)
        },
        onAmountChange: function (float) {
            console.log(float)
        },
        onGetCategories: async function () {

            const response = await axios.get(`http://localhost:3001/categories/`)
            dispatch(setAllCategories(response.data.data.categories))
        }


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionCreate);
