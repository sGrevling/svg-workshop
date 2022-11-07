import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const Task2 = () => {
    const location = useLocation();
    return (
        <div className="task">
            <h1>Shrink ray!</h1>
            <h2>Todo: Make something bigger and smaller</h2>
            <br/>
            <h3>Tips:</h3>
            <ul>
                <li>A <code>rect</code> has <code>height</code> and <code>width</code>.</li>
                <li>A <code>circle</code> has <code>r</code>(adius).</li>
                <li>Anything can be modified with <code>transform: scale(x)</code>, where x is a size multiplier.</li>
                <li>You define some size-states and switch between those, or make a slider to set size manually.</li>
            </ul>
            <Link
                to="/examples"
                state={{...location.state, example: 1}}
            >
                Example 2
            </Link> is relevant.
        </div>
    );
}