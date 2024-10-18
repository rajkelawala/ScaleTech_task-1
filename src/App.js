import React from "react";
import Forms from "./components/Forms";
import "./App.css";
import jsonData from "./formData.json";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      {/* Sidebar: Fixed to the left */}
      <Sidebar />

      {/* Main content: Navbar + Form */}
      <div className="flex flex-col flex-grow">
        <Navbar />
        <div className="flex-grow p-6 bg-white">
          <Forms jsonData={jsonData} />
        </div>
      </div>
    </div>
  );
}

export default App;
