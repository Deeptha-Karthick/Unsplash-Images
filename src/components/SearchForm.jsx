import { useState } from "react";
import { useSearchTextContext } from "../context/SearchWord";
import axios from "axios";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const { searchText, updateSearchText } = useSearchTextContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    //update the search key in context
    if (!searchValue) return;
    updateSearchText(searchValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="michael jackson"
          className="form-input search-input"
        />
        <button>Search</button>
      </form>
    </section>
  );
};

export default SearchForm;
