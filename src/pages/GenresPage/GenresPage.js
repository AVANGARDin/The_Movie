import React, { useEffect, useState } from 'react'
import "./GenresPage.css"
import { genres } from '../../constants/genres';
import { endpoints } from '../../constants/endpoints';
import { getGenres } from '../../helpers/apiHelpers/getGenres';
import { Link } from 'react-router-dom';
import GenreItem from "../../components/shared/GenreItem/GenreItem";
import { MOVIE_GENRES, TV_GENRES } from '../../constants/routes';

export default function GenresPage({ movieType }) {
  const [videoGenres, setVideoGenres] = useState();
  const route = movieType === "movie" ? MOVIE_GENRES : TV_GENRES;

  useEffect(() => {
    (async () => {
      const genresFromApi = await getGenres(
        endpoints[movieType === "tv" ? "tvSeriesGenres" : "movieGenres"]
      );
      const result = genres.filter((genre) => genresFromApi.some(item => item.id === genre.id));
      setVideoGenres(result);
    })();
  }, [movieType]);
  
  return (
    <div className="genres-container">
      {videoGenres
        ? videoGenres.map((item) => {
            return (
              <Link
                to={`/${route}/${item.id}/${item.name.replace( /\s/g, "_" )}`}
                key={item.id}
              >
                <GenreItem item={item} />
              </Link>
            );
          })
        : <div>Loading...</div>}
    </div>
  );
}
