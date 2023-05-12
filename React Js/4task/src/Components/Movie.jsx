import MediaCard from "./Card";
import { memo } from "react";

const Movie = (props) => {

    return (
        <MediaCard {...props}></MediaCard>
    );
}

export default memo(Movie);