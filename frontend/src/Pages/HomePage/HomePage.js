import React from 'react';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import Cover from '../../components/Cover/Cover';
import CustomCard from '../../components/CustomCard/CustomCard';
import DepBorder from '../../components/DepBorder/DepBorder';
import DepHeader from '../../components/DepHeader/DepHeader';
import ElementCover from '../../components/ElementCover/ElementCover';
import ImagesSwiper from '../../components/ImagesSwiper/ImagesSwiper';
import Searchdeps from '../../components/Search/Search';
import MazeedButton from '../../components/MazeedButton/MazeedButton';
import SubCover from '../../components/SubCover/SubCover';

import '../HomePage/HomePage.css'
import Search from '../../components/Search/Search';
import Departments from '../../components/Departments/Departments';
import { useSelector } from 'react-redux';

const HomePage = () => {

    document.title = 'ah-akoam | home'
    const elements = useSelector(state => state[0])
    if(elements)return (
        <>
            <Cover element={elements[elements.findIndex(el => el.title.toLowerCase().includes('lacasa'))]}/>
            <Search/>
            <Departments/>
            <ImagesSwiper/>

            <DepBorder depName={'series'}/>
            <SubCover element= {elements.filter(el => el.dep_name_english == 'series')[0]} />
            <CardsGrid elements = {elements.filter(el => el.dep_name_english == 'series')} />
            <MazeedButton link='series'/>

            <DepBorder depName={'movies'}/>
            <SubCover element= {elements.filter(el => el.dep_name_english == 'movies')[0]}/>
            <CardsGrid elements = {elements.filter(el => el.dep_name_english == 'movies')} />
            <MazeedButton link='movies'/>
        </>
    );
    return(1)
}

export default HomePage;
