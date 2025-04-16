import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

function Card({ data, handleFavorite }) {
  const [isDisabled, setIsDisabled] = useState(false);
  const { title, currentBidPrice, timeLeft, image } = data;
  return (
    <div className="grid grid-cols-6 gap-2 sm:gap-0 items-center border-t-2 border-green-100 py-2 pl-5 font-medium sm:font-semibold text-sm sm:text-lg   ">
      <figure className="col-span-1 border-2 rounded-lg border-green-100 w-fit shadow-2xl">
        <img src={image} alt="" className="w-20 h-20 rounded-lg" />
      </figure>
      <p className="col-span-2 text-blue-700 leading-tight ">{title}</p>
      <p className="text-center text-amber-600">${currentBidPrice}</p>
      <p className="text-center text-green-300">{timeLeft}</p>
      <button
        title="Add to favorite"
        onClick={() =>
          handleFavorite(
            data.id,
            setIsDisabled(() => !isDisabled)
          )
        }
        disabled={isDisabled}
        className="hover:cursor-pointer hover:bg-blue-500 flex items-center justify-center bg-blue-400 text-white font-bold rounded-full w-10 mx-auto h-10"
      >
        {data.isFavorite ? (
          <FaHeart
            fill="red"
            className={`${isDisabled ? "cursor-not-allowed " : ""}`}
            size={26}
          />
        ) : (
          <CiHeart className="" size={30} />
        )}
      </button>
    </div>
  );
}

export default Card;
