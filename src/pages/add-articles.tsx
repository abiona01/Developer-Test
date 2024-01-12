import { Link } from "react-router-dom";
import ArticleForm from "../components/articleForm";

const AddArticles = () => {
  return (
    <div className="w-full">
      <Link to="/">
        <p className="text-[#F20000] cursor-pointer"> Go Back</p>
      </Link>
      <ArticleForm />
    </div>
  );
};

export default AddArticles;
