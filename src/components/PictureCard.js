import React, { useState } from "react";
import {
    Card,
    CardText,
    CardTitle,
    CardSubtitle,
    CardImg
} from "reactstrap";

const PictureCard = props => {
    
    return (
        <div>
            {/* <h2>{props.title}</h2>
            <h3>Date: {props.date}</h3>
            <p>Description: {props.explanation}</p>
            <img src={props.url} alt=""/> */}
            <Card style={{backgroundColor: "gray", color: "yellow"}}>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>{props.date}</CardSubtitle>
                <CardText>{props.explanation}</CardText>
                <CardImg src={props.url} alt='' />
            </Card>
            
        </div> 
    );
};

export default PictureCard;