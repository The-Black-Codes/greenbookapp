import { useState, useEffect } from "react";
import { getAllBusinesses, getAllCategories } from "../managers/BusinessManager";
import { BusinessList } from "./BlackOwnedBusinessList";

export const BlackOwnedBusinessDirectory = () => {
  const [businesses, setBusinesses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    getAllBusinesses().then((businesses) => {
      setBusinesses(businesses);
    });
  }, []);

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  const filteredBusinesses = businesses.filter((business) => {
    // Filter by category ID if selected
    if (selectedCategoryId && business.categoryId !== selectedCategoryId) {
      return false;
    }

    // Filter by city if selected
    if (selectedCity && business.City !== selectedCity) {
      return false;
    }

    return true;
  });

  return (
    <main>
      <h1 className="text-5xl text-center m-8">Businesses Directory</h1>
      <div className="flex justify-center">
        <div className="flex space-x-16 border justify-center w-2/3 h-20 rounded-lg shadow-lg">
          <select
            className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2 ring-greenbook-green"
            value={selectedCategoryId}
            onChange={(event) =>
              setSelectedCategoryId(parseInt(event.target.value))
            }
          >
            <option value={0}>Select Category</option>
            {categories.map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <input
            className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2 ring-greenbook-green"
            placeholder="Search Businesses"
          ></input>
          <select
            className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2"
            value={selectedCity}
            onChange={(event) =>
              setSelectedCity(event.target.value)
            }
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
      </div>
      <div className="flex justify-center">
        <BusinessList businesses={filteredBusinesses} />
      </div>
    </main>
  );
};
