import React from 'react';
import { NavLink } from 'react-router-dom';
import { deps } from '../../deps';
import '../DepBorder/DepBorder.css'

const DepBorder = (props) => {
    
    let myElement = deps.find(el => el.name_in_english == props.depName)
    return (
        <div className='container my-dep'>
            <div>
                <h5>{myElement.name}</h5>
                <div className="dropdown show">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        الأقسام
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    {
                        myElement.subdeps.map((el,i)=>{
                            return(
                                <NavLink key={i} className="dropdown-item" to={'/departments/'+el.link}>{el.name}</NavLink>
                            )
                        })
                    }
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default DepBorder;
