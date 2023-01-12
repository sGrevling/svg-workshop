import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const Task3 = () => {
    const location = useLocation();
    return (
        <div className="task">
            <h1>*Knock knock*</h1>
            <p><flavour>"You are expected." says Tom, "Enter. Now."</flavour></p>
            <p>Using a mask and more movement, let Bob enter the house.</p>
            <br/>
            <h2>Basics:</h2>
            <ul>
                <li>A <code>mask</code> affects the opacity of an element.</li>
                <li>It contains shapes in shades of white, gray and black.</li>
                <li>Anything behind a white part of the <code>mask</code> is shown as normal.</li>
                <li>Anything behind a black or empty part of the <code>mask</code> is completely transparent.</li>
                <li>The <code>mask</code> hides by default, so it's often a good idea to start by filling it with a white "canvas", typically a <code>rect</code>.</li>
                <li>
                    <Link
                        to="/examples"
                        state={{...location.state, example: 2}}
                    >
                        Example 3
                    </Link>, and <Link
                    to="/examples"
                    state={{...location.state, example: 3}}
                >
                    example 4
                </Link> are relevant.
                </li>
                <li>As are the <a
                    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask"
                    target="_blank"
                >docs</a>.</li>
            </ul>
            <h2>Tips:</h2>
            <ul>
                <li>The wall section with the window in it is a shape with id <code>windowWall</code>. You can copy it and use it it your mask if you want.</li>
                <li>
                    You can switch directly from one set of keyframes to another if the start of the second (<code>{'from {...}'}</code> or <code>{'0% {...}'}</code>) is identical to the end of the first (<code>{'to {...}'}</code> or <code>{'100% {...}'}</code>)
                </li>
            </ul>
        </div>
    );
}