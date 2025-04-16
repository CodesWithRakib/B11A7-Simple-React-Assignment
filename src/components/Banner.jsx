import React from "react";

function Banner() {
  return (
    <section className="py-10 text-white">
      <div
        className="min-h-[40vh] sm:min-h-[50vh] flex items-center rounded-2xl "
        style={{
          backgroundImage: "url(Banner-min.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="hero-overlay"></div> */}
        <div className="w-11/12 mx-auto  text-left ">
          <div className="max-w-xl whitespace-break-spaces tracking-tighter flex flex-col gap-4 items-start justify-start h-full  ">
            <h1 className=" text-4xl sm:text-5xl font-bold text-amber-500 leading-tighter">
              Bid on unique items from Around the world
            </h1>
            <p className=" text-green-50 w-9/12 sm:w-8/12 text-lg sm:text-xl leading-tighter">
              Discover rare collections, luxury goods , and vintage treasures in
              our curated auctions
            </p>
            <button className="btn text-xl bg-amber-600  rounded-4xl px-8  sm:px-10 text-white outline-none hover:bg-amber-500 hover:text-white border-none shadow-lg transition duration-300 ease-in-out">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
