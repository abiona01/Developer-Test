import { capitalize } from "../../utils/functions";
import { ArticleType } from "../../utils/types";

type ArticleCardProps = {
  article: ArticleType;
};
const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="rounded-md border-[0.7px] border-[#EAEBEB] p-3 bg-white">
      <p className="text-[#2E3031] font-medium text-left line-clamp-2">
        Name: <span className="capitalize">{article.name}</span>
      </p>
      <p className="text-[#6F7376] font-medium text-left line-clamp-1">
        Email:{article.email}
      </p>

      <p className="text-[#2E3031] mt-2 text-left line-clamp-3">
        {capitalize(article.body)}
      </p>
    </div>
  );
};

export default ArticleCard;
