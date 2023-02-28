import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  createLike,
  deleteLike,
  getAllLikesForBusiness,
  getSingleBusiness,
} from "../managers/BusinessManager";

export const BusinessReactions = ({ businessId }) => {
  // When i click on a like button, I need to create a like.
  // Like can only be clicked on or clicked off.
  // When like is clicked on, it is added to total like count.
  // When like is clicked off, it is removed from total like count.
  // I also need to keep track of the total amount of likes.

  // When i click on a dislike button, I need to create a dislike.
  // disLike can only be clicked on or clicked off.
  // When like is clicked on, it is added to total like count.
  // When like is clicked off, it is removed from total like count.
  // I also need to keep track of the total amount of likes.

  //  If userId is on any of the likes for the current business, we will remove the like.

  const [likesForBusiness, setLikesForCurrentBusiness] = useState([]);
  const [likeStyling, setLikeStyling] = useState("");

  useEffect(() => {
    getAllLikesForBusiness(businessId).then((likes) => {
      setLikesForCurrentBusiness(likes);
    });
  }, []);

  useEffect(() => {
    renderLike(likesForBusiness);
  }, [likesForBusiness]);

  const renderLike = (bizLikes) => {
    let likeFind = bizLikes.find(
      (like) => like.userId === greenBookUserObject.id
    );

    if (likeFind === undefined) {
      setLikeStyling("animate-buttonPress");
    } else {
      setLikeStyling("animate-buttonPress");
    }
  };

  const unlikedThumbsUpIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
      />
    </svg>
  );

  const greenBookUser = localStorage.getItem("greenbook_user");
  const greenBookUserObject = JSON.parse(greenBookUser);

  const handleLike = (bizLikes, event) => {
    let likeFind = bizLikes.find(
      (like) => like.userId === greenBookUserObject.id
    );

    if (likeFind === undefined) {
      postLikeToApi(event);
      setLikeStyling("animate-buttonPress");
    } else {
      deleteLikeFromApi(likeFind.id);
      setLikeStyling("animate-buttonPress");
    }
  };

  const postLikeToApi = (event) => {
    event.preventDefault();

    const likeToApi = {
      businessId: parseInt(businessId),
      userId: greenBookUserObject.id,
    };
    createLike(likeToApi).then(() => {
      getAllLikesForBusiness(businessId).then((currentLikes) => {
        setLikesForCurrentBusiness(currentLikes);
      });
    });
  };

  const deleteLikeFromApi = (likeId) => {
    deleteLike(likeId).then(() => {
      getAllLikesForBusiness(businessId).then((currentLikes) => {
        setLikesForCurrentBusiness(currentLikes);
      });
    });
  };

  const findBusinessLikeCount = () => {
    let likeCount = 0;
    likesForBusiness.forEach((like) => {
      likeCount++;
    });
    return likeCount;
  };

  return (
    <div className="flex space-x-3 mt-3 ml-3">
      <button
        className="flex space-x-1 bg-greenbook-green p-2 rounded-lg"
        onClick={(evt) => {
          handleLike(likesForBusiness, evt);
        }}
      >
        <div className="text-white">Like</div>
        <div>{unlikedThumbsUpIcon}</div>
      </button>
      <div
        className={`bg-greenbook-green pl-2 pt-2 w-6 pr-2 text-white rounded-lg ${setLikeStyling}`}
      >
        {findBusinessLikeCount()}
      </div>
    </div>
  );
};
