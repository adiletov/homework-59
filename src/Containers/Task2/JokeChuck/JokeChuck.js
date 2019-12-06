import React from 'react';
import './JokeChuck.css';

const JokeChuck = (props) => {
    return (
            <div className="blockJoke">
                <p>{props.value}</p>
            </div>

    );
};

export default JokeChuck;