import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DepHeader from '../../components/DepHeader/DepHeader';
import Navbar from '../../components/Navbar/Navbar';

const DepPage = (props) => {
    const elements = useSelector(state => state[0])
    document.title = 'ah-akoam | ' + (props.match.params.subdep || props.match.params.dep)
    if(elements) return (
        <>
            <Navbar/>
            <DepHeader elements={elements} params={props.match.params}/>
        </>
    );
    return(1)
}

export default DepPage;
