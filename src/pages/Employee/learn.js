import React from "react";
import { Link, Outlet } from "react-router-dom";

function Employee(props) {
    return (
        <div>
            <h2>Employee</h2>
            <div>
                <Link className='me-3' to='birinchi-sahifa'>
                    Birinchi
                </Link>
                <Link className='me-3' to='ikkinchi-sahifa'>
                    Ikkinchi
                </Link>
            </div>

            <Outlet />
        </div>
    );
}

export default Employee;
