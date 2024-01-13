import { Link } from "react-router-dom";
import ArticleForm from "../components/articleForm";

const CreateArticles = () => {
  return (
    <div className="w-full h-[100vh]">
      <Link to="/">
        <p className="text-[#F20000] cursor-pointer text-sm">&larr; Go Back</p>
      </Link>
      <ArticleForm />
    </div>
  );
};

export default CreateArticles;
