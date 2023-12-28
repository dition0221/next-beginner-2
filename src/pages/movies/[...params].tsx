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
      <article />

      <main>
        <h4>
          {`${movie?.title} (${movie?.release_date?.slice(0, 4)})` || "Error"}
        </h4>
        <span>{movie?.tagline}</span>
        <span>{`runtime : ${movie?.runtime} minutes`}</span>
        <p>{movie?.overview}</p>
        <ul>
          {movie?.genres?.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>

        {/* Error */}
        <span>
          {movie?.success === false && `Fail: ${movie?.status_message}`}
        </span>
        <span>{ssrError /* SSR */}</span>
        <span>{movie?.apiError /* API Route*/}</span>
      </main>

      <style jsx>{`
        article {
          /* background-image: url(); */
          position: fixed;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          max-width: 100%;
          height: 100vh;
          z-index: -1;
        }
        span {
          display: block;
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
      await fetch(`http://localhost:3000/api/detail/${movieId}`)
    ).json();
    return { props: { movie } };
  } catch (error) {
    const ssrError = `Error fetching movie from SSR. ❌${error}`;
    console.error(ssrError);

    return { props: { ssrError } };
  }
}
