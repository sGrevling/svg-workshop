import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const ErrorRoute = (props) => {
    const location = useLocation();

    return (
        <div className="errorRoute">
            <h1>FATAL ERROR!</h1>
            <h2>ABORT MISSION!</h2>
            <h3>RUN AWAY!</h3>
            <Link
                className="navLink"
                to="/tasks"
                state={location.state}
            >
                Run away.
            </Link>
        </div>
    );
}