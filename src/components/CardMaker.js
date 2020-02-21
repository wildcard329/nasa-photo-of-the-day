import React from 'react';
import styled from 'styled-components';
import  { Card, CardImg, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';

const CardMaker = props => {
    const CustomDiv = styled.div`
    background: navy;
    width: 40%;
    borderRadius: 80%;
    marginTop: 5%;
    `
    return (
        <div>
            <Card className="nasa-card" key={props.date}>
            <CardBody  style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                <CustomDiv>
                    <CardTitle>NASA Photo of the Day: {props.title}</CardTitle>
                    <CardSubtitle>Date: {props.date}</CardSubtitle>
                </CustomDiv>
                <CardText style={{width: "75%", color: "white", background: "black"}}>{props.explanation}</CardText>
                <CardImg top width="50%" src={props.hdurl} alt="NASA Photo of the Day" />
            </CardBody>
            </Card>
        </div>
    )
}
export default CardMaker;