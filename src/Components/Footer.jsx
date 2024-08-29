import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import BaseUrl from "../config/url.jsx";

import axios from "axios";

// import img
import footerLogo from "../../public/images//logo.png";

export default function Footer() {
  // open modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const cardNumber = "8600 0607 6438 6000";
  const cardHolder = "Shokirjonova Lazokat";

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalVisible(true);
    }, 10); // Bir oz kechikish modalni sekin tushib kelishini ta'minlaydi
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300); // Animatsiya vaqti bilan bir xil
  };

  const copyCardNumber = () => {
    navigator.clipboard
      .writeText(cardNumber)
      .then(() => {
        alert("Karta raqami nusxalandi!");
        closeModal();
      })
      .catch((err) => {
        console.error("Nusxalashda xato yuz berdi:", err);
      });
  };

  // function openAlertCard1() {
  //   const cardNumber = "9860 1201 0128 3857";
  //   const cardHolder = "Nodir Rustamov";
  //   const message = `${cardNumber}\n${cardHolder}\n\nKarta raqami nusxalandi!`;

  //   // Karta raqamini clipboardga nusxalash
  //   navigator.clipboard
  //     .writeText(cardNumber)
  //     .then(() => {
  //       alert(message);
  //     })
  //     .catch((err) => {
  //       console.error("Nusxalashda xato yuz berdi:", err);
  //     });
  // }

  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // isLoading holatini qo'shdik

  useEffect(() => {
    axios
      .get(`${BaseUrl}/about/connection/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:connection", response.data);
        setApiData(response.data);
        setIsLoading(false); // Ma'lumotlar yuklandi, loadingni to'xtatish
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false); // Xatolik yuz berganda ham loadingni to'xtatish
      });
  }, []);

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
    <>
      <div className="footer_container_top">
        <div className="footer_top">
          {" "}
          <div className="footer_logo">
            <img src={footerLogo} alt="" />
          </div>
          <div className="footer_category">
            <h2>Kategoriyalar</h2>
            <li>
              <Link to="/yotoqMebellar">Yotoq xonasi to'plami</Link>
            </li>
            <li>
              <Link to="/prixoshka">Prixoshka</Link>
            </li>
            <li>
              <Link to="/shkaf">Shkaf</Link>
            </li>
            <li>
              <Link to="/partalar">Partalar</Link>
            </li>
            <li>
              <Link to="/tumba">Tumba</Link>
            </li>
            <li>
              <Link to="/podObuv">Oyoq kiyim qo'ygich</Link>
            </li>
          </div>
          <div className="footer_contact">
            <h2>Kontaktlar</h2>
            {apiData?.response?.map((dataConnect) => {
              return (
                <div className="footer_contact_des">
                  <p>{dataConnect.telefon}</p>
                  {apiDataLocation?.map((dataLocation) => {
                    return (
                      <p className="footer_contact_adress">
                        {dataLocation.title}
                      </p>
                    );
                  })}

                  <p className="footer_contact_email">{dataConnect.email}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer_container_bottom">
        <div className="footer_bottom">
          <div className="footer_social_content">
            <h2>Ijtimoiy tarmoqlar</h2>
            {apiData?.response?.map((dataSokial) => {
              return (
                <div className="footer_social">
                  <a
                    href={dataSokial.facebook}
                    target="_blank"
                    className="footer_social_icon"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href={dataSokial.instagram}
                    target="_blank"
                    className="footer_social_icon"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={`https://t.me/${dataSokial.telegram}`}
                    target="_blank"
                    className="footer_social_icon"
                  >
                    <BiLogoTelegram />
                  </a>
                </div>
              );
            })}
          </div>
          <div className="footer_card_content">
            <h2>Kartalar</h2>
            <div className="footer_card">
              <div className="footer_card_img" onClick={openModal}>
                <img
                  src="https://kengmakon.uz/local/templates/km/media/images/socials/visa.png"
                  alt="Visa"
                />
              </div>

              {isModalOpen && (
                <div className={`modal ${isModalVisible ? "visible" : ""}`}>
                  <div className="modal-content">
                    <p>
                      Karta raqami: <strong>{cardNumber}</strong>
                    </p>
                    <p>
                      Karta egasi: <strong>{cardHolder}</strong>{" "}
                    </p>
                    <button className="modal-button" onClick={copyCardNumber}>
                      Nusxalash
                    </button>
                  </div>
                </div>
              )}
              {/* <div className="footer_card_img" onClick={openAlertCard1}>
                <img
                  src="https://kengmakon.uz/local/templates/km/media/images/socials/master-card.png"
                  alt=""
                />
              </div>
              <div className="footer_card_img" onClick={openAlertCard1}>
                <img
                  src="	https://kengmakon.uz/local/templates/km/media/images/socials/visa.png"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
