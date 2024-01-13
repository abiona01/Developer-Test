import { createContext, useContext } from "react";
import { ArticleFormType, ArticleType } from "../utils/types";

type AppContextType = {
  articles: ArticleType[];
  setArticles: (articles: ArticleType[]) => void;
  filteredArticles: ArticleType[];
  setFilteredArticles: (articles: ArticleType[]) => void;
  loading: boolean;
  createArticle: (article: ArticleFormType) => void;
};

export const AppContext = createContext({} as AppContextType);

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default useAppContext;
