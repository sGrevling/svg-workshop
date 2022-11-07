import React from "react";
import './App.css'
import Workspaces from './Workspaces';
import Tasks from './Tasks';
import {Link, Outlet, useLocation} from "react-router-dom";
import classNames from "classnames";

const Root = () => {
    const location = useLocation();
    return (
        <>
            <div className="pageSelect">
                {['Tasks', 'Workspaces', 'Examples'].map((w) => (
                    <Link
                        className={classNames(
                            'navLink',
                            {active: location.pathname === `/${w.toLowerCase()}`}
                        )}
                        state={location.state}
                        to={`/${w.toLowerCase()}`}
                    >
                        {w}
                    </Link>
                ))}
            </div>
            <Outlet/>
        </>
    );
}


export default Root
