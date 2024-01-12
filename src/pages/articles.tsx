import { Link } from "react-router-dom";
import ArticleCard from "../components/articleCard";
import SearchForm from "../components/search-form";
import useAppContext from "../context";

const Articles = () => {
  const { filteredArticles } = useAppContext();
  return (
    <div className="">
      <SearchForm />
      <div className="flex w-full justify-between mt-8">
        <h6 className="text-left text-[#2E3031] font-semibold text-xl">
          Articles
        </h6>
        <Link to="/add">
          <p className="text-[#F20000] cursor-pointer">+ Add Article</p>
        </Link>
      </div>
      <div className="w-full grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-5 mt-3">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
