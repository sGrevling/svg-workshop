import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const Task4 = () => {
    const location = useLocation();
    return (
        <div className="task">
            <h1>Path morphing</h1>
            <h2>Todo: Morph a path between different shapes</h2>
            <br/>
            <h3>Tips:</h3>
            <ul>
                <li>The shape of a <code>path</code> can be animated by changing its <code>d</code> value.</li>
                <li>The <code>d</code> must retain the same structure; the number and type of vertices (corners) must
                    remain the same.
                </li>
                <li>A vertex can move and a curve can change;</li>
                <li>You cannot add vertices or change a straight line to a curve or vice versa.</li>
                <li>Making paths in code is possible for simple shapes, but for more complex shapes you may need some
                    visual tool like Figma or Inkscape.
                </li>
                <li>The easiest way to make matching shapes is to make one shape first, copying it, and manipulating it
                    into the shape you want to morph it into.
                </li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d">Beautiful documentation</a>
                </li>
            </ul>
            <br/>
            <p>These are two compatible <code>d</code> values; they are the same except that the order is slighlty
                changed:</p>
            {/*<ul>*/}
                <p><code>"M19.25 73.1L31.5 20.1L68.9 23.4L74.7 82.1L19.25 73.1Z"</code></p>
                <p><code>"M19.25 73.1L68.9 23.4L31.5 20.1L74.7 82.1L19.25 73.1Z"</code></p>
            {/*</ul>*/}
            <p>You can use these, or make your own shape.</p>
            {/*<Link*/}
            {/*    to="/examples"*/}
            {/*    state={{...location.state, example: 3}}*/}
            {/*>*/}
            {/*    Example 4*/}
            {/*</Link> is relevant.*/}
        </div>
    );
}