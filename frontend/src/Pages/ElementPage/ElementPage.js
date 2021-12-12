import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ElementCover from '../../components/ElementCover/ElementCover';
import ElementDesc from '../../components/ElementDesc/ElementDesc';


const ElementPage = (props) => {

    const elements = useSelector(state => state[0])
    const [element,setElement] = useState({})



    useEffect(()=>{

        if(elements){
            for(let i=0 ; i<elements.length ; i++){
                if(props.location.pathname.replace('/elements/','').trim() == elements[i].title.trim()){
                    setElement(elements[i])
                    document.title = 'ah-akoam | ' + elements[i].title
                    break
                }
            }
        }
    },[elements,element])

    return (
        <>
            <div className='mt-2'></div>
            <div className='container'>
                <div className='row'>
                    <Breadcrumb element={element}/>
                </div>
            </div>
            <div className='mb-2'></div>
            <ElementCover element={element}/> 
            <div className='mb-3'></div>
            <div className='container'>
                <div className='row'>
                    <h5> قصة المسلسل </h5>
                    <p className='p-4  pe-2'>
                        {element.description}
                    </p>
                </div>
                <div>
                    <iframe width="100%" height="320" allowFullScreen
                        src={element.videoLink}>
                    </iframe>
                    <div style={{marginBottom:'20px'}}></div>
                </div>
            </div>
            
        </>
    )
}

export default ElementPage;
