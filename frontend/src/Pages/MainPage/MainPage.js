import React from 'react';
import { useSelector } from 'react-redux';
import Departments from '../../components/Departments/Departments';
import Labels from '../../components/Labels/Labels';
import Navbar from '../../components/Navbar/Navbar';
import Search from '../../components/Search/Search';
import Searchdeps from '../../components/Search/Search';
import ToMainPage from '../../components/ToMainPage/ToMainPage';
import '../MainPage/MainPage.css'

const MainPage = () => {

    document.title = 'ah-akoam'    
    return (
        <div className='main'> 
            <Navbar/>
            <ToMainPage/>
            <Search/>
            <Departments/>
            <Labels/>
        </div>
    );
}

export default MainPage;
