import React, {useState} from 'react';
import './Example2.css';

export const Example2 = () => {
    const [circleSize, setCircleSize] = useState(22);
    const [rectHeight, setRectHeight] = useState(1);
    const [rectWidth, setRectWidth] = useState(1);

    return (
        <div className="example example-2">
            <div className="sliders">
                <div className="slideContainer CircleSlideContainer">
                    Circle size <input
                    type="range"
                    min="5"
                    max="40"
                    value={circleSize}
                    onChange={e => setCircleSize(parseFloat(e.target.value))}
                    className="slider"
                    id="circleRange"
                />: {circleSize}
                </div>
                <div className="slideContainer RectHeightSlideContainer">
                    Rect width <input
                    type="range"
                    min="0.1"
                    max="2"
                    step="0.01"
                    value={rectWidth}
                    onChange={e => setRectWidth(parseFloat(e.target.value))}
                    className="slider"
                    id="rectHeightRange"
                /> : {rectWidth}
                </div>
                <div className="slideContainer RectWidthSlideContainer">
                    Rect height <input
                    type="range"
                    min="0.1"
                    max="2"
                    step="0.01"
                    value={rectHeight}
                    onChange={e => setRectHeight(parseFloat(e.target.value))}
                    className="slider"
                    id="rectWidthRange"
                />: {rectHeight}
                </div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="min(80vh, 80vw)"
                height="min(40vh, 40vw)"
                viewBox="0 0 200 100"
            >
                <rect x="0" y="0" height="100" width="200" fill="white"/>
                <rect
                    id="myRect2"
                    transform={`scale(${rectWidth} ${rectHeight})`}
                    style={{transformOrigin: '70px 15px'}}
                    x="70" y="15"
                    height="40"
                    width="40"
                />
                <circle
                    id="myCircle2"
                    cx="100"
                    cy="50"
                    r={circleSize}
                />
            </svg>
        </div>

    );
}