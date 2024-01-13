import { FC, ReactNode, useEffect, useState } from "react";
import { AppContext } from "./app.context";
import { ArticleFormType, ArticleType } from "../utils/types";

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<ArticleType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getArticles = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
      );
      const data = await response.json();
      setArticles(data);
      setFilteredArticles(data);
    } catch {
      alert("Error fetching articles");
    } finally {
      setLoading(false);
    }
  };

  // UseEffect to get the articles when the component is mounted
  useEffect(() => {
    getArticles();
  }, []);

  const createArticle = async (article: ArticleFormType) => {
    const data = {
      ...article,
      postId: 1,
      id: articles.length + 1,
    };
    try {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        },
      );
      const newArticle = await response.json();
      setArticles([newArticle, ...articles]);
      setFilteredArticles([newArticle, ...articles]);
    } catch {
      alert("Error creating article");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        articles,
        setArticles,
        filteredArticles,
        setFilteredArticles,
        loading,
        createArticle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
