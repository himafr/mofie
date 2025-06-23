import { CardType, ShowType } from "../../types/types";
import ImgCardMovieComponent from "./ImgCardMovieComponent";
import ImgCardShowComponent from "./ImgCardShowComponent";

function ListImgCardComponent({ category, type }: CardType) {
  if (type == ShowType.Movie) {
    return (
      <div className="flex overflow-x-auto space-x-4 mt-10">
        <ImgCardMovieComponent
          category={category}
          movie={{ img: "images/img.jpg" }}
        />
        <ImgCardMovieComponent
          category={category}
          movie={{ img: "images/img.jpg" }}
        />
        <ImgCardMovieComponent
          category={category}
          movie={{ img: "images/img.jpg" }}
        />
        <ImgCardMovieComponent
          category={category}
          movie={{ img: "images/img.jpg" }}
        />
        <ImgCardMovieComponent
          category={category}
          movie={{ img: "images/img.jpg" }}
        />
        <ImgCardMovieComponent
          category={category}
          movie={{ img: "images/img.jpg" }}
        />
        <ImgCardMovieComponent
          category={category}
          movie={{ img: "images/img.jpg" }}
        />
      </div>
    );
  } else if (type == ShowType.Show) {
    return (
      <div className="flex overflow-x-auto space-x-4 mt-10">
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
        <ImgCardShowComponent
          category={category}
          show={{ img: "images/img.jpg" }}
        />
      </div>
    );
  }
}

export default ListImgCardComponent;
