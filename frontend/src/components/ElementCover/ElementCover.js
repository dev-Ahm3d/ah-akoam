import React from 'react';
import '../ElementCover/ElementCover.css'
import coverImg from '../../images/lacasa.webp'
const ElementCover = (props) => {
    return (
        <>
            <div className='element-cover' style={{backgroundImage:`url(${props.element.image})`}}>
                <div className='container-md h-100' >
                    <div className='row d-flex flex-column flex-md-row h-100'   >
                        <div className='col-12 col-md-3 d-md-block my-image '  >
                            <img className='mw-100 pe-md-2 h-100'   src={props.element.image}  />
                        </div>
                        <div className='col content'>
                            <h3>{props.element.title}</h3>
                            <p>الجودة : {props.element.quality} </p>
                            <p>السنة : {props.element.year} </p>
                            <div className='links d-flex justify-content-start'>
                                {
                                    props.element.categories ? 
                                    props.element.categories.map((el,i)=>{
                                        return(<span key={i}>{el}</span>)
                                    }):
                                    null
                                }
                            </div>
                        </div>
                        <div className='col-3 buttons d-flex flex-column pt-2 pb-2 align-items-start'>
                            <button className='d-block mb-2'>
                                <a href=""  onClick={e => {
                                        e.preventDefault()
                                        window.scrollTo(0,100000)
                                    }}
                                        className='d-flex justify-content-start p-2'>
                                    <span>مشاهدة</span>
                                    <i className="fab fa-youtube me-auto p-2"></i>
                                </a>
                            </button>
                            <button className='d-block mb-2'>
                                <a href="" className='d-flex justify-content-start p-2'>
                                    <span>تحميل</span>
                                    <i className="fas fa-arrow-circle-down me-auto p-2"></i>
                                </a>
                            </button>
                            <button className='d-block mb-2'>
                                <a href="" className='d-flex justify-content-start p-2'>
                                    <span>شارك</span>
                                    <i className="fas fa-share-alt me-auto p-2"></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ElementCover;
