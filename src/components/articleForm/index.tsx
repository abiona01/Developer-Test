import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArticleSchema } from "./validation";
import { ArticleFormType } from "../../utils/types";
import useAppContext from "../../context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ArticleForm = () => {
  const navigate = useNavigate();
  const { createArticle, loading } = useAppContext();
  const [disabled, setDisabled] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleFormType>({
    defaultValues: {
      name: "",
      email: "",
      body: "",
    },
    resolver: zodResolver(ArticleSchema),
  });

  const onSubmit: SubmitHandler<ArticleFormType> = (data: ArticleFormType) => {
    // Handle form submission with valid data
    createArticle(data);
    navigate("/");
  };
  useEffect(() => {
    if (loading) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [disabled, loading]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="article-form w-full sm:w-[60%] lg:w-[40%] mx-auto pt-8"
    >
      <div>
        <h4 className="text-center text-[#2E3031] mb-4 font-semibold">
          CREATE ARTICLE
        </h4>
        {/* Label and input for Name */}
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Name"
          {...register("name")}
          className={`w-full input ${errors.name ? "input-error" : ""}`}
        />

        <span className="error-message">{errors.name?.message}</span>
      </div>
      <div className="mt-4">
        {/* Label and input for Email */}
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          {...register("email")}
          className={`w-full input ${errors.email ? "input-error" : ""}`}
        />

        <span className="error-message">{errors.email?.message}</span>
      </div>
      <div className="mt-4">
        {/* Label and textarea for Body */}
        <label htmlFor="body" className="label">
          Body
        </label>
        <textarea
          id="body"
          placeholder="Body"
          {...register("body")}
          className={`w-full !h-[120px] input ${
            errors.body ? "input-error" : ""
          }`}
        />

        <span className="error-message">{errors.body?.message}</span>
      </div>
      <button
        type="submit"
        role="button"
        className={`mt-4 button ${disabled ? "button-disbaled" : ""}`}
        disabled={disabled}
      >
        {loading ? "Loading..." : "Create Article"}
      </button>
    </form>
  );
};

export default ArticleForm;
