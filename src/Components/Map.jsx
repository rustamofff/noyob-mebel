import React, { useEffect, useState } from "react";
import axios from "axios";
import BaseUrl from "../config/url.jsx";

export default function Map() {
  // location api
  const [apiDataLocation, setApiDataLocation] = useState([]);
  const [isLoadingLokation, setIsLoadingLokation] = useState(true); // isLoading holatini qo'shdik

  useEffect(() => {
    axios
      .get(`${BaseUrl}/about/location/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:location", response.data);
        setApiDataLocation(response.data);
        setIsLoadingLokation(false); // Ma'lumotlar yuklandi, loadingni to'xtatish
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoadingLokation(false); // Xatolik yuz berganda ham loadingni to'xtatish
      });
  }, []);

  return (
    <div className="map_container">
      <div className="map_bg_img"></div>
      <div className="map_content">
        <div className="map_des">
          <h2>Bizning manzilimiz</h2>
          {apiDataLocation?.map((dataLocation) => {
            return <p>{dataLocation.title}</p>;
          })}
          <img
            className="mt-14"
            src="https://t4.ftcdn.net/jpg/05/16/67/95/360_F_516679579_Lq5cFuxPYTdX65OhInjMn8fcRBoVo5Sp.jpg"
            alt=""
          />
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps?q=41.250756169473405, 69.16386167855818&hl=uz&z=16&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

