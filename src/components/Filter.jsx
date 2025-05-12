import React, { useState } from "react";

export const Filter = ({ setFilter }) => {
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setCurrentFilter(filter);
    setFilter(filter);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        height: "32px",
        marginBlock: "20px",
        paddingRight: "141px",
      }}
    >
      {["all", "active", "completed"].map((filter, index) => (
        <div key={index}>
          <button
            style={{
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "bold",
              borderRadius: "6px",
              paddingInline: "12px",
              textTransform: "capitalize",
              height: "30px",
              backgroundColor: currentFilter === filter ? "#3c82f6" : "#ddd",
              color: currentFilter === filter ? "white" : "black",
            }}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        </div>
      ))}
    </div>
  );
};
