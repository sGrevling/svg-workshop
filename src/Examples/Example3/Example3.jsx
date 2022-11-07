import React, {useState} from 'react';
import './Example3.css';

export const Example3 = () => {
    const [rectMoved, setRectMoved] = useState(false);
    const [circleStateIndex, setCircleStateIndex] = useState(0);

    const positions = [
        {cx: 32, cy: 32},
        {cx: 168, cy: 32},
        {cx: 168, cy: 68},
        {cx: 32, cy: 68}
    ];

    return (
        <div className="example example-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="min(80vh, 80vw)"
                height="min(40vh, 40vw)"
                viewBox="0 0 200 100"
            >
                <mask id="example2mask"> {/* This is where the magic happens */}
                    <rect x="0" y="0" height="100" width="200" fill="white"/>
                    <rect
                        x="30"
                        y="30"
                        height="40"
                        width="140"
                        fill="black"
                    />
                </mask>
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
                    mask="url(#example2mask)" // This is where the magic is applied
                    onClick={() => setCircleStateIndex(pv => pv === 3 ? 0 : pv + 1)}
                    {...positions[circleStateIndex]}
                    r="30"
                    fill="dodgerblue"
                />
            </svg>
        </div>

    );
}