import React from 'react';
import { useSelector } from 'react-redux';
import '../Labels/Labels.css'
import {deps} from '../../deps';
import { NavLink } from 'react-router-dom';
const Labels = () => {

    const subdeps = []
    deps.forEach(el =>{
        el.subdeps.forEach(ele =>{
            subdeps.push(ele)
        })
    })
    
    return (
        <>
            <div className="labels">            
                <div className="container">
                    <div>
                        {
                            deps.map((el,index)=>{
                                return (
                                    el.name != '' ?
                                    <NavLink key={index} to={'/departments/' + el.name_in_english}>{el.name}</NavLink>
                                    :
                                    null
                                )                           
                            })
                        }

                        {
                            subdeps.map((el,index)=>{
                                return (
                                    el.name != '' ?
                                    <NavLink key={index} to={'/departments/' + el.link}>{el.name}</NavLink>
                                    :
                                    null
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Labels;
