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
    setMovieDetail(json.data.movie)
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <img src={movieDetail.medium_cover_image} alt="title" />
      <div>
        <strong>{movieDetail.title}</strong>
        <div>rating : {movieDetail.rating}</div>
        <div>{movieDetail.description_full}</div>
        <div>{movieDetail.year}</div>
      </div>
    </>
  )
}
export default Detail