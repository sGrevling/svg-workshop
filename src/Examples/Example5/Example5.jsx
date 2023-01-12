import React, {useState} from 'react';
import './Example5.css';


export const Example5 = () => {
    const [checked, setChecked] = useState(false);
    const [smile, setSmile] = useState(true);
    const [cross, setCross] = useState(false);


    // simple coordinates can make a path of straight lines.
    const coords = (
        cross ?
            [[30, 10], [70, 10], [10, 70], [10, 30], [70, 90], [30, 90], [90, 30], [90, 70]] :
            // [ [90, 70], [90, 30], [70, 10], [30, 10], [10, 30], [10, 70], [30, 90], [70, 90]]
            [[90, 30], [70, 10], [30, 10], [10, 30], [10, 70], [30, 90], [70, 90], [90, 70]]
            // [[70, 10], [30, 10], [10, 30], [10, 70], [30, 90], [70, 90], [90, 70], [90, 30]]
    )
    const dString = `M${ // M moves (the "pen") to a point without drawing.
        coords.map(c =>
            c.join(' ') // x and y are separated by a space 
        ).join('L') // L draws a line between two points
    }Z`; // Z closes the path

    return (
        <div className="example example-5">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="min(90vh, 90vw)"
                height="min(30vh, 30vw)"
                viewBox="0 0 300 100"
            >
                {/* Geometric shape thing */}
                <g onClick={() => setCross(!cross)}>
                    <rect x="0" y="0" height="100" width="100" fill="white"/>
                    <path
                        style={{
                            transition: 'd 800ms'
                        }}
                        d={dString}
                    />
                </g>
                {/* Smiley face skull guy */}
                <g onClick={() => setSmile(!smile)} transform="translate(100)">
                    <rect width="100" height="100" fill="white"/>
                    <path style={{transition: 'd 800ms'}}
                          d={smile ? "M13.0096 32.4566L12.3473 47.9121L14.5552 59.8349L18.3087 68.4459L26.9196 77.94L33.3226 82.7974L39.5048 85.6677L45.592 88.538L50.9861 88.3172L56.7293 88.538L63.7921 86.5509L70.4159 82.5766L74.8317 77.94L80.3515 69.5498L83.8842 60.7181L86.313 47.9121L83.6634 32.2358L76.5981 16.3387L58.7138 7.50697L40.8296 9.4941L22.0621 17.6635L13.0096 32.4566Z" : "M15.4555 46.6091L22.9896 61.0221L16.7658 70.5217L22.0069 75.1077L31.1789 72.8147L35.1097 87.8829L41.9887 83.2969L45.592 88.538L50.1779 82.6418L56.7293 88.538L60.6602 83.2969L65.2462 87.5553L69.8322 68.8838L76.3836 72.8147L84.2452 68.8838L79.6593 58.074L87.1934 43.9885L84.5728 24.0067L69.5046 8.61093L34.4546 10.9039L16.4382 24.6619L15.4555 46.6091Z"}/>
                    <path style={{transition: 'd 800ms'}}
                          d={smile ? "M45.478 73.6417L37.0761 62.926L51.3742 67.7455L69.0911 61.6013L55.6326 74.2969L45.478 73.6417Z" : "M45.9195 67.9011L49.1952 58.4016L51.8158 62.0049L54.7639 57.7464L56.0742 68.5563L45.9195 67.9011Z"}
                          fill="white"/>
                    <path style={{transition: 'd 800ms'}}
                          d={smile ? "M32.6602 39.9636L23.6077 49.0161L28.4651 35.1061L33.985 32.6774L43.9207 46.1458L32.6602 39.9636Z" : "M33.4719 60.367L27.5756 51.8502L28.5583 44.3161L40.6784 41.0404L45.9195 51.8502L33.4719 60.367Z"}
                          fill="white"/>
                    <path style={{transition: 'd 800ms'}}
                          d={smile ? "M69.9743 37.5348L58.493 44.821L67.3247 31.3526L73.2862 33.119L78.1436 45.2626L69.9743 37.5348Z" : "M68.1943 59.0567L58.0396 52.1778L59.3499 41.3679L72.7803 41.0404L77.0387 49.2296L68.1943 59.0567Z"}
                          fill="white"/>
                </g>
                {/* Checkbox */}
                <g onClick={() => setChecked(!checked)} transform="translate(200)">
                    <rect x="0" y="0" height="100" width="100" fill="white"/>
                    <path
                        transform='scale(.75)'
                        style={{transition: 'd 800ms'}}
                        d={
                            checked ?
                                "m 11.120115,58.317116 7.120334,6.317823 6.026283,5.413084 26.863979,23.785172 0.08968,-0.0065 73.610599,-75.912909 0.19168,-0.208115 0.23209,-0.218791 0.25933,-0.293027 1.0137,-1.034147 -0.0487,17.386797 -74.521188,89.035537 -0.04318,-0.001 -40.699193,-50.569883 z" :
                                "m 10.924959,17.515864 7.384214,-8.0947911 2.070114,7.0942151 0.0095,90.248492 89.714263,0.33483 0.54025,-90.469474 -90.263871,-0.113848 -2.070115,-7.0942151 96.390046,-0.033179 8.52678,11.0587641 -0.17363,92.233642 -9.78754,10.89971 -92.027722,-0.27385 -10.358292,-9.04231 z"
                        }
                    />
                </g>
            </svg>
        </div>

    );
}

const renderPath = (d) => (
    <path
        d={d}
        style={{transition: 'd 800ms'}}
        // stroke="black"
    />

)