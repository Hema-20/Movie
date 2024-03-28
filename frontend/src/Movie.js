// Movie.js
import React, { useState } from 'react';
import Counter from './Counter';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const LazyEditPage = React.lazy(() => import('./EditMovie'));
export default function Movie({ movieTake, getMovies }) {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const deleteMovie = (id) => {
    const confirmed = window.confirm("Do you want to delete this movie?");
    if (confirmed) {
      fetch(`http://localhost:4001/api/movies/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          getMovies();
          alert("Movie deleted successfully.");
        })
        .catch((error) => {
          console.error('Error deleting movie:', error);
          // Handle error if needed
        });
    }
  };

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={movieTake.poster} alt={movieTake.name} />
      <CardContent>
        <div className='movie-spec'>
          <h2 className='movie-name'>
            {movieTake.name}
            <IconButton color="primary" aria-label="Toggle-Description" onClick={() => setShow(!show)}>
              {show ? <ExpandLessIcon fontSize='large' /> : <ExpandMoreIcon fontSize='large' />}
            </IconButton>
            <IconButton 
  color="primary" 
  aria-label="Movie-Info" 
  onClick={() => navigate(`/portal/view/${movieTake._id}`)} // Corrected to use _id
>
  <InfoIcon fontSize='medium' />
</IconButton>
          </h2>
          <h3 className='movie-rating'>⭐ {movieTake.rating}</h3>
        </div>
      </CardContent>
      {show ? <p className='movie-summary'>{movieTake.summary}</p> : null}
      <CardActions>
        <Counter />
        <IconButton
          sx={{ marginLeft: "auto" }}
          aria-label="editMovie"
          onClick={() => navigate(`/portal/edit/${movieTake._id}`)}
        >
          <EditIcon color="secondary" />
        </IconButton>
        <IconButton
          sx={{ marginLeft: "auto" }}
          aria-label="deleteMovie"
          onClick={() => deleteMovie(movieTake._id)}
        >
          <DeleteIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
