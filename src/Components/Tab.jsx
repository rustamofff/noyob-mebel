import React from "react";

export default function Tab({ tablist, onChange, active }) {
  const handleClick = (id) => {
    if (id !== active) {
      onChange(id);
    }
  };

  return (
    <div className="tabs">
      <div className="tab_navbar">
        {tablist.map((tab) => (
          <button
            key={tab.id}
            className={tab.id === active ? "active" : ""}
            onClick={() => handleClick(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}
