import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function Home() {
  return (
    <div className="grid grid-cols-10 grid-rows-10 h-screen">
      <Navbar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default Home;
