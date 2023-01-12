import React, {useState} from 'react';
import './index.css';
import {Workspace1} from "./Workspace1/Workspace1.jsx";
import {Workspace2} from "./Workspace2/Workspace2.jsx";
import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";

const workspaces = [
    Workspace1,
    Workspace2,
]

const titles = ["Bob's quest", "The void"]

const Workspaces = () => {
    const location = useLocation();
    const selectedIndex = location.state?.workspace ?? 0;
    const Workspace = workspaces[selectedIndex];
    return (
        <div className={'workspace'}>
            <div className="subNavWrapper">
                <div className="subNav workspaceSelect">
                    {workspaces.map((w, i) => (
                            <Link
                                className={classNames(
                                    'navLink',
                                    {active: selectedIndex === i}
                                )}
                                state={{...location.state, workspace: i}}
                            >
                                {titles[i]}
                            </Link>
                        )
                    )}
                </div>
            </div>
            <p>Make your changes in <code>src/Workspaces/Workspace{selectedIndex + 1}</code></p>
            <Workspace/>
        </div>
    );
}

export default Workspaces;