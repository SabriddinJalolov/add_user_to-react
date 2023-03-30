import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Team from "../../components/Team";

function About(props) {
    return (
        <>
            <h2>About US</h2>
            <div>
                <Link className='me-3' to=''>
                    About biz haqimizda
                </Link>
                <Link className='me-3' to='team'>
                    Team
                </Link>
                <Link className='me-3' to='company'>
                    Company
                </Link>
                <Link className='me-3' to='service'>
                    Service
                </Link>
            </div>

            <Routes>
                <Route path='' element={<h3>About biz haqimizda</h3>} />
                <Route path='team/*' element={<Team />} />
                <Route
                    path='company'
                    element={<h3>Company Kompaniya haqida</h3>}
                />
                <Route
                    path='service'
                    element={<h3>Service Bizning xizmatlarimiz</h3>}
                />
            </Routes>
        </>
    );
}

export default About;
