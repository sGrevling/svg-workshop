import React, {useState} from 'react';
import './Example4.css';

export const Example4 = () => {
    const [rectMoved, setRectMoved] = useState(false);
    const [circleStateIndex, setCircleStateIndex] = useState(0);

    const positions = [
        {cx: 32, cy: 32},
        {cx: 168, cy: 32},
        {cx: 168, cy: 68},
        {cx: 32, cy: 68}
    ];

    return (
        <div className="example example-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="min(80vh, 80vw)"
                height="min(40vh, 40vw)"
                viewBox="0 0 200 100"
            >
                <mask id="example3circleMask">
                    <rect x="0" y="0" height="100" width="200" fill="white"/>
                    <rect
                        x={rectMoved ? 120 : 20}
                        y="20"
                        height="60"
                        width="60"
                        fill="black"
                    />
                </mask>
                <mask id="example3rectMask">
                    <rect x="0" y="0" height="100" width="200" fill="white"/>
                    <circle
                        {...positions[circleStateIndex]}
                        r="30"
                        fill="black"
                    />
                </mask>
                <rect x="0" y="0" height="100" width="200" fill="white"/>
                <rect
                    mask="url(#example3rectMask)"
                    onClick={() => setRectMoved(!rectMoved)}
                    x={rectMoved ? 120 : 20}
                    y="20"
                    height="60"
                    width="60"
                    fill="hotpink"
                />
                <circle
                    mask="url(#example3circleMask)"
                    onClick={() => setCircleStateIndex(pv => pv === 3 ? 0 : pv + 1)}
                    {...positions[circleStateIndex]}
                    r="30"
                    fill="dodgerblue"
                />
            </svg>
        </div>

    );
}