import { useState, useEffect } from "react";
import { BlackOwnedBusinessDirectory } from "./BlackOwnedBusinessDirectory";
import { BusinessSearch } from "./BusinessSearch";
import { getAllBusinesses } from "../managers/BusinessManager";

export const BusinessDirectoryContainer = () => {
  const [searchTerms, setBusinessSearchTerms] = useState("");
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    getAllBusinesses().then((businesses) => {
      setBusinesses(businesses);
    });
  }, []);

  // The Business Directory Container parent component will return two children components.
  return (
    <>
      <h1 className="text-5xl text-center m-5">Business Directory</h1>
      <BusinessSearch
        setterFunction={setBusinessSearchTerms}
        businesses={businesses}
        searchTermState={searchTerms}
        setBusinesses={setBusinesses}
      />
      <BlackOwnedBusinessDirectory
        searchTermState={searchTerms}
        businesses={businesses}
      />
    </>
  );
};
