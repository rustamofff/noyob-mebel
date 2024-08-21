import React, { useEffect, useState } from "react";
import CategoryCard from "../Components/CategoryCard";
import PageTopTitle from "../Components/PageTopTitle";
import Spinner from "../Components/Spinner";
import Empty from "../Components/Empty";
import BaseUrl from "../config/url.jsx";

import axios from "axios";

export default function Yotoq() {
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // isLoading holatini qo'shdik

  useEffect(() => {
    axios
      .get(`${BaseUrl}/category/prixoshka/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:Prixoshka", response.data);
        setApiData(response.data);
        setIsLoading(false); // Ma'lumotlar yuklandi, loadingni to'xtatish
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false); // Xatolik yuz berganda ham loadingni to'xtatish
      });
  }, []);

  return (
    <div>
      <PageTopTitle pageName_1="Prixoshka" />
      <div>
        {isLoading ? (
          <Spinner />
        ) : apiData?.length > 0 ? (
          <CategoryCard apiData={apiData} category="prixoshka" />
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}
