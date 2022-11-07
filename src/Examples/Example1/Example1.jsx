import React, {useState} from 'react';
import './Example1.css';


const getRandomCirclePosition = () => {
    const min = 30;
    const maxX= 170;
    const maxY = 70;
    return {
        cx: (Math.random() * (maxX - min)) + min,
        cy: (Math.random() * (maxY - min)) + min
    }
}

export const Example1 = () => {
    const [rectMoved, setRectMoved] = useState(false);
    const [circlePosition, setCirclePosition] = useState(getRandomCirclePosition())

    return (
        <div className="example example-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="min(80vh, 80vw)"
                height="min(40vh, 40vw)"
                viewBox="0 0 200 100"
            >
                <rect x="0" y="0" height="100" width="200" fill="white"/>
                <rect
                    onClick={() => setRectMoved(!rectMoved)}
                    x={rectMoved ? 120 : 20}
                    y="20"
                    height="60"
                    width="60"
                    fill="hotpink"
                />
                <circle
                    onClick={() => setCirclePosition(getRandomCirclePosition())}
                    cy={circlePosition.cy}
                    cx={circlePosition.cx}
                    r="30"
                    fill="dodgerblue"
                />
            </svg>
        </div>

    );
}