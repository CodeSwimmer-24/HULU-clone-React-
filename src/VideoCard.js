import React from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
  return (
    <div className="videocard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="_"
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>

      <p className="videoCard__stats">
        {movie.release_date || movie.first_air_date} <ThumbUpIcon />{" "}
        {movie.vote_count}
      </p>
    </div>
  );
}

export default VideoCard;
