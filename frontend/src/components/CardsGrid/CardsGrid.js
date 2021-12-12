import { useSelector } from "react-redux";
import CustomCard from "../CustomCard/CustomCard";
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import '../CustomCard/CustomCard.css'
import '../CardsGrid/CardsGrid.css'




const CardsGrid = (props) => {

    let cards = props.elements.map((el,i)=>{
        return(
                <NavLink className = 'col'  key={i} to={'/elements/'+el.title}>
                    <div className='custom-card hw1' style={{backgroundImage:`url(${el.image})`}}>
                        <CustomCard el={el}   />
                    </div>
                </NavLink>
        )
    })
    
    return(
        <div className='container'>
            <div className='row g-2 row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5'>
                {cards}
            </div>
        </div>
    )
}

export default CardsGrid;
