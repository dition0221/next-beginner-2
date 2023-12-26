import type { NextApiRequest, NextApiResponse } from "next";

export interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  } | null;
  budget: number;
  genres: { id: number; name: string }[] | [];
  homepage: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies:
    | {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
      }[]
    | [];
  production_countries:
    | {
        iso_3166_1: string;
        name: string;
      }[]
    | [];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages:
    | {
        english_name: string;
        iso_639_1: string;
        name: string;
      }[]
    | [];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  // Error
  success?: boolean;
  status_code?: number;
  status_message?: string;
  apiError?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMovieDetail | { apiError: string }>
) {
  const { movieId } = req.query;
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };

  // Fetch API: movie's detail
  try {
    const data: IMovieDetail = await (await fetch(url, options)).json();

    if (data.success) return res.status(404).json(data);
    return res.status(200).json(data);
  } catch (error) {
    const apiError = `❌ Error fetching movie detail from API Route. ${error}`;
    console.error(apiError);

    res.status(500).json({ apiError });
  }
}
