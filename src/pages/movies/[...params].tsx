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
  if (ssrError) console.error("❌", ssrError);

  return (
    <>
      <Seo title={movie?.title || "Error"} />
      <main>
        <h4>{movie?.title || "Error"}</h4>

        {/* Error */}
        <span>
          {movie?.success === false && `Fail: ${movie?.status_message}`}
        </span>
        <span>{ssrError /* SSR */}</span>
        <span>{movie?.apiError /* API Route*/}</span>
      </main>
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
      throw new Error("URL doesn't exist.");
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
