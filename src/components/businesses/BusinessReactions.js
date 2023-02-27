import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
    createLike,
  deleteLike,
  getAllLikesForBusiness,
  getSingleBusiness,
} from "../managers/BusinessManager";

export const BusinessReactions = ({businessId}) => {
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

useEffect(() => {
    getAllLikesForBusiness(businessId).then((likes) => {
        setLikesForCurrentBusiness(likes)
    })
}, [])


const greenBookUser = localStorage.getItem("greenbook_user");
const greenBookUserObject = JSON.parse(greenBookUser);

const handleLike = (bizLikes, event) => {
 let likeFind = bizLikes.find((like) => like.userId === greenBookUserObject.id)

 if (likeFind === undefined) {
    postLikeToApi(event)
} else {
    console.log("remove Like")
    console.log(likeFind);
}}

  const postLikeToApi = (event) => {
    event.preventDefault();

    const likeToApi = {
      businessId: parseInt(businessId),
      userId: greenBookUserObject.id,
    };
    createLike()
      .then(() => {
        getAllLikesForBusiness(businessId).then((currentLikes) => {
            setLikesForCurrentBusiness(currentLikes)
        });
      });
  };

  const deleteLikeFromApi = () => {
    deleteLike(businessId).then(() => {
        getAllLikesForBusiness(businessId)
    }).then((businesses) => {
        setLikesForCurrentBusiness(businesses)
    })
  }

  return (
    <div className="flex space-x-3 mt-3 ml-3">
      <button onClick={(evt) => {
        handleLike(likesForBusiness,evt)
      }} className="bg-greenbook-green p-2 text-white rounded-lg">
        Likes {likesForBusiness.length}
      </button>
      <button className="bg-greenbook-green p-2 text-white rounded-lg">
        Dislikes
      </button>
      <div className="bg-greenbook-green p-2 text-white rounded-lg">
        Approval Rating
      </div>
    </div>
  );
};
