import { NavLink } from 'react-router-dom';
import '../MazeedButton/MazeedButton.css'

const MazeedButton = (props) => {
    return (
        <>
            <NavLink to={'/departments/'+props.link}>
                <button className='mazeed'>المزيد + </button>
            </NavLink>
        </>
    );
}

export default MazeedButton;
