type TrendingResponse = {
  page: number;
  results: Trending[];
  total_pages: number;
  total_results: number;
};

type Trending = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name?: string;
  original_language: 'ja' | 'en';
  original_name?: string;
  overview: string;
  poster_path: string;
  media_type: 'movie' | 'tv';
  genre_ids: number[];
  popularity: number;
  first_air_date?: string;
  vote_average: number;
  vote_count: number;
  origin_country?: string[];
  title?: string;
  original_title?: string;
  release_date?: string;
  video?: boolean;
};
