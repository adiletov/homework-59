import React from 'react';
import './Movies.css';

const EntryField = (props) => {
    return (
        <div className="movies">
            <span className="count">{ '#' + props.count}</span>
            <input className="inputMovies"  type="text"  value={props.title}  onChange={props.onChangeMovie}  />
            <button className="btnMovie" onClick={props.removeMovie}>X</button>
        </div>
    );
};

export default EntryField;