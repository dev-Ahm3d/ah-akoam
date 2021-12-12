import '../SubCover/SubCover.css'
import image from '../../images/lacasa.webp' 
import { NavLink } from 'react-router-dom';

const SubCover = (props) => {
    return (
        <NavLink to={`/elements/${props.element.title}`}>
            <div className="feature container" style={{backgroundImage:`url(${props.element.image})`}}>
                <div className="content row align-items-center flex-column flex-md-row text-center">
                    <div className="col">
                        <h3>{props.element.title}</h3>
                        <p className='m-auto mb-2 w-75'>
                            {props.element.description}
                        </p>
                        <button>شاهد الان</button>
                    </div>
                    <img className="col-auto me-auto order-first order-md-last  m-auto mb-3 mb-md-0 " src={props.element.image} alt=""/>
                </div>
            </div>
        </NavLink>
    );
}

export default SubCover;
