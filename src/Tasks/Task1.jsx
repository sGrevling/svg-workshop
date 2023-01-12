import React from 'react';
import {Link, useLocation} from "react-router-dom";

export const Task1 = () => {
    const location = useLocation();
    return (
        <div className="task">
            <h1>Make Bob move</h1>
            <p><flavour>Bob is out in the burning sunlight. Why? He sees Tom's house in the middle distance. Salvation.</flavour></p>
            <p>Edit the code in Workspace1 so that when you click Bob, he moves to Tom's house.</p>
            <br/>
            <h2>Basics:</h2>
            <ul>
                <li>To move a <code>rect</code>, manipulate its <code>x</code> and/or <code>y</code> attribute.</li>
                <li>To move a <code>circle</code>, manipulate its <code>cx</code> and/or <code>cy</code> attribute.</li>
                <li>Most (all?) elements can be moved by using <code>transform: translate</code>.
                </li>
                <li>If you don't want your thing to teleport, remember to animate the attribute you're manipulating.</li>
                <li>Transform animations must be applied to <code>transform</code>, not the attribute(s) being transformed e.g <code>translate</code>.</li>
            </ul>
            <h2>Tips:</h2>
            <ul>
                <li>Bob is a group (<code>{'<g>...</g>'}</code>), so you should use transform to move him.</li>
                <li>If you want Bob to move in a more complex way than a straight line, <a
                    target="_blank"
                    href="https://css-tricks.com/snippets/css/keyframe-animation-syntax"
                >@Keyframes</a> are your friend.</li>
                <li>A nice and simple way to use keyframes is to add the animation to a css class, and starting the animation by adding that class to the element (Bob).</li>
                <li>The keyword <code>forwards</code> makes an animation stop at the end step</li>
                <li>
                    <Link
                        to="/examples"
                        state={{...location.state, example: 0}}
                    >
                        Example 1
                    </Link> is relevant.
                </li>
                <li>As are <a
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#translate">docs</a></li>
            </ul>
        </div>
    );
}