import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleFavorite } from "../../features/news/newsSlice";
import design from "./NewsDetailsView.module.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const NewsDetailsView = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  const article = useAppSelector((state) =>
    state.news.articles.find((a) => a.id === id)
  );

  if (!article) {
    //user messed with the url: send him/her back to news
    return <Navigate to="/news" />;
  }

  const { title, description, urlToImage, isFavorite } = article;

  //if we got thus far: article is not undefined
  return (
    <div className="w-75 mx-auto d-flex flex-column justify-content-center align-items-center m-2">
      <h3 className="m-2">{title}</h3>

      <button
        className="btn m-2"
        onClick={() => dispatch(toggleFavorite(article.id))}
      >
        {isFavorite && <FaHeart />}
        {!isFavorite && <FaRegHeart />}
      </button>

      <img
        className="w-75 shadow-lg p-3 bg-white rounded m-2"
        src={urlToImage}
        alt={title}
      />
      <p className={design.p}>{description}</p>
      <button
        className= {`btn w-100 ${design.button}`}
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default NewsDetailsView;
