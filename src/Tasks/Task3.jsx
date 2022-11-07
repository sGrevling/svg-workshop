import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const Task3 = () => {
    const location = useLocation();
    return (
        <div className="task">
            <h1>The XOR mask task</h1>
            <h2>Todo: Hide the overlapping areas of both shapes</h2>
            <br/>
            <h3>Tips:</h3>
            <ul>
                <li>A mask affects the opacity of an element.</li>
                <li>The mask contains shapes in shades of white, gray and black.</li>
                <li>Anything behind a white part of the mask is shown as normal.</li>
                <li>Anything behind a black or empty part of the mask is completely transparent.</li>
                <li>The mask hides by default, so it's usually a good idea to start the mask with a white "canvas"</li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask">Ducks</a></li>
            </ul>
            <Link
                to="/examples"
                state={{...location.state, example: 2}}
            >
                Example 3
            </Link>, and <Link
            to="/examples"
            state={{...location.state, example: 3}}
        >
            Example 4
        </Link> are relevant.
        </div>
    );
}