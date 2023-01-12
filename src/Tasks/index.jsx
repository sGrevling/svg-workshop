import React from 'react';
import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";
import './index.css';
import {Task1} from "./Task1.jsx";
import {Task2} from "./Task2.jsx";
import {Task3} from "./Task3.jsx";
import {Task4} from "./Task4.jsx";

const simpleTasks = [Task1, Task2, Task3]
const pathTasks = [Task4]
const Tasks = () => {
    const location = useLocation();
    const selectedIndex = location.state?.task ?? 0;
    const Task = [...simpleTasks, ...pathTasks][selectedIndex];
    return (
        <div className="tasks">
            <div className="subNavWrapper">
                <p>Bob's quest</p>
                <div className="subNav taskSelect">
                    {simpleTasks.map((t, i) => (
                            <Link
                                className={classNames(
                                    'navLink',
                                    {active: selectedIndex === i}
                                )}
                                state={{...location.state, task: i}}
                            >
                                Task {i + 1}
                            </Link>
                        )
                    )}
                </div>
                <p>Paths</p>
                <div className="subNav taskSelect">
                    {pathTasks.map((t, i) => {
                        const index = i + simpleTasks.length;
                        return (
                                <Link
                                    className={classNames(
                                        'navLink',
                                        {active: selectedIndex === index}
                                    )}
                                    state={{...location.state, task: index}}
                                >
                                    Task {index + 1}
                                </Link>
                            )
                        }
                    )}
                </div>
            </div>
            <Task/>
        </div>
    );
}

export default Tasks;