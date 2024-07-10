import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import {
  MdOutlineStarOutline,
  MdOutlineStarPurple500,
  MdDeleteOutline,
} from "react-icons/md";

const RenderCartCourse = () => {
  const { cart, removeFromCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="text-white container mx-auto px-4 py-8">
      {cart.map((course, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-gray-800 rounded-lg shadow-lg p-4 mb-6"
        >
          <img
            src={course.thumbnail}
            alt="thumbnail"
            className="w-full md:w-48 rounded-md object-cover mb-4 md:mb-0"
          />
          <div className="flex-1 md:ml-6">
            <div>
              <h2 className="text-xl font-bold mb-2">{course.heading}</h2>
              <p className="text-gray-300 mb-4">{course.description}</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-2">4.8</span>
              <ReactStars
                count={5}
                edit={false}
                emptyIcon={<MdOutlineStarOutline />}
                filledIcon={<MdOutlineStarPurple500 />}
                size={24}
                activeColor="#ffd700"
              />
              <span className="ml-2">
                {course.ratingAndReview.length} Rating
              </span>
            </div>
            <div className="flex justify-between items-center">
              <button
                onClick={() => dispatch(removeFromCart(course._id))}
                className="flex items-center text-red-500 hover:text-red-700 transition duration-300"
              >
                <MdDeleteOutline className="mr-1" size={24} />
                <p>Remove</p>
              </button>
              <p className="text-lg font-bold">{course.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderCartCourse;
