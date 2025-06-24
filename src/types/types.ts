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
