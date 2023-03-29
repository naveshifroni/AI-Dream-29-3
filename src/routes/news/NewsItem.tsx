import { Link } from "react-router-dom";
import { NewsItemProps } from "../../@types/types";
import { defaultImage } from "../../services/news-service";
import design from "./NewsItem.module.scss";

const NewsItem = ({ title, urlToImage, id }: NewsItemProps) => {
  return (
    <div className= {`shadow-lg m-5 border-light border-5 rounded p-3 d-flex flex-column align-items-center ${design.item} `}>
      <h3 className={design.title}>{title}</h3>
      <img 
        onError={({ currentTarget }) => {
          currentTarget.src = defaultImage;
          currentTarget.onerror = null; //prevent loops
        }}
        className={`shadow-lg bg-white rounded card p-3 ${design.image}`}
        alt={title}
        src={urlToImage}
      />
      <Link className={design.link} to={`/news/${id}`}>
        Read More
      </Link>
    </div>
  );
};

export default NewsItem;
