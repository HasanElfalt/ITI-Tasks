import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    let imgPath = "https://image.tmdb.org/t/p/w300/";
    console.log(props);

  return (
    <Card style={{margin:'5px', display: 'inline-block'}} sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 500 }}
        image= {imgPath + props.poster_path}
        title="Movie Poster"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
