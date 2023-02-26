import { getAllCategories, getAllBusinesses } from "../managers/BusinessManager";
import { useState, useEffect } from "react";

// This component is responsible for taking the changeEvent.target.value of what is typed into the searchbar and the setterFunction will store it in the state variable.
export const BusinessSearch = ({ setterFunction, setBusinesses, businesses, searchTermState }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  const resetSearch = () => {
    getAllBusinesses().then((businesses) => {
      setBusinesses(businesses).then(() => {
        searchTermState("");
      });
    });
  };

  // Allows User to submit search on network home, by clicking enter.
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      const searchedBusinesses = businesses.filter((business) => {
        return business.name
          .toLowerCase()
          .includes(searchTermState.toLowerCase());
      });
      setBusinesses(searchedBusinesses);
    }
  };

  const searchBusinesses = () => {
    const searchedBusinesses = businesses.filter((business) => {
      return business.name
        .toLowerCase()
        .includes(searchTermState.toLowerCase());
    });
    setBusinesses(searchedBusinesses);
  };
  return (
    <main className="flex justify-center">
      <div className="flex space-x-16 border justify-center w-2/3 h-20 rounded-lg shadow-lg">
        <select className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2 ring-greenbook-green">
          <option value={0}>Select Category</option>
          {categories.map((category) => {
            return <option value={category.id}>{category.name}</option>;
          })}
        </select>
        <input
          className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2 ring-greenbook-green"
          placeholder="Search Businesses"
          onKeyDown={handleKeyPress}
          onChange={(changeEvent) => {
            setterFunction(changeEvent.target.value);
          }}
          type="text"
        ></input>
        <button
          className="bg-greenbook-green text-white p-2 mt-5 bt-5 rounded-lg"
          onClick={() => {
            searchBusinesses();
          }}
        >
          Search
        </button>
        <button
          className="bg-greenbook-green text-white h-fit p-2 mt-5 bt-5 rounded-lg"
          onClick={() => {
            resetSearch();
          }}
        >
          Reset Search
        </button>
        <select className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2">
          <option value={0}>Select Filter</option>
        </select>
      </div>
    </main>
  );
};
