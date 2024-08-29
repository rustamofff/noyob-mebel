import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import Spinner from "../Components/Spinner";
import Empty from "../Components/Empty";
import DiskauntCard from "../Pages/DiskauntCard";
import axios from "axios";
import BaseUrl from "../config/url.jsx";

export default function HomeDiskaunt() {
  const [isLoading, setIsLoading] = useState(true);

  // apilar
  // yotoq mebellari api
  const [apiDataYotoq, setApiDataYotoq] = useState([]);
  useEffect(() => {
    axios
      .get(`${BaseUrl}/category/kravat/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:", response.data);

        // Agar response.data massiv bo'lmasa, uni massivga aylantirish
        const dataArray = Array.isArray(response.data)
          ? response.data
          : [response.data];

        // Faqat skidka true bo'lgan ma'lumotlarni ajratib olish
        const filteredData = dataArray.filter((item) => item.skidka === true);
        setApiDataYotoq(filteredData);
        console.log("Kelgan ma'lumot: skidka", filteredData);

        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false);
      });
  }, []);

  // Prixoshka api
  const [apiDataPrixoshka, setApiDataPrixoshka] = useState([]);
  useEffect(() => {
    axios
      .get(`${BaseUrl}/category/prixoshka/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:", response.data);
        // Faqat skidka true bo'lgan ma'lumotlarni ajratib olish
        const filteredData = response.data.filter(
          (item) => item.skidka === true
        );
        setApiDataPrixoshka(filteredData);
        console.log("Kelgan ma'lumot:skidka", response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false);
      });
  }, []);

  // Shkaf api
  const [apiDataShkaf, setApiDataShkaf] = useState([]);
  useEffect(() => {
    axios
      .get(`${BaseUrl}/category/shkaf/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:", response.data);
        // Faqat skidka true bo'lgan ma'lumotlarni ajratib olish
        const filteredData = response.data.filter(
          (item) => item.skidka === true
        );
        setApiDataShkaf(filteredData);
        console.log("Kelgan ma'lumot:skidka", response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false);
      });
  }, []);

  //Parta api
  const [apiDataParta, setApiDataParta] = useState([]);
  useEffect(() => {
    axios
      .get(`${BaseUrl}/category/parta/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:", response.data);
        // Faqat skidka true bo'lgan ma'lumotlarni ajratib olish
        const filteredData = response.data.filter(
          (item) => item.skidka === true
        );
        setApiDataParta(filteredData);
        console.log("Kelgan ma'lumot:skidka", response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false);
      });
  }, []);

  // Tumba api
  const [apiDataTumba, setApiDataTumba] = useState([]);
  useEffect(() => {
    axios
      .get(`${BaseUrl}/category/tumba/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:", response.data);
        // Faqat skidka true bo'lgan ma'lumotlarni ajratib olish
        const filteredData = response.data.filter(
          (item) => item.skidka === true
        );
        setApiDataTumba(filteredData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false);
      });
  }, []);

  // PodObuv api
  const [apiDataPodobuv, setApiDataPodobuv] = useState([]);
  useEffect(() => {
    axios
      .get(`${BaseUrl}/category/podobuv/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:", response.data);
        // Faqat skidka true bo'lgan ma'lumotlarni ajratib olish
        const filteredData = response.data.filter(
          (item) => item.skidka === true
        );
        setApiDataPodobuv(filteredData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false);
      });
  }, []);

  // Tab settings
  const [activeTab, setActiveTab] = useState(1);
  const tablist = [
    { id: 1, title: "Yotoq mebellari" },
    { id: 2, title: "Prixoshka" },
    { id: 3, title: "Shkaf" },
    { id: 4, title: "Partalar" },
    { id: 5, title: "Tumba" },
    { id: 6, title: "Oyoq kim qo'ygich" },
  ];
  const onChangeTab = (id) => {
    setActiveTab(id);
  };

  const Mains = () => {
    switch (activeTab) {
      case 1:
        return (
          <div>
            {isLoading ? (
              <Spinner />
            ) : apiDataYotoq?.length > 0 ? (
              <DiskauntCard apiData={apiDataYotoq} category="kravat" />
            ) : (
              <Empty />
            )}
          </div>
        );
      case 2:
        return (
          <div>
            {isLoading ? (
              <Spinner />
            ) : apiDataYotoq?.length > 0 ? (
              <DiskauntCard apiData={apiDataPrixoshka} category="prixoshka" />
            ) : (
              <Empty />
            )}
          </div>
        );
      case 3:
        return (
          <div>
            {isLoading ? (
              <Spinner />
            ) : apiDataYotoq?.length > 0 ? (
              <DiskauntCard apiData={apiDataShkaf} category="shkaf" />
            ) : (
              <Empty />
            )}
          </div>
        );
      case 4:
        return (
          <div>
            {isLoading ? (
              <Spinner />
            ) : apiDataYotoq?.length > 0 ? (
              <DiskauntCard apiData={apiDataParta} category="parta" />
            ) : (
              <Empty />
            )}
          </div>
        );
      case 5:
        return (
          <div>
            {isLoading ? (
              <Spinner />
            ) : apiDataYotoq?.length > 0 ? (
              <DiskauntCard apiData={apiDataTumba} category="tumba" />
            ) : (
              <Empty />
            )}
          </div>
        );
      case 6:
        return (
          <div>
            {isLoading ? (
              <Spinner />
            ) : apiDataYotoq?.length > 0 ? (
              <DiskauntCard apiData={apiDataPodobuv} category="podobuv" />
            ) : (
              <Empty />
            )}
          </div>
        );
    }
  };

  return (
    <div className="home_diskaunt_container">
      <div className="dikaunt_title">
        <h2>Chegirmadagi mebellar</h2>
        <div className="diskaunt_tab">
          <Tab onChange={onChangeTab} active={activeTab} tablist={tablist} />
        </div>
      </div>
      <div className="home_diskaunt_content">
        <Mains />
      </div>
    </div>
  );
}
