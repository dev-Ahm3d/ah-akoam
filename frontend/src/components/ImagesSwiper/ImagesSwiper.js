// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../images/lacasa.webp'
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import '../CustomCard/CustomCard.css'




import 'swiper/swiper.min.css'
import 'swiper/components/effect-coverflow/effect-coverflow.min.css'
import 'swiper/components/pagination/pagination.min.css' 
import 'swiper/components/navigation/navigation.min.css'

import '../ImagesSwiper/ImagesSwiper.css'

import SwiperCore , {EffectCoverflow , Pagination , Navigation, Scrollbar} from 'swiper/core'
import CustomCard from '../CustomCard/CustomCard';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


SwiperCore.use([EffectCoverflow , Pagination , Navigation])


const ImagesSwiper = () => {

    let elements = useSelector(state => state[0])
    let targetWidthOnCurrentScreen 
    const onEnter = e =>{
        if(!targetWidthOnCurrentScreen) targetWidthOnCurrentScreen = e.currentTarget.clientWidth
        e.currentTarget.style.width = targetWidthOnCurrentScreen + 50 +'px'       
    }
    const onLeave = e => e.currentTarget.style.width = targetWidthOnCurrentScreen +'px'    
    if(elements) return(
        <div className='my-container'>
            <Swiper
        // install Swiper modules
                modules={[Navigation, Pagination]}
                spaceBetween={5}
                slidesPerView={window.innerWidth < 768 ? 1 : 'auto'}
                navigation = {true}
                loop = {true}
                //effect= {'coverflow'} 
                //centeredSlides = {true}
                //pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                //onSwiper={(swiper) => console.log(swiper)}
                //onSlideChange={() => console.log('slide change')}
                //onTouchMove = {(s)=>console.log(11)}
                
            >
                    {
                        elements.map((element,i)=>{
                            if(!element.title.toLowerCase().includes('lacasa')){
                                return(
                                    <SwiperSlide onMouseEnter={onEnter} onMouseLeave={onLeave} key={i} className='swiper-slide'>
                                        <NavLink key={i} to={'/elements/'+element.title}>
                                            <CustomCard el={element} noBadge={true} />
                                        </NavLink>
                                    </SwiperSlide>
                                )
                            } 
                            return(1)
                        })
                    }
            </Swiper>
            <div style={{marginBottom:'20px'}}></div>
        </div>
    )
    return (1)
}

export default ImagesSwiper;
