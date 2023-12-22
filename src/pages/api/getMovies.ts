import type { NextApiRequest, NextApiResponse } from "next";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[] | [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMovie[]>
) {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1&region=ko-KR";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}1`,
    },
  };
  const { results }: { results: IMovie[] } = await (
    await fetch(url, options)
  ).json();

  res.status(200).json(results);
}
