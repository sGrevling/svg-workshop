import React from 'react';
import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";
import './index.css';
import {Example1} from "./Example1/Example1.jsx";
import {Example2} from "./Example2/Example2.jsx";
import {Example3} from "./Example3/Example3.jsx";
import {Example4} from "./Example4/Example4.jsx";
import {Example5} from "./Example5/Example5.jsx";

const shapeExamples = [Example1, Example2, Example3, Example4];
const shapeDescriptions = ['Move on click', 'Change size', 'Simple mask', 'Mutual masking']

const pathExamples = [Example5];
const pathDescriptions = ['Morphing path']


const Tasks = () => {
    const location = useLocation();
    const selectedIndex = location.state?.example ?? 0;
    let Example = [...shapeExamples, ...pathExamples][selectedIndex];
    return (
        <div className="examples">
            <div className="subNavWrapper">
                <p>Bob's quest</p>
                <div className="subNav exampleSelect">
                    {shapeExamples.map((t, i) => (
                            <Link
                                className={classNames(
                                    'navLink',
                                    {active: selectedIndex === i}
                                )}
                                state={{...location.state, example: i}}
                            >
                                <span>Example {i + 1}</span>
                                <span>{shapeDescriptions[i]}</span>
                            </Link>
                        )
                    )}
                </div>
                <p>Paths</p>
                <div className="subNav exampleSelect">
                    {pathExamples.map((t, i) => {
                        const index = i + shapeExamples.length;
                        return (
                                <Link
                                    className={classNames(
                                        'navLink',
                                        {active: selectedIndex === index}
                                    )}
                                    state={{...location.state, example: index}}
                                >
                                    <span>Example {index + 1}</span>
                                    <span>{pathDescriptions[i]}</span>
                                </Link>
                            )
                        }
                    )}
                </div>
            </div>
            <h1>{shapeDescriptions[selectedIndex]}</h1>
            <p>You can find the code in <code>src/Examples/Example{selectedIndex + 1}</code></p>
            {Example ? <Example/> : <p>No example {selectedIndex + 1}</p>}
        </div>
    );
}

export default Tasks;