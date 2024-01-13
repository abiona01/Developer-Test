import { useEffect, useState } from "react";
import useAppContext from "../../context";

const SearchForm = () => {
  const { articles, setFilteredArticles } = useAppContext();
  const [searchValue, setSearchValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);
  // function to filter the articles by name
  const handleSearch = () => {
    const filteredArticles = articles.filter((article) => {
      return article.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredArticles(filteredArticles);
  };
  // Effect to reset the filtered articles when the search value is empty
  useEffect(() => {
    if (searchValue === "") {
      setFilteredArticles(articles);
    }
  }, [articles, searchValue, setFilteredArticles]);

  useEffect(() => {
    if (searchValue === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [searchValue, disabled]);
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 items-center bg-[#f7f7f8] pb-4 sticky top-0">
      <input
        className="w-full sm:w-[90%] input"
        type="text"
        placeholder="Search by name"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button
        className={`button outline-none ${disabled ? "button-disabled" : ""}`}
        onClick={() => {
          handleSearch();
        }}
        disabled={disabled}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
