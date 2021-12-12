import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CardsGrid from '../../components/CardsGrid/CardsGrid';
import Navbar from '../../components/Navbar/Navbar';

const SearchPage = (props) => {

    document.title = 'ah-akoam | search' 
    const elements = useSelector(state => state[0])
    const [params,setParams] = useState('') 
    const [searchedFor,setSearched] = useState([]) 
    const history = useHistory()

    useEffect(()=>{
        if(elements){
            if(props.location.search == '' || props.location.search =='?query=') history.push('/')
            else {
                let word = new URLSearchParams(props.location.search).get('query').trim()
                setParams(word)
                let x = []
                elements.map(el=>{
                    if(el.title.includes(params.toLowerCase() || params.toLocaleUpperCase())) x.push(el)
                })
                setSearched(x)
            }
        }
    },[elements,params])

    if(elements) return (
        <div> 
            <Navbar/>
            <div style={{marginTop:'80px',textAlign:'center'}}>
                {
                    searchedFor.length != 0
                    ? 
                    <CardsGrid elements={searchedFor}/>
                    :
                    (<h2 style={{margin:'100px auto'}}>لا توجد نتائج</h2>)
                }
            </div>
        </div>
    
    );
    return(1)
}

export default SearchPage;
