import React from 'react';
import './Workspace2.css';

export const Workspace2 = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="min(80vh, 80vw)"
            height="min(40vh, 40vw)"
            viewBox="0 0 200 100"
        >
            <rect x="0" y="0" height="100" width="200" fill="white"/>
            <rect
                id="myRect2"
                x="70"
                y="20"
                height="60"
                width="60"
            />
            <circle
                id="myCircle2"
                cx="100"
                cy="50"
                r="30"
            />
        </svg>
    );
}