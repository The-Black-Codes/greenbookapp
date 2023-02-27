import {
  getAllCategories,
  getAllBusinesses,
  getAllBusinessesByCategory,
} from "../managers/BusinessManager";
import { useState, useEffect } from "react";

// This component is responsible for taking the changeEvent.target.value of what is typed into the searchbar and the setterFunction will store it in the state variable.
export const BusinessSearch = ({
  setterFunction,
  setBusinesses,
  businesses,
  searchTermState,
}) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  const resetSearch = () => {
    getAllBusinesses().then((businesses) => {
      setBusinesses(businesses);
      setSelectedCategoryId("0");
      setSelectedCity("0");
    });
  };

  const getBusinessByCategory = (id) => {
    return fetch(
      `http://localhost:8088/businesses?_expand=category&categoryId=${id}`
    )
      .then((res) => res.json())
      .then((businesses) => {
        setBusinesses(businesses);
      });
  };

  const getBusinessesByCity = (id) => {
    return fetch(`http://localhost:8088/businesses?_expand=category&City=${id}`)
      .then((res) => res.json())
      .then((businesses) => {
        setBusinesses(businesses);
      });
  };

  const getBusinessesByCityAndCategory = (city, categoryId) => {
    return fetch(
      `http://localhost:8088/businesses?_expand=category&City=${city}&categoryId=${categoryId}`
    )
      .then((res) => res.json())
      .then((businesses) => {
        setBusinesses(businesses);
      });
  }

  useEffect(() => {
    if ((selectedCategoryId > 0) && (selectedCity > "0")) {
      getBusinessesByCityAndCategory(selectedCity, selectedCategoryId)
    } else if (selectedCategoryId > 0) {
      getBusinessByCategory(selectedCategoryId);
    } else if (selectedCity > "0") {
      getBusinessesByCity(selectedCity);
    } else {
      getAllBusinesses().then((businesses) => {
        setBusinesses(businesses);
      });
    }
  }, [selectedCategoryId, selectedCity]);

  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );

  //   const filteredBusinesses = businesses.filter((business) => {
  //     // Filter by category ID if selected
  //     if (selectedCategoryId && business.categoryId !== selectedCategoryId) {
  //       return false;
  //     }

  //     // Filter by city if selected
  //     if (selectedCity && business.City !== selectedCity) {
  //       return false;
  //     }

  //     return true;
  //   });

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
      <div className="flex space-x-16 border justify-center w-2/3 h-24 rounded-lg shadow-lg">
        <button
          className="bg-greenbook-green text-white h-fit p-2 mt-5 bt-5 rounded-lg"
          onClick={() => {
            resetSearch();
          }}
        >
          Reset
        </button>
        <div className="flex space-x-2">
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
          className="bg-greenbook-green text-white h-fit p-2 mt-5 bt-5 rounded-lg"
          onClick={() => {
            searchBusinesses();
          }}
        >
          {searchIcon}
        </button>
        </div>
        <select
          className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2 ring-greenbook-green"
          value={selectedCategoryId}
          onChange={(evt) => {
            const copy = evt.target.value;
            setSelectedCategoryId(copy);
          }}
        >
          <option value={0}>Select Category</option>
          {categories.map((category) => {
            return <option value={category.id}>{category.name}</option>;
          })}
        </select>
        <select
          className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2"
          value={selectedCity}
          onChange={(evt) => {
            const copy = evt.target.value;
            setSelectedCity(copy);
          }}
        >
          <option value="">Select City</option>
          <option value="Antioch">Antioch</option>
          <option value="Franklin">Franklin</option>
          <option value="Goodlettsville">Goodlettsville</option>
          <option value="Joelton">Joelton</option>
          <option value="Murfreesboro">Murfreesboro</option>
          <option value="Nashville">Nashville</option>
        </select>
      </div>
    </main>
  );
};
