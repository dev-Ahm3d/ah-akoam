import React from 'react';
import '../CustomCard/CustomCard.css'
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';


const CustomCard = (props) => {

    let classes = ''

    if(props.noBadge) classes = 'custom-card hw2' 

    let classh6 = classnames(
        {'h6Custom': props.noBadge} 
    )

    if(props.el && props.el.categories) return (
        <>
            <div className={classes} style={{backgroundImage:`url(${props.el.image})`}}>
                {
                    !props.noBadge ? 
                    <div className='custom-badge' >
                        <span>{props.el.rating}</span>
                        <i className="fas fa-star"></i>
                    </div>
                    :
                    null
                }
                
                <div className='custom-parent'>
                    <div className='custom-title'>
                        <i className="fas fa-play"></i>
                        <p>مشاهدة</p>
                    </div>
                </div>
                <div className='justLine'></div>
                <div className='last-title'>
                    <h6 className={classh6}>{props.el.title}</h6>

                    {
                        !props.noBadge ? 
                        <div className='custom-spans'>
                            {props.el.categories.map((category,index)=>{
                                return (<span key={index}>{category}</span>)
                            })}
                        </div>
                        :
                        null
                    }                   
                </div>
            </div>
        </>
    );
    return (<div></div>)
}

export default CustomCard;
