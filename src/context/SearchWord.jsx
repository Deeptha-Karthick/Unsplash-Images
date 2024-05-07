import React, { createContext, useReducer, useState, useContext } from "react";

const SearchTextContext = createContext({
  searchKey: undefined,
});

export const SearchTextContextProvider = ({ children }) => {
  const [searchKey, setSearchKey] = useState("michael jackson");

  const searchTextContext = {
    searchText: searchKey,
    updateSearchText: (text) => {
      setSearchKey(text);
    },
  };

  return (
    <SearchTextContext.Provider value={searchTextContext}>
      {children}
    </SearchTextContext.Provider>
  );
};

export const useSearchTextContext = () => {
  const searchTextContext = useContext(SearchTextContext);
  if (searchTextContext === undefined) {
    throw new Error("You dont have access to theme value");
  }
  return searchTextContext;
};
