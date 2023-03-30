import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function Team() {
    return (
        <>
            <h2>Team Jamoa</h2>

            <Link className='me-3' to=''>
                Team
            </Link>
            <Link className='me-3' to='mirjalol'>
                Mirjalol
            </Link>
            <Link className='me-3' to='jamshidbek'>
                Jamshidbek
            </Link>
            <Link className='me-3' to='sabriddin'>
                Sabriddin
            </Link>

            <Routes>
                <Route path='' element={<h3>Team Jamoa</h3>} />
                <Route path='mirjalol' element={<h3>Team Mirjalol</h3>} />
                <Route path='jamshidbek' element={<h3>Team Jamshidbek</h3>} />
                <Route path='sabriddin' element={<h3>Team Sabriddin</h3>} />
            </Routes>
        </>
    );
}

export default Team;
