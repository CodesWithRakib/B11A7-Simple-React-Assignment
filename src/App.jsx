import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Auctions from "./components/Auctions";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const notify = () => toast("Item added to your favorite list!");
  const notifyRemove = () => toast("Item remove from your favorite list!");
  return (
    <>
      <header className="max-w-screen-2xl mx-auto p-2 ">
        <Navbar></Navbar>
        <Banner></Banner>
      </header>

      <ToastContainer />
      <main>
        <Auctions notifyRemove={notifyRemove} notify={notify}></Auctions>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
