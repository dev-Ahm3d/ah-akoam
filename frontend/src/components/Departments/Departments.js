import { NavLink } from 'react-router-dom';
import '../Departments/Departments.css'
const Departments = () => {
    return (
        <div>
            <div className="deps custom-col">
                <div className="container">
                    <div className="row justify-content-center g-2 row-cols-2 row-cols-md-6 row-cols-lg-5">
                        <NavLink className="col" to={'/departments/movies'}>
                            <div className='dep'>
                                <i className="fas fa-video"></i>
                                <span>افلام</span>
                            </div>
                        </NavLink>
                        <NavLink className="col" to={'/departments/series'}>
                            <div className='dep'>
                                <i className="fas fa-tv"></i>
                                <span>مسلسلات</span>
                            </div>
                        </NavLink>
                        <NavLink className="col" to={'/departments/tv'}>
                            <div className='dep'>
                                <i className="fas fa-tv-retro"></i>
                                <span>تلفزيون</span>
                            </div>
                        </NavLink>
                        <NavLink className="col" to={'/departments/ramadan'}>
                            <div className='dep'>
                                <i className="fas fa-moon"></i>
                                <span>رمضان2021</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Departments;
