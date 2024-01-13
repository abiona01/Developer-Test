import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";
import ArticleCard from "../components/articleCard";

const mockArticle = {
  id: 1,
  name: "john doe",
  email: "john.doe@example.com",
  body: "lorem ipsum dolor sit amet",
  postId: 1,
};

describe("ArticleCard Component", () => {
  it("renders article name in a capitalized format", () => {
    render(<ArticleCard article={mockArticle} />);
    const nameElement = screen.getByText(/Name:/);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement.nextSibling).toHaveTextContent("john.doe@example.com");
  });

  it("renders article email", () => {
    render(<ArticleCard article={mockArticle} />);
    const emailElement = screen.getByText(/Email:/);
    expect(emailElement).toBeInTheDocument();
    expect(emailElement.nextSibling).toHaveTextContent(
      "Lorem ipsum dolor sit amet",
    );
  });

  it("renders article body with correct styling", () => {
    render(<ArticleCard article={mockArticle} />);
    const bodyElement = screen.getByText("Lorem ipsum dolor sit amet");
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveClass("text-[#2E3031]");
    expect(bodyElement).toHaveClass("line-clamp-3");
  });
});
