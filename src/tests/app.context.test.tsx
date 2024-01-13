import { expect, it } from "vitest";
import { renderHook } from "../utils/test-utils";
import useAppContext from "../context";
import { AppContext } from "../context/app.context";

// Returns the context from the AppContext using useContext.
it("should return the context from the AppContext using useContext", () => {
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

  expect(result.current).toEqual({
    articles: [],
    setArticles: expect.any(Function),
    filteredArticles: [],
    setFilteredArticles: expect.any(Function),
    loading: false,
    createArticle: expect.any(Function),
  });
});

// Returns the correct context object with the expected properties.
it("should return the correct context object with the expected properties", () => {
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

  expect(result.current.articles).toEqual([]);
  expect(result.current.setArticles).toEqual(expect.any(Function));
  expect(result.current.filteredArticles).toEqual([]);
  expect(result.current.setFilteredArticles).toEqual(expect.any(Function));
  expect(result.current.loading).toEqual(false);
  expect(result.current.createArticle).toEqual(expect.any(Function));
});

// Returns the context object with the correct types for each property.
it("should return the context object with the correct types for each property", () => {
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

  expect(result.current.articles).toEqual(expect.any(Array));
  expect(result.current.setArticles).toEqual(expect.any(Function));
  expect(result.current.filteredArticles).toEqual(expect.any(Array));
  expect(result.current.setFilteredArticles).toEqual(expect.any(Function));
  expect(result.current.loading).toEqual(expect.any(Boolean));
  expect(result.current.createArticle).toEqual(expect.any(Function));
});
