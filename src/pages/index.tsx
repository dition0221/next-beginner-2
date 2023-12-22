import Seo from "@/components/Seo";
import { useEffect, useState } from "react";
import { IMovie } from "./api/getMovies";

export default function Home() {
  const [movies, setMovies] = useState([] as IMovie[]);
  useEffect(() => {
    (async () => {
      const res: IMovie[] = await (await fetch("/api/getMovies")).json();
      setMovies(res);
    })();
  }, []);

  return (
    <main>
      <Seo title="Home" />
      {movies.length === 0 && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.title}</h4>
        </div>
      ))}

      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </main>
  );
}
