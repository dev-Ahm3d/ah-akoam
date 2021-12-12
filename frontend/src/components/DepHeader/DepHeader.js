import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../DepHeader/DepHeader.css'
import {deps} from '../../deps'
import {Link , NavLink,useHistory} from 'react-router-dom';
import CustomCard from '../CustomCard/CustomCard';
import CardsGrid from '../CardsGrid/CardsGrid';


const DepHeader = (props) => {

    const elements = useSelector(state => state[0])
    const [showedEls,setShowedEls] = useState([])
    let header,subdeps
    let history = useHistory()

    useEffect(()=>{
        //console.log(elements)
        if(elements){
            if(props.params.dep && !props.params.subdep){
                let x = []
                elements.map((el,i)=>{
                    if(el.dep_name_english == props.params.dep){
                        x.push(el)
                        setShowedEls(x)  
                    }
                })
                if(x.length == 0) history.push({pathname:'/'})
            }
            else if(props.params.dep && props.params.subdep) {
                let x = []
                elements.map(el=>{
                    if(el.dep_name_english == props.params.dep && el.sub_dep_name_english == props.params.subdep ){
                        x.push(el)
                        setShowedEls(x)  
                    }
                })
                if(x.length == 0) history.push({pathname:'/'})
            }
            else history.push({pathname:'/'})
        }    
    },[elements])

    deps.map(el=>{
        if(el.name_in_english == props.params.dep){
            subdeps = el.subdeps
            header = el.name
        }
    })
    

    
    const filterOnQulaity = (e) =>{
        let newEls = props.params.subdep ? elements.filter(el => el.sub_dep_name_english == props.params.subdep) : elements 
        let y = newEls.filter(el => el.quality == e.target.outerText) 
        setShowedEls(y)    
    }

    return (
        <>
            <div className='parent-div'>
                <div className='container'>
                    <div className='row'>
                        <div className='dep-header flex-column flex-md-row gap-3 text-center '>
                            <div className='header-logo col w-50'>
                                <h3>
                                    {header}
                                </h3>
                            </div>
                            <div className="dropdown col w-100">
                                <a className="dropdown-toggle w-100" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>
                                        الاقسام
                                    </span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {
                                        subdeps ? 
                                        subdeps.map((el,i)=>{
                                            return (<NavLink key={i} className="dropdown-item" to={'/departments/'+el.link}>{el.name}</NavLink>)
                                        }) :
                                        null
                                    }
                                </div>
                            </div> 

                            <div className="dropdown col w-100" onChange={()=>console.log(11)}>
                                <a className="dropdown-toggle w-100" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>
                                        الجودة
                                    </span>
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <div onClick={(e) => filterOnQulaity(e)} className="dropdown-item">1080p</div>
                                    <div onClick={(e) => filterOnQulaity(e)} className="dropdown-item">720p</div>
                                    <div onClick={(e) => filterOnQulaity(e)} className="dropdown-item">480p</div>
                                </div>
                            </div>  

                        </div>
                    </div>
                </div>
            </div>
            <div style={{margin:'10px auto'}}></div>
            <div>

                {

                    showedEls.length != 0 ?
                    (<CardsGrid elements={showedEls}/>)
                    :
                    null
                }
            </div>
            <div style={{margin:'10px auto'}}></div>
        </>
        
    );
    
}

export default DepHeader;
