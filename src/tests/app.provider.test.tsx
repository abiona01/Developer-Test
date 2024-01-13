import { expect, it } from "vitest";
import { renderHook } from "../utils/test-utils";
import useAppContext from "../context";
import { AppContext } from "../context/app.context";
// Sets initial state for articles and filteredArticles to empty arrays
it("should set initial state for articles and filteredArticles to empty arrays", () => {
  // Arrange
  const { result } = renderHook(() => useAppContext(), {
    wrapper: ({ children }) => (
      <AppContext.Provider
        value={{
          articles: [],
          setArticles: () => {},
          filteredArticles: [],
          setFilteredArticles: () => {},
          loading: false,
          createArticle: () => {},
        }}
      >
        {children}
      </AppContext.Provider>
    ),
  });

  // Assert
  expect(result.current.articles).toEqual([]);
  expect(result.current.filteredArticles).toEqual([]);
});
