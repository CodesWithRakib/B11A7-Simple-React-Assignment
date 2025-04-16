import React from "react";
import { MdCancel } from "react-icons/md";

function Favorite({ data, unFavorite }) {
  const { title, currentBidPrice, bidsCount, image } = data;
  return (
    <div className="grid grid-cols-5 justify-between items-center gap-4 p-4 text-[#0E2954] rounded-xl border-2 border-green-200 w-11/12 mx-auto sm:w-full">
      <figure className="border-1 rounded-xl border-green-200 w-fit">
        <img src={image} alt="" className="w-14 h-14 rounded-xl " />
      </figure>
      <div className="col-span-3 flex flex-col items-start justify-between ">
        <p className="font-medium text-blue-700">{title}</p>
        <div className="flex flex-col">
          <p className=" font-bold text-amber-500">${currentBidPrice}</p>
          <p className="text-green-400 ">Bids: {bidsCount}</p>
        </div>
      </div>
      <button
        onClick={() => unFavorite(data.id, data.currentBidPrice)}
        className="hover:cursor-pointer hover:text-red-500 flex items-center justify-center "
        title="Remove from favorite"
      >
        <MdCancel size={25} />
      </button>
    </div>
  );
}

export default Favorite;
