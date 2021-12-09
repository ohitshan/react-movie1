import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json)
    setMovieDetail(json)
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <img src={movieDetail.data.movie.medium_cover_image} alt="title" />
      <div>
        <strong>{movieDetail.data.movie.title}</strong>
        <div>rating : {movieDetail.data.movie.rating}</div>
        <div>{movieDetail.data.movie.description_full}</div>
      </div>
    </>
  )
}
export default Detail