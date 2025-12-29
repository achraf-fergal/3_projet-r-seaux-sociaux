import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Button from "./nav.jsx";
import React from "react";
import { ListSearch } from "./search/list_search.jsx";
import { Post } from "./post/post";
function App() {
  return (
    <div>
      <Button />
      <Routes>
        <Route
          path="/"
          element={
            <h1>
              Home Page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="100"
                height="100"
              >
                <rect width="100" height="100" rx="16" ry="16" fill="#0072CE" />

                <path
                  d="M20,80 L40,20 L60,80 L80,20"
                  fill="none"
                  stroke="white"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h1>
          }
        />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        <Route path="/post" element={<Post />} />
      </Routes>
      {/* <ListSearch /> */}
    </div>
  );
}

export default App;
