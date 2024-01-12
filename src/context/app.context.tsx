import { createContext, useContext } from "react";
import { ArticleType } from "../utils/types";

type AppContextType = {
  articles: ArticleType[];
  setArticles: (articles: ArticleType[]) => void;
  loading: boolean;
};

export const AppContext = createContext({} as AppContextType);

const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

export default useAppContext;
