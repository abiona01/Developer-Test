import { describe, expect, it } from "vitest";
import ArticleCard from "../components/articleCard";
import useAppContext from "../context";

describe("ArticleCard", () => {
  it("should render", () => {
    const { filteredArticles } = useAppContext();
    expect(
      <div>
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>,
    ).toMatchSnapshot();
  });
});
