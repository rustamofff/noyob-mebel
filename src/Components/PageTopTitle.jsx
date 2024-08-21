import React from "react";
import { Link } from "react-router-dom";

export default function PageTopTitle({ pageName_1 }) {
  return (
    <div className="page_top_container">
      <div className="page_title">
        <h2>{pageName_1}</h2>
      </div>
      <div className="page_backspase">
        <span className="pageToHome">
          <Link to="/">Asosiy oyna</Link>
        </span>
        <span>•</span>
        <span className="category">
          <Link to="/kategoriyalar">Kategoriyalar</Link>
        </span>
        <span>•</span>
        <span className="page_name">{pageName_1}</span>
      </div>
    </div>
  );
}
