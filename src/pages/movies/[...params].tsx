import { GetServerSidePropsContext } from "next";
// APIs
import { IMovieDetail } from "../api/detail/[movieId]";
// Components
import Seo from "@/components/Seo";

interface IDetailProps {
  movie?: IMovieDetail;
  ssrError?: string;
}

export default function Detail({ movie, ssrError }: IDetailProps) {
  // fetch API: Error
  if (ssrError) console.error("❌", ssrError);

  return (
    <>
      <Seo title={movie?.title || "Error"} />

      <main>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
          alt="포스터"
        />
        <h4>
          {`${movie?.title} (${movie?.release_date?.slice(0, 4)})` || "Error"}
        </h4>
        {movie?.runtime && <span>{`🕘 ${movie?.runtime} min`}</span>}
        <p className="tagline">{movie?.tagline}</p>
        <p>{movie?.overview}</p>
        <ul>
          {movie?.genres?.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>

        {/* Error */}
        {movie?.success === false && (
          <span>{`Fail: ${movie?.status_message}`}</span>
        )}
        {ssrError && <span>{ssrError}</span>}
        {movie?.apiError && <span>{movie?.apiError}</span>}
      </main>

      <style jsx>{`
        img {
          width: 100%;
        }
        span {
          display: block;
        }
        p {
          font-size: min(16px, 4vw);
        }
        .tagline {
          margin-top: 40px;
          font-style: italic;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps({
  query: { params },
}: GetServerSidePropsContext) {
  try {
    // Handle exception -> Redirect to <Home>
    if (
      typeof params === undefined ||
      !Array.isArray(params) ||
      params?.length !== 2
    )
      return { redirect: { destination: "/", permanent: true } };
    // Fetch API: 'api/detail/[...params]'
    const movieId = params[1];
    const movie: IMovieDetail = await (
      await fetch(
        `https://next-beginner-2-git-main-dition0221s-projects.vercel.app/api/detail/${movieId}`
      )
    ).json();
    return { props: { movie } };
  } catch (error) {
    const ssrError = `Error fetching movie from SSR. ❌${error}`;
    console.error(ssrError);

    return { props: { ssrError } };
  }
}
