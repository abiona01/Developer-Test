import { FC, ReactNode, useEffect, useState } from "react";
import { AppContext } from "./app.context";
import { ArticleType } from "../utils/types";

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
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);
  console.log(articles);
  return (
    <AppContext.Provider
      value={{
        articles,
        setArticles,
        filteredArticles,
        setFilteredArticles,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
