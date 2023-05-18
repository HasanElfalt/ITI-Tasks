import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../Redux/actionCreators/movieAction';


export default function MediaCard(props) {
  let imgPath = "https://image.tmdb.org/t/p/w300/";
  //console.log(props);
  const dispatch = useDispatch();


  const { id, original_title, overview, poster_path } = props;

  const handleClick = () => {
    //deleteMovie(id);
    //console.log(props);
    // var data = dispatch(getAllMovies());
    // console.log(data);
    dispatch(deleteMovie(props));
  }

  return (id &&
    <Card style={{ margin: '5px', display: 'inline-block' }} sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 500 }}
        image={imgPath + poster_path}
        title="Movie Poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" startIcon={<DeleteIcon />} color="error" onClick={handleClick}>
          Delete
        </Button>
        <Link to={`/movies/${props.id}`}><Button variant="contained" >Details</Button></Link>
      </CardActions>
    </Card>
  );
}
