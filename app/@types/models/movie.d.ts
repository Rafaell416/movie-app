type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: 'en' | 'hi' | 'ja';
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: 'movie';
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieDetail = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
