import React from 'react';
import '../ToMainPage/ToMainPage.css'
import {Link , NavLink} from 'react-router-dom';


const ToMainPage = () => {
    return (
        <>
            <div className="to-main-page">
                <NavLink className='logo-container' to='/home'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    width="87px" height="80px">
                        <path fillRule="evenodd"
                        fill="rgb(255, 255, 255)" 
                        d="M68.479,46.753 L55.101,55.064 L59.686,64.395 L26.302,64.395 L43.500,33.248 L48.558,41.524 L61.642,34.285 L43.500,-0.001 L0.000,80.001 L87.000,80.001 L68.479,46.753 Z">
                        </path>
                    </svg>
                    <h4>
                        الصفحة الرئيسية
                    </h4>
                </NavLink>
            </div>
        </>
    );
}

export default ToMainPage;
