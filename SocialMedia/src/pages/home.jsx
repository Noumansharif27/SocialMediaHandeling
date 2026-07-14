import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="grid grid-col">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default Home;
