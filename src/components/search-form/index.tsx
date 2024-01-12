import { useState } from "react";
import useAppContext from "../../context";

const SearchForm = () => {
  const { articles, setFilteredArticles } = useAppContext();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = () => {
    const filteredArticles = articles.filter((article) => {
      return article.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setFilteredArticles(filteredArticles);
  };
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 items-center">
      <input
        className="w-full border border-[#EAEBEB] rounded-md h-[40px] px-3 bg-transparent outline-none"
        type="text"
        placeholder="Search by name"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button
        className="bg-[#F20000] hover:bg-[#E60A2B] text-white font-medium py-2 px-8 rounded-[100px] cursor-pointer outline-none"
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
