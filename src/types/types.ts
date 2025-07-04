export interface QuestionTypes {
  id: number;
  q: string;
  answer: string;
}
export interface PlanTypes {

  time?: string;

  name: string;
  highlight?: boolean;
  price: string;
  content: string;
  devices?: string;
  trial?: string;
  cancel?: string;
  hdr?: string;
  dolby?: string;
  ads?: string;
  offline?: string;
  family?: string;
};

export interface DeviceTypes {
  name: string;
  description: string;
  icon: string;
}

export enum Category {
    Genres = "genres",
    Popular = "popular",
    Trending = "trending",
    Releases = "releases",
    Watch = "watch",
}
export enum ShowType {
    Movie="movie",
    Show="show",
}
export interface CardType{
    category:Category;
    type?:ShowType;
}


// Reference the enum in the interface
export interface MoviesTypes {
    img:string;
}
    export interface ShowsTypes {
        img:string;
    }

export  interface Genre {
  id: number;
  name: string;
}

export interface GenreListResponse {
  genres: Genre[];
}
 

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  genre_ids: number[]; // or genres: Genre[] if using full genre objects
  vote_average: number;
  vote_count: number;
  popularity: number;
  adult: boolean;
  original_language: string;
  video: boolean;
}

export interface MovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
