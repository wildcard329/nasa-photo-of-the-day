import React from 'react';

const CardMaker = props => {
    return (
        <div className="nasa-card" key={props.date}>
            <img src = {props.hdurl} />
            <h2>Date: {props.date}</h2>
            <p>{props.explanation}</p>
        </div>
    )
}
export default CardMaker;