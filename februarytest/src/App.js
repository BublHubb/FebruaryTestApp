import React, { useState, useEffect } from "react";
import MealData from "./Data";
import MealList from "./MealList";

import Sidebar from "./Sidebar";
import "./App.css";

function App() {
  return (
    <>
      <h1>Popular Dishes</h1>
      <div className="app__body">
        <MealList />
      </div>
    </>
  );
}

export default App;
