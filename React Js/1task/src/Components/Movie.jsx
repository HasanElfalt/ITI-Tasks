
const Movie=(props)=>{

    const {id, name, type} = props;
    return (
        <div style={{backgroundColor:"aquamarine", width:"70%",margin:"15px auto" }}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>type: {type}</div>
        </div>
    )
}

export default Movie;