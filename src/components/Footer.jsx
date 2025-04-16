import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-600 to-blue-600 text-white">
      <div className="flex flex-col items-center justify-center space-y-1 py-20 ">
        <h3 className="font-bold text-3xl md:text-4xl">
          <span className="text-blue-700">Auction</span>
          <span className="text-amber-400">Gallery</span>
        </h3>
        <p className="text-xl">Bid. Win. Own.</p>
        <div className="text-4xl">
          <a className="btn text-xl btn-ghost text-md">Home</a>
          <a className="btn btn-ghost text-md text-xl">Auctions</a>
          <a className="btn btn-ghost text-md text-xl">Categories</a>
          <a className="btn btn-ghost text-md text-xl">How to works</a>
        </div>
        <p className="text-base md:text-xl">
          &copy;2025 AuctionHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
