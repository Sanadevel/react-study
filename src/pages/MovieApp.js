import { useEffect, useState } from "react";

export default function MovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
      .then((Response) => Response.json())
      .then((json) => {
        setloading(json.data.movies);
        setloading(false);
      }),
      [];
  };
  return (
    <>
      <div>{loading ? <h1>Loading...</h1> : null}</div>
    </>
  );
}
