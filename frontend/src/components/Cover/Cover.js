import React from 'react';
import '../Cover/Cover.css'
import image from '../../images/lacasa.webp' 
import { NavLink } from 'react-router-dom';

const Cover = (props) => {
    return (
        <>
            <div style={{paddingTop:'80px'}}></div>
            <div className="cover">
                <img src={image} />
                <div className="content">
                    <div className="spans">
                        <span>WEB-DL</span>
                        <span><i className="fas fa-star"></i>{props.element.rating}</span>
                    </div>
                    <h2>
                        <NavLink to={'/elements/'+props.element.title}>{props.element.title}</NavLink>
                    </h2>
                    <h2>{}</h2>
                    <p>{props.element.description}</p>
                </div>
            </div>
        </>
    );
}

export default Cover;
