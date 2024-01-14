import { Link } from "react-router-dom";
import ArticleCard from "../components/articleCard";
import SearchForm from "../components/search-form";
import useAppContext from "../context";

const Articles = () => {
  const { filteredArticles, loading } = useAppContext();

  return (
    <div>
      <div className="h-[100vh] w-full relative overflow-y-scroll no-scrollbar">
        <SearchForm />
        <div className="flex w-full justify-between mt-8">
          <h6 className="text-left text-[#2E3031] font-semibold text-xl">
            Articles
          </h6>
          <Link to="/create">
            <p className="text-[#F20000] cursor-pointer">+ Create Article</p>
          </Link>
        </div>
        <div className="w-full mt-3 articles">
          {loading ? (
            <div className="w-full h-[20vh] flex justify-center items-center">
              <p className="text-[#2E3031]">Loading Articles</p>
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="w-full h-[20vh] flex justify-center items-center">
              <p className="text-[#2E3031]">No Articles Found</p>
            </div>
          ) : (
            <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={`${article.id} + ${article.name}`}
                  article={article}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
