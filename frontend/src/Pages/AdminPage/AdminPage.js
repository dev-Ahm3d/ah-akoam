import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './AdminPage.css'
import InpTxt from "../../components/InpTxt";
import { useFormik } from "formik";
import axios from 'axios'
import { add_action,remove_action } from "../../redux/actions";
import { useHistory } from "react-router";



const AdminPage = () => {
    
    document.title = 'ah-akoam | admin '
    const arrTxt = [
        {ar:'العنوان' , en:'title'},
        {ar:'الوصف' , en:'description'},
        {ar:'الجودة' , en:'quality'},
        {ar:'رابط الفيديو' , en:'videoLink'},
        {ar:'فئات العنصر' , en:'categories'},
    ]

    const arrNum = [
        {ar:'سنة الاصدار' , en:'year'},
        {ar:'التقييم' , en:'rating'},
    ]

    const arrSelect = [
        {
            ar : 'القسم الرئيسي' ,
            en : 'arDep' ,
            childrens : [
                'افلام' ,
                'مسلسلات'
            ]
        },
        {
            ar : 'القسم الرئيسي بالانجليزية' ,
            en : 'enDep' ,
            childrens : [
                'movies' ,
                'series'
            ]
        },
        {
            ar : 'القسم الفرعى' ,
            en : 'ar_subdep',
            childrens : [
                'أفلام عربى' ,
                'افلام اجنبى' ,
                'أفلام هندى' ,
                'مسلسلات عربى' ,
                'مسلسلات أجنبى' ,
                'ملسلسلات هندى' 
            ]
        },
        {
            ar : 'القسم الفرعى بالانجليزية' ,
            en : 'en_subdep',
            childrens : [
                'arabic-movies' ,
                'english-movies' ,
                'indian-movies' ,
                'arabic-series' ,
                'english-series' ,
                'indian-series' ,
            ]
        },
    ]

    
    const onChangeImg = e => {
        setImg(e.target.files[0])
    }

    const formikAdd = useFormik({
        onSubmit :  (values,{resetForm})=>{
            let formData = new FormData()
            if(values.categories.includes(',')) values.categories = values.categories.split(',')
            else values.categories = [values.categories]
            formData.append('data',JSON.stringify(values))
            formData.append('img', img)
            axios.post('/api/elements/add',formData).then(res =>{
                let data = res.data.data
                if(data.created) {
                    dispatch(add_action(data.element))
                    elements2.push(data.element)
                    setElements2(elements2)
                    alert(data.msg)
                }
                resetForm()
                inputFile.current.value = ''
            })
            
        },

        initialValues : {
            el_id : '' ,
            title:'',
            quality : '' ,
            description : '' ,
            rating : '' ,
            videoLink : '' ,
            categories : '' ,
            year : '' ,
            arDep: "افلام" ,
            ar_subdep: "افلام عربى" ,
            enDep: "movies" ,
            en_subdep: "arabic-movies"
        }
    })

    

    const formikUpdate = useFormik({
        onSubmit : (values,{resetForm})=>{
            values.id = element.el_id
            if(values.categories.includes(',')) values.categories = values.categories.split(',')
            else if(values.categories != '') values.categories = [values.categories]
            axios.patch('/api/elements/update',values).then(res=>{
                let ele = res.data.data
                ele.categories = JSON.parse(ele.categories)
                let elIndex = elements.findIndex(el => el.el_id == ele.el_id)
                let newElements = elements
                newElements[elIndex] = ele
                setElements2(newElements)
                alert(res.data.msg)
            })
        } ,
        initialValues : {
            title:'',
            quality : '' ,
            description : '' ,
            rating : '' ,
            videoLink : '' ,
            categories : '' ,
            year : ''
        }
    })

    let deleteId 

    const deleteF = e =>{
        e.preventDefault()
        axios.delete('/api/elements/delete',{
            headers :{
                id : deleteId
            }
        }).then(res=>{
            if(res.data.deleted){
            let newElements = [...elements]
            newElements = newElements.filter(el => el.el_id != deleteId)
            dispatch(remove_action(deleteId))
            setElements2(newElements)
            alert(res.data.msg)
            }
        })
        
    }

    const formikPassword = useFormik({
        onSubmit : (values,{resetForm})=>{
            axios.patch('/api/auth/resetPass',values)
            .then(resp =>{
                if(resp.data.changed){
                    localStorage.clear()
                    alert(resp.data.msg)
                    history.push('/login')
                }
                else{
                    alert(resp.data.msg)
                    resetForm()
                }
            })
        } ,
        initialValues:{
            oldPass: '', 
            newPass : ''
        }
    })


    const onChangeForUpdate = id =>{
        axios.get('/api')
        .then(data =>{
            let ele = data.data.data.find(el => el.el_id == id) 
            setElement(ele)
            setShow('d-block')
            updatedElementId = id
        })    
    }

    
    
    const filter =  keyword =>{
        if(keyword.includes('add')) setFields('add')
        else if(keyword.includes('edit')) setFields('edit')
        else if(keyword.includes('delete')) setFields('delete')
        else setFields('password')
    }


    const elements = useSelector(state => state[0])
    const [elements2,setElements2] = useState([])
    const [element,setElement] = useState({})
    const [showClass,setShow] = useState('d-none')
    const [fieldsClass,setFields] = useState('add')
    const[img,setImg] = useState('')
    const inputFile = useRef()
    let  updatedElementId
    const dispatch = useDispatch()
    const history = useHistory()
    
    useEffect(()=>{
        if(elements) setElements2([...elements])
    },[elements])

    
    

    if(elements) return (
        <>
            <div className='my-sidebar'>
                <div className='settings-container'>
                    <h4 className='settings-header'>الاعدادات</h4>
                    <ul className='settings'>
                        <li onClick={()=>filter('add-element')}>
                            <span><i className="fas fa-layer-plus"></i></span>
                            <span>اضافة عنصر</span>
                        </li>
                        <li onClick={()=>filter('edit-element')}>
                            <span><i className="fas fa-edit"></i></span>
                            <span>تعديل عنصر</span>
                        </li>
                        <li onClick={()=>filter('delete-element')}>
                            <span><i className="fas fa-trash-alt"></i></span>
                            <span>حذف عنصر</span>
                        </li>
                        <li onClick={()=>filter(' ')}>
                            <span><i className="fas fa-unlock"></i></span>
                            <span>كلمة السر</span>
                        </li>
                        <li onClick={()=>{
                            localStorage.clear()
                            history.push('/home')
                        }}>
                            <span><i className="fas fa-sign-out-alt"></i></span>
                            <span>تسجيل الخروج</span>
                        </li>
                    </ul>
                </div>
            </div>    
            


                <div className='field-container'>

                    <form onSubmit={formikAdd.handleSubmit} className={`field add-element ${fieldsClass == 'add' ? 'd-block':'d-none'}`}>
                        <div>
                            <h4>اضف عنصر</h4>
                            <InpTxt arr = {arrTxt} type='text' val={formikAdd.values} handleChange = {formikAdd.handleChange} />
                            <InpTxt arr = {arrNum} type='number' val={formikAdd.values} handleChange = {formikAdd.handleChange}  />
                            <InpTxt arr = {arrSelect} type='select' handleChange = {formikAdd.handleChange}  />
                            <input ref={inputFile} onChange = {e => onChangeImg(e)} name='img'  type="file" />
                            <button className='add-btn' type="submit">اضافة</button>
                        </div>
                    </form>
                    

                    <div className={`field edit-element ${fieldsClass == 'edit' ? 'd-block':'d-none'}`}>
                        <h4>تعديل عنصر</h4>
                        <div className='select-inp'>
                            <label>اختر العنصر</label>
                            <select className='child-select' onChange={(e) => onChangeForUpdate(e.target.value)}>
                                {elements2.map((el,i)=> (<option  key={i} value={el.el_id}>{el.title}</option>))}
                            </select>
                        </div>

                        <form onSubmit={formikUpdate.handleSubmit} className={showClass}>
                        {
                                arrTxt.map((el,i)=>{
                                    return(
                                        <div key={i} className='txt-inp'>
                                            <label htmlFor={el.en}>{el.ar}</label>
                                            <input type='text' onChange={(e)=>{
                                                formikUpdate.handleChange(e)
                                                element[el.en] = e.target.value
                                                setElement(element)
                                            }} value={element[el.en] || ''} name={el.en} className = 'child-input'  />        
                                        </div>
                                    )
                                })
                            }
                            {
                                arrNum.map((el,i)=>{
                                    return(
                                        <div key={i} className='txt-inp'>
                                            <label htmlFor={el.en}>{el.ar}</label>
                                            <input onChange={(e)=>{
                                                formikUpdate.handleChange(e)
                                                element[el.en] = e.target.value
                                                setElement(element)
                                            }} value={element[el.en] || ''} name={el.en} className = 'child-input' type='number' />        
                                        </div>
                                    )
                                })
                            }  
                            <button className='update-btn' type="submit">تحديث</button>

                        </form>
                    </div>



                    <div className={`field delete-element ${fieldsClass == 'delete' ? 'd-block':'d-none'}`}>
                        <h4>حذف عنصر</h4>
                        <form onSubmit={deleteF} className='select-inp'>
                            <label>اختر العنصر</label>
                            
                            <select onChange={e => deleteId = e.target.value} name='select-deleted' className='child-select'>
                                {elements2.map((el,i)=>(<option  key={i} value={el.el_id}>{el.title}</option>))}
                            </select>
                            <button className='delete-btn mt-3 d-block' type="submit">حذف</button>
                        </form>
                    </div>


                    <div  className={`field password-element ${fieldsClass == 'password' ? 'd-block':'d-none'}`}>
                        <form onSubmit={formikPassword.handleSubmit} className='txt-inp'>
                            <h4>تغيير كلمة السر</h4>
                            <input onChange={formikPassword.handleChange}  name='oldPass' className='child-input' value={formikPassword.values.oldPass || ''} type="password" placeholder='كلمة المرور القديمة' /> <br/> <br/>
                            <input onChange={formikPassword.handleChange} name='newPass' className='child-input' value={formikPassword.values.newPass || ''} type="password" placeholder='كلمة المرور الجديدة' /> <br/> <br/>
                            <button style={{marginRight:'20px'}} className='add-btn' type="submit">حفظ</button>
                        </form>
                    </div>
                
            </div>                    
        </>
    );
    return(1)
}

export default AdminPage;
