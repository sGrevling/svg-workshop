import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const Task2 = () => {
    const location = useLocation();
    return (
        <div className="task">
            <h1>Get some perspective</h1>
            <p><flavour>When bob gets to the house he is humongous. He will never be able to get in like this.</flavour></p>
            <p>Add some perspective by shrinking him gradually as he moves from the foreground to the house.</p>
            <br/>
            <h2>Basics:</h2>
            <ul>
                <li>A <code>rect</code> has <code>height</code> and <code>width</code>.</li>
                <li>A <code>circle</code> has <code>r</code>(adius).</li>
                <li>Anything can be modified with <code>transform: scale(x, y)</code>, where x and y are size multipliers.</li>
                <li>If you supply only one argument, <code>scale(n)</code>, n is used as both height and width multipliers. </li>
            </ul>
            <h2>Tips:</h2>
            <ul>
                <li>
                    If you have used keyframes, the same frame (step) can transform both movement (translate) and size (scale).
                </li>
                <li>
                    For this task you may need to master <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin">transform-origin</a>.
                    The initial value (50% 50%) is calculated based on the entire svg, so you must set some values based on Bob's dimensions which are ~50px * ~150px.
                </li>
                <li>
                    <Link
                        to="/examples"
                        state={{...location.state, example: 1}}
                    >
                        Example 2
                    </Link> is relevant.
                </li>
            </ul>

        </div>
    );
}