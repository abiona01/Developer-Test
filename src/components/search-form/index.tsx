import { useEffect, useState } from "react";
import useAppContext from "../../context";

const SearchForm = () => {
  const { articles, setFilteredArticles } = useAppContext();
  const [searchValue, setSearchValue] = useState<string>("");
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
  return (
    <div className="w-full flex flex-col sm:flex-row gap-4 items-center bg-[#f7f7f8] pb-4 sticky top-0">
      <input
        className="w-full sm:w-[90%] border border-[#EAEBEB] text-[#2E3031] rounded-md h-[40px] px-3 bg-transparent outline-none"
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
