import { useState, useEffect } from "react";
import { getAllBusinesses, getAllCategories } from "../managers/BusinessManager";
import { BusinessList } from "./BlackOwnedBusinessList";


export const BlackOwnedBusinessDirectory = () => {
  const [businesses, setBusinesses] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllBusinesses().then((businesses) => {
      setBusinesses(businesses);
    })
  }, [])

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories);
    })
  }, [])


  return (
    <main>
      <h1 className="text-5xl text-center m-8">Businesses Directory</h1>
      <div className="flex justify-center">
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
          ></input>
          <select className="border border-slate-400 h-10 flex mt-4 rounded-lg p-2">
            <option value={0}>Select Filter</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <BusinessList businesses={businesses} />
      </div>
    </main>
  );
};
