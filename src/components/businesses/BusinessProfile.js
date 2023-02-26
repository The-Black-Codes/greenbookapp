import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleBusiness } from "../managers/BusinessManager";

export const BusinessProfile = () => {
  const [business, setBusiness] = useState({});
  const businessId = useParams();

  useEffect(() => {
    getSingleBusiness(businessId).then((business) => {
      setBusiness(business)
    });
  }, []);

  return <main className="">
    <h1 className="text-6xl text-center mt-20">{business.name}</h1>
  </main>;
};
