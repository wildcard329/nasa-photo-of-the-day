import React, {useState, useEffect} from 'react';
import CardMaker from './CardMaker';
import axios from 'axios';

export default function Card() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=oLzDlSj4hoLWGdpIswYB2ysVyvmx5vuD0zHChBk9')
            .then(res => {
                console.log('flag',res)
                setData(res.data);
            })
            .catch(err => {
                console.error('error',err)
            })
    }, [])

    return (
        <div className="card">
                    <CardMaker
                        key={data.date}
                        date={data.date}
                        title={data.title}
                        explanation={data.explanation}
                        hdurl={data.hdurl}
                        title={data.title}
                    />                
        </div>
        

    )
}