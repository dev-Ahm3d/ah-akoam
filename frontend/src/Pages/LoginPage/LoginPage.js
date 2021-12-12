import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import InpTxt from '../../components/InpTxt';
import './LoginPage.css'

const LoginPage = () => {
    document.title = 'ah-akoam | login'
    const history = useHistory()
    const [msg,setMsg] = useState('')
    const formikLogin = useFormik({
        onSubmit : (values,{resetForm})=>{
            axios.post('/api/auth/login',values)
            .then(resp =>{
                if(resp.data.success){
                    localStorage.setItem('token',resp.data.token)
                    resetForm()
                    setMsg(resp.data.msg)
                    setTimeout(()=>{
                        history.push('/admin')
                    },2000)
                }else{
                    setMsg(resp.data.msg)
                }
                setTimeout(()=>{
                    setMsg('')
                },3000)
            }).catch(err => console.log(err))
        },
        initialValues : {
            email:'' ,
            password : ''
        }
    })
    return (
        <>
            <form onSubmit={formikLogin.handleSubmit} className='login-container text-center'>
                <h4>تسجيل الدخول</h4> <br/>
                <input required onChange={formikLogin.handleChange} name='email' value={formikLogin.values.email} type="email" placeholder='البريد الالكترونى'  /> <br/> <br/>
                <input required onChange={formikLogin.handleChange} name='password' value={formikLogin.values.password} type="password" placeholder='كلمة المرور'  /> <br/> <br/>
                <button type='submit'>دخول</button>
            </form>

            {
                
                msg != '' ?
                <div className='d-block text-center' className='msg'>
                    {msg}
                </div>
                :
                null
                
            }
        </>
    );
}

export default LoginPage;
