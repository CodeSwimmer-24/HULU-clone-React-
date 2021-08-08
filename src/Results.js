import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import "./Results.css";
import axios from "./axios";
import requests from "./requests";
function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

export default Results;
{
  /* <VideoCard
img="https://www.niagarafallsstatepark.com/~/media/parks/niagara-falls/niagara-falls-state-park/photos-and-videos/photo-gallery-8.jpg"
title="Movies"
likes="2230"
movieTag="This is a film about waterfall"
/> */
}

