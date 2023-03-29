import {useAppSelector } from "../../app/hooks";
import LoaderSpinners from "../../components/loader-spinners/LoaderSpinners";
import NewsItem from "./NewsItem";
import design from './NewsView.module.scss'

const NewsView = () => {
 
  const { articles, error, loading } = useAppSelector((state) => state.news);

  return (
    <div className={design.news}>
      <LoaderSpinners/>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {articles.length > 0 && <h2 className="text-center">News</h2>}
      {articles.length > 0 && (
        <div className={`d-flex flex-wrap justify-content-center align-items-center ${design.article}`}>
          {articles.map((a) => (
            <NewsItem key={a.url} {...a} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsView;
