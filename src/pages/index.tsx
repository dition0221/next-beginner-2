import Link from "next/link";
// APIs
import { IMovie } from "@/pages/api/getMovies";
// components
import Seo from "@/components/Seo";

interface IHomeProps {
  movies: IMovie[] | { apiError: string };
  ssrError?: string;
}

export default function Home({ movies, ssrError }: IHomeProps) {
  return (
    <main>
      <Seo title="Home" />

      {/* Error */}
      {ssrError && <span>{ssrError}</span>}
      {!Array.isArray(movies) && <span>{movies?.apiError}</span>}

      {/* Movie list */}
      {Array.isArray(movies) &&
        movies?.map((movie) => (
          <Link href={`/movies/${movie.title}/${movie.id}`} key={movie.id}>
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <h4>{movie.title}</h4>
            </div>
          </Link>
        ))}

      <style jsx>{`
        main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .movie {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          cursor: pointer;
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
          font-size: min(16px, 3.5vw);
          text-align: center;
        }
      `}</style>
    </main>
  );
}

export async function getServerSideProps() {
  // fetch API: '/api/getMovies'
  try {
    const movies: IMovie[] = await (
      await fetch(
        "https://next-beginner-2-git-main-dition0221s-projects.vercel.app/api/getMovies"
      )
    ).json();
    return { props: { movies } };
  } catch (error) {
    const ssrError = `❌ Error fetching movies from SSR. ${error}`;
    console.error(ssrError);
    return { props: { ssrError } };
  }
}
