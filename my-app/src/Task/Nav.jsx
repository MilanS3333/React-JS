import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Restaurant from './Restaurant';
import Images from './Images';
import Invitation from './Invitation';

function Nav(props) {
    const navLinks = { '/': 'Home', '/restaurantmenu': 'Restaurant', '/images': 'Images', '/invitation': 'Invitation' }
    const callnavLinks = Object.entries(navLinks).map((res, i) => {
        return <li className="nav-item" key={i}>
            <Link className="nav-link" to={res[0]}>{res[1]}</Link>
        </li>
    })
    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {callnavLinks}
                            </ul>
                        </div>
                    </div>
                </nav>
                <Routes>
                    {/* <Route path='/' /> */}
                    <Route path='/restaurantmenu' element={<Restaurant />} />
                    <Route path='/images' element={<Images />} />
                    <Route path='/invitation' element={<Invitation />} />
                </Routes>
            </Router>
        </>
    );
}


export default Nav;