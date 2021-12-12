import React from 'react';
import './Search.css'
import { Form , Formik, useFormik} from 'formik' ;
import * as Yup from 'yup' ;
import '../../App.css'
import { useHistory } from 'react-router';

const Search = (props) => {

    let history = useHistory()
    let myForm = useFormik({
        onSubmit : (values,{resetForm}) => {
            history.push({
                pathname: '/search',
                search: `?query=${values.text}`,
            });
            resetForm()
        } , 
        initialValues : {
            text : ''
        }
    })


    return(
        <form onSubmit = {myForm.handleSubmit}>
            <div className="inp-search" >
                <div className="container">
                    <div className="row g-2 p-1 justify-content-center">
                        <div className="inp col-auto col-sm-8 col-md-10">
                            <input required onChange = {myForm.handleChange} name='text' className = 'my-field'  type='text'  placeholder="ابحث عن فيلم او مسلسل ..." />
                        </div>
                        <div className="search  text-start col-auto col-sm-4 col-md-2">
                            <button type='submit' className="btn">بحث</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Search;
