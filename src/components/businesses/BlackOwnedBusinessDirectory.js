import { useState, useEffect } from "react";
import {
  getAllBusinesses,
  getAllCategories,
} from "../managers/BusinessManager";
import { Link } from "react-router-dom"

export const BlackOwnedBusinessDirectory = ({businesses}) => {

  // checkmark icon from hero icons
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
    <main className="">
      <div className="flex justify-center bg-black">
        <main className="w-3/4 h-[660px] mt-5 fixed overflow-y-scroll bg-green-100 p-3 rounded-xl">
          <div className="space-y-3">
            {businesses.map((business) => {
              return (
                <div className="border bg-white relative p-3 rounded-lg shadow-xl">
                  <h2 className="text-2xl mb-2">{business.name}</h2>
                  {business.website === "" ? (
                    <Link
                      to={`/businesses/${business.id}`}
                      className="bg-greenbook-green text-white p-2 rounded-lg"
                    >
                      View Business Profile
                    </Link>
                  ) : (
                    <>
                      <div className="flex space-x-2">
                        <Link
                          to={`/businesses/${business.id}`}
                          className="bg-greenbook-green text-white p-2 rounded-lg"
                        >
                          View Business Profile
                        </Link>
                        <a
                          href={`${business.website}`}
                          target="_blank"
                          className="bg-greenbook-green text-white p-2 rounded-lg"
                        >
                          View Website
                        </a>
                      </div>
                    </>
                  )}
                  <div className="">{business?.category?.name}</div>
                  <div>{business.address}</div>
                  <div>{business.City}</div>
                  <div className="flex space-x-4 mt-4">
  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer">
    <img src="/facebook-icon.png" alt="Facebook icon" className="w-8 h-8" />
  </a>
  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Check out these black-owned businesses!")}`} target="_blank" rel="noreferrer">
    <img src="/twitter-icon.png" alt="Twitter icon" className="w-8 h-8" />
  </a>
  <a href={`https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer">
    <img src="/instagram-icon.png" alt="Instagram icon" className="w-8 h-8" />
  </a>
</div>
                  {business.isBlackOwned ? (
                    <div className="flex absolute top-1 right-3">
                      Black Owned {heroCheckmark}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </main>
  );
};
