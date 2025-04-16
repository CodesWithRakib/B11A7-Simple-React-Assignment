import React, { useEffect, useState } from "react";
import Card from "./Card";
import { CiHeart } from "react-icons/ci";

import Favorite from "./Favorite";

function Auctions({ notify, notifyRemove }) {
  const [data, setData] = useState([]);

  const [totalBids, setTotalBids] = useState(0);
  useEffect(() => {
    fetch("./biditems.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.bidItems);
      });
  }, []);

  const handleFavorite = (id) => {
    notify();
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setTotalBids(
      updatedData.reduce((acc, item) => {
        if (item.isFavorite) {
          return acc + item.currentBidPrice;
        }
        return acc;
      }, 0)
    );
    setData(updatedData);
  };
  const unFavorite = (id, currentBidPrice) => {
    setTotalBids((prev) => prev - currentBidPrice);
    notifyRemove();
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setData(updatedData);
  };
  return (
    <section className="max-w-screen-2xl mx-auto ">
      <div className=" px-4 py-8  ">
        <div className="ml-2">
          <h2 className="text-3xl font-bold mb-1 text-white">
            Active Auctions
          </h2>
          <p className="text-green-50">Discover and bid extraordinary items</p>
        </div>
        <section className=" grid grid-cols-1 lg:grid-cols-6 items-start  gap-5 py-4 sm:py-8 sm:px-10">
          <div className="lg:col-span-4 bg-white p-6 sm:p-10 shadow-xl rounded-xl">
            <div className="border-1 border-green-100 rounded-2xl">
              <div className="grid grid-cols-6 items-center  sm:py-8 py-4 pl-5 font-medium sm:font-semibold bg-gradient-to-b from-green-200 to-blue-500 rounded-t-2xl text-white text-sm sm:text-lg">
                <h3 className="col-span-3">Item </h3>
                <h3 className="text-center">Current Bid</h3>
                <h3 className="text-center">Time Left</h3>
                <h3 className="text-center">Bid Now</h3>
              </div>
              {data.map((item) => (
                <Card
                  handleFavorite={handleFavorite}
                  key={item.id}
                  data={item}
                />
              ))}
            </div>
          </div>
          <div className="w-full sm:w-9/12 mx-auto  lg:w-full lg:col-span-2 bg-white rounded-2xl p-4 shadow-xl">
            <div className="flex items-center justify-center border-b-1 text-[#1764df] border-green-200 p-4 gap-4 font-semibold text-2xl mb-5">
              <CiHeart size={25} />
              <p>Favorite Items</p>
            </div>
            <section className="flex flex-col gap-4 ">
              {data.filter((item) => item.isFavorite).length > 0 ? (
                data
                  .filter((item) => item.isFavorite)
                  .map((item) => (
                    <Favorite
                      unFavorite={unFavorite}
                      key={item.id}
                      data={item}
                    />
                  ))
              ) : (
                <div className="text-center p-10 bg-gradient-to-b from-green-200 to-blue-500 rounded-2xl text-white">
                  <CiHeart size={50} className="mx-auto mb-4" />
                  <h1 className="font-semibold text-xl">No favorite yet</h1>
                  <p>
                    Click the heart icon on any item to add it to your favorites
                  </p>
                </div>
              )}
            </section>
            <div className="flex justify-between items-center border-b-1 border-gray-200 p-4 font-bold text-gray-700">
              <h2 className="text-lg text-amber-400">Total Bids Amount</h2>
              <h2 className="text-[#1764df]">
                $<span>{totalBids}.00</span>
              </h2>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Auctions;
