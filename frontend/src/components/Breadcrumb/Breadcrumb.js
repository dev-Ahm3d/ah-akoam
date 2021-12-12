import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { deps } from '../../deps';
import '../Breadcrumb/Breadcrumb.css';

const Breadcrumb = (props) => {
    const [nav, setNav] = useState({})

    useEffect(()=>{
        for(let i=0;i<deps.length ;i++){
            for(let j=0;j<deps[i].subdeps.length;j++){
                if(props.element.sub_dep_name_arabic == deps[i].subdeps[j].name){
                    setNav(deps[i].subdeps[j])
                }
            }
        }
    },[props,nav])

    if(props)return (
        <>
            <div className='my-breadcrumb flex-column flex-md-row d-flex justify-content-start'>
                <NavLink to='/'>
                    <i className="fal fa-home"></i>
                    <span>الرئيسية</span>
                </NavLink>
                <NavLink to={'/departments/'+nav.link}>{nav.name}</NavLink>
                <NavLink to='#'>{props.element.title}</NavLink>
            </div>
        </>
    );
    return(1)
}

export default Breadcrumb;
