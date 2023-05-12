import { PureComponent } from "react";
import Card from 'react-bootstrap/Card';

class Movie extends PureComponent {
    imgPath = "https://image.tmdb.org/t/p/w300/";

    constructor(props) {
        super(props);
        //console.log(props);
        this.state = { poster_path: props.poster_path, original_title: props.original_title, overview: props.overview };
    }
    render() {
        return (
            <Card style={{margin:'5px', display: 'inline-block', width: '22rem' }}>
                <Card.Img variant="top" src={this.imgPath+this.state.poster_path} />
                <Card.Body>
                    <Card.Title><b>{this.state.original_title}</b></Card.Title>
                    <Card.Text>
                        {this.state.overview}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Movie;