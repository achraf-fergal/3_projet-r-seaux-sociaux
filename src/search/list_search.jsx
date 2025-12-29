import Input from "./inut_search.jsx";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export function ListSearch() {
  const [search, setSearch] = useState("");

  const S = useSelector((state) => state.donner.searchParams);

  function addToSearchParams(value) {
    setSearch(value);
  }

  // LIKE %search%
  const filteredResults = S.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        background: "black",
        height: "95vh",
        width: "25vw",
        display: "flex",
        flexDirection: "column",
        textIndent: "3vw",
        paddingTop: "2rem",
        zIndex: 10001,
        position: "absolute",
      }}
    >
      <h3 style={{ textTransform: "uppercase", color: "white" }}>Search</h3>

      <Input onAdd={addToSearchParams} />

      <h3 style={{ color: "white" }}>RESULT</h3>

      {/* إذا كان input فارغ نعرض RECENT */}
      {search === "" ? (
        S.map((item, index) => (
          <div key={index}>
            <span style={{ color: "white" }}>{item}</span>
          </div>
        ))
      ) : filteredResults.length > 0 ? (
        filteredResults.map((item, index) => (
          <div key={index}>
            <span style={{ color: "lime" }}>{item}</span>
          </div>
        ))
      ) : (
        <span style={{ color: "red" }}>No results found</span>
      )}
    </div>
  );
}
