import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.css';

const Navigation = () => {
    
    return (
        <Fragment>
            <div>
                <Link to="/">
                    Home
                </Link>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;