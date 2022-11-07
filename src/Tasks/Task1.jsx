import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const Task1 = () => {
    const location = useLocation();
    return (
        <div className="task">
            <h1>The turtle moves.</h1>
            <h2>Todo: Make something move when you click it</h2>
            <br/>
            <h3>Tips:</h3>
            <ul>
                <li>To move a <code>rect</code>, manipulate its <code>x</code> and/or <code>y</code> attribute.</li>
                <li>To move a <code>circle</code>, manipulate its <code>cx</code> and/or <code>cy</code> attribute.</li>
                <li>Most (all?) elements can be moved by using <code>transform: translate</code>. Have some <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#translate">docs</a>.
                </li>
                <li>If you don't want your thing to teleport, remember to animate the attribute you're manipulating.</li>
                <li>Transform animations must be applied to <code>transform</code>, not the attribute(s) being transformed e.g <code>translate</code>.</li>
            </ul>
            <Link
                to="/examples"
                state={{...location.state, example: 0}}
            >
                Example 1
            </Link> is relevant.
        </div>
    );
}