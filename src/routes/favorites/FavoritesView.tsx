import { useAppSelector } from "../../app/hooks";
import NewsItem from "../news/NewsItem";
import design from './Favorites.module.scss'
import { NavLink } from "react-router-dom";

const FavoritesView = () => {
  const { articles } = useAppSelector((state) => state.news);
  const favoriteArticles = articles.filter((a) => a.isFavorite);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      {favoriteArticles.length > 0 &&
        favoriteArticles.map((a) => (
          <>
            <h2 className="text-center m-4">Favorites: </h2>
            <NewsItem key={a.url} {...a} />
          </>
        ))}
      {favoriteArticles.length === 0 && (
        <div className={design.background}>
          <h3 className={design.noFavorites}>
            You can choose your favorite articles on &nbsp;
            <NavLink className={`nav-link ${design.link}`} to="/news">
              AI News
            </NavLink>
            &nbsp; page
          </h3>
        </div>
      )}
    </div>
  );
};

export default FavoritesView;
