import React, { useState, useEffect } from "react";
import PictureCard from "./PictureCard";
import axios from "axios";


function InformationCard(){
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=BmXS4URWUlUC6v7c7BahafFhyGUPSqNiVVgaewus')
            .then(response => {
                console.log(response.data)
            setInfo(response.data);
             })
            .catch(error => {
                console.log(error)
            })
           
    }, []);
    return (
        <div>
            <PictureCard
                    key={info.date}
                    title={info.title}
                    date={info.date}
                    explanation={info.explanation}
                    url={info.url}
                    info={info}
                    />

        </div>
    )
}
export default InformationCard;