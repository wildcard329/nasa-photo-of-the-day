import React, { useState } from "react";
import {
    Card,
    CardText,
    CardTitle,
    CardSubtitle,
    CardImg,
    Collapse,
    Button,
    CardBody
} from "reactstrap";

const PictureCard = props => {

    const [isOpen, setIsOpen] =useState(false);
    const toggle = () =>setIsOpen(!isOpen);

    return (
        <div>
            <button color="black" backgroundColor="black" onClick={toggle} style={{marginBottom: '1rem'}}>CLICK</button>
            <Collapse isOpen={isOpen}>
                <Card style={{backgroundColor: "yellow"}}>
                    <CardBody>
                        <Card style={{backgroundColor: "gray", color: "yellow"}}>
                            <CardTitle>{props.title}</CardTitle>
                            <CardSubtitle>{props.date}</CardSubtitle>
                            <CardText>{props.explanation}</CardText>
                            <CardImg src={props.url} alt='' />
                        </Card>     
                    </CardBody>
                </Card>
            </Collapse>
        </div> 
    );
};

export default PictureCard;