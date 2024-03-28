import { ArrowBackIos } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './App.css';

export default function MovieDetail() {
    const navigate=useNavigate();
    const {id} = useParams();
    
    const[movie,setMovie] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4001/api/movies/${id}`,{
            method:"GET"
        })
        .then((data)=>data.json())
        .then((mv)=>setMovie(mv));
    },[]);
    console.log(movie);

    const ratingStyles={
        color:movie.rating>=8.5?"green":"red",
    };
    return(
        <div>
            <iframe width="100%" height="900px" src={movie.trailer} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='movie-detail-container'>
                <div className='movie-spec'>
                    <h2 className='movie-name'>{movie.name}</h2>
                    <h3 style={ratingStyles} className='movie-rating'>⭐{movie.rating}</h3>
                </div>

                <p className='movie-summary'>{movie.summary}</p>
            </div>

            <button variant="contained" startIcon={<ArrowBackIosIcon/>} onClick={()=>navigate(-1)}>Back</button>
        </div>
    )


}
