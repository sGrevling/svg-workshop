import React, {useState} from 'react';
import './Example2.css';

export const Example2 = () => {
    const [circleSize, setCircleSize] = useState(22);
    const [rectHeight, setRectHeight] = useState(60);
    const [rectWidth, setRectWidth] = useState(60);

    return (
        <div className="example example-2">
            <div className="sliders">
                <div className="slideContainer CircleSlideContainer">
                    Circle size : <input
                    type="range"
                    min="5"
                    max="40"
                    value={circleSize}
                    onChange={e => setCircleSize(parseFloat(e.target.value))}
                    className="slider"
                    id="circleRange"
                />
                </div>
                <div className="slideContainer RectHeightSlideContainer">
                    Rect width : <input
                    type="range"
                    min="20"
                    max="120"
                    value={rectWidth}
                    onChange={e => setRectWidth(parseFloat(e.target.value))}
                    className="slider"
                    id="rectRange"
                />
                </div>
                <div className="slideContainer RectWidthSlideContainer">
                    Rect height: <input
                    type="range"
                    min="20"
                    max="70"
                    value={rectHeight}
                    onChange={e => setRectHeight(parseFloat(e.target.value))}
                    className="slider"
                    id="rectRange"
                />
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
                    id="myRect1"
                    x="70"
                    y="20"
                    height={rectHeight}
                    width={rectWidth}
                />
                <circle
                    id="myCircle1"
                    cx="100"
                    cy="50"
                    r={circleSize}
                />
            </svg>
        </div>

    );
}