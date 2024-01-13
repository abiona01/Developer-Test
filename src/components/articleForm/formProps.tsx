// ArticleFormProps.tsx
import { UseFormReturn } from "react-hook-form";
import { ArticleFormType } from "../../utils/types";

type ArticleFormProps = {
  createArticle: (data: ArticleFormType) => void;
  formMethods: UseFormReturn<ArticleFormType>;
};

export default ArticleFormProps;
