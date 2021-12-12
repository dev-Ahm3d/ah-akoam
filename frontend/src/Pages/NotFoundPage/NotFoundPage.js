import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import React from 'react';

const NotFoundPage = () => {
    document.title = 'ah-akoam | not-found'
    return (
        <div style={{marginTop:'80px' , textAlign:'center'}}>
            <h3>الصفحة غير موجودة</h3>
            <p>
                <a href="/">اضغط هنا للذهاب الى الصفحة الرئيسية</a>
            </p>
        </div>
    );
}

export default NotFoundPage;
