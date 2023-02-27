import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleBusiness } from "../managers/BusinessManager";

export const BusinessProfile = () => {
  const [business, setBusiness] = useState({});
  const businessId = useParams();

  useEffect(() => {
    getSingleBusiness(businessId).then((business) => {
      setBusiness(business);
    });
  }, []);

  const heroCheckmark = (
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
        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
      />
    </svg>
  );

  return (
    <main className="h-screen">
      <div className="h-1/3 bg-black">
        <h1 className="text-6xl text-center pt-28  text-white">
          {business.name}
        </h1>
        <div className="mt-2 flex justify-center space-x-1 text-white text-xl text-center">
          <div> Black Owned</div>
          <div> {heroCheckmark}</div>
        </div>
      </div>
      <div className="flex h-full">
        <div className="flex-col space-y-5 w-5/12 h-full pl-5 pt-5">
          {business.website === "" ? (
            ""
          ) : (
            <a
              href={`${business.website}`}
              target="_blank"
              className="bg-greenbook-green flex w-fit p-3 rounded-md text-white"
            >
              View Website
            </a>
          )}
          <div className=" w-9/12 flex flex-col h-1/6 rounded-lg shadow-xl space-y-5 p-3">
            <div>Address: {business.address}</div>
            <div>City: {business.City}</div>
          </div>
        </div>
        <div className="w-7/12 h-1/2 ">
          <div className="flex space-x-3 mt-3 ml-3">
            <button className="bg-greenbook-green p-2 text-white rounded-lg">Likes</button>
            <button className="bg-greenbook-green p-2 text-white rounded-lg">Dislikes</button>
            <div className="bg-greenbook-green p-2 text-white rounded-lg">Approval Rating</div>
          </div>
          <div className="border rounded-lg mt-10">
            <h2 className="text-3xl mt-3 ml-3">About</h2>
            <div className="m-5">{business.summary}</div>
          </div>
        </div>
      </div>
    </main>
  );
};
