// import React from "react";
// import { FaPhoneAlt } from "react-icons/fa";
// import { GiHamburgerMenu } from "react-icons/gi";

// export default function Header() {
//   return (
//     <div className="header_container">
//       <div className="header_content">
//         <div className="header_menu">
//           <span>
//             <GiHamburgerMenu />
//           </span>
//         </div>
//         <div className="header_logo">
//           <img
//             src="	https://kengmakon.uz/local/templates/km/media/images/logokengmakon.png"
//             alt=""
//           />
//         </div>
//         <div className="header_element">
//           <div className="header_icons">
//             <span>
//               <FaPhoneAlt />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RxArrowBottomLeft } from "react-icons/rx";
import { Link } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../config/url";

import logoImg from "../../public/images/logo.png";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsCategoryOpen(false);
  };

  const openCategory = () => {
    setIsCategoryOpen(true);
  };

  const closeCategory = () => {
    setIsCategoryOpen(false);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsCategoryOpen(false);
  };

  // apilar

  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // isLoading holatini qo'shdik

  useEffect(() => {
    axios
      .get(`${BaseUrl}/about/connection/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:Headerconnection", response.data);
        setApiData(response.data);
        setIsLoading(false); // Ma'lumotlar yuklandi, loadingni to'xtatish
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false); // Xatolik yuz berganda ham loadingni to'xtatish
      });
  }, []);

  return (
    <div className="header_container">
      <div className="header_content">
        <div className="header_menu" onClick={toggleSidebar}>
          <span>
            <GiHamburgerMenu />
          </span>
        </div>
        <div className="header_logo">
          <Link to="/">
            <img src={logoImg} alt="Logo" />
          </Link>
        </div>
        <div className="header_element">
          <div className="header_icons">
            {apiData?.map((contact) => {
              return (
                <span>
                  <a
                    href={`tel:${contact.telefon}`}
                    class="fa-solid fa-phone fa-shake"
                  ></a>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`sidebar_overlay ${isSidebarOpen ? "visible" : ""}`}
        onClick={closeSidebar}
      >
        <div
          className={`sidebar ${isSidebarOpen ? "open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sidebar_content">
            {!isCategoryOpen ? (
              <>
                <div className="sidebar_logo">
                  <Link to="/">
                    <img src={logoImg} alt="" />
                  </Link>
                </div>
                <div className="sidebar_close" onClick={closeSidebar}>
                  <span className="sidebar_close_icon">
                    <IoMdClose />
                  </span>
                  <span>Menu</span>
                </div>
                {/* <div className="sidebar_header">
                  <Link to="/">Asosiy oyna</Link>
                </div> */}
                <div className="sidebar1_item">
                  <Link to="/">Asosiy oyna</Link>
                </div>
                <div className="sidebar1_item" onClick={openCategory}>
                  Kategoriyalar
                </div>
                <div className="sidebar1_item">
                  <Link to="/diskaunt">Chegirmadagi mebellar</Link>
                </div>
                <div className="sidebar1_item flex justify-center items-center gap-5">
                  <span>A'loqa</span>{" "}
                  <span className="font-semibold">
                    <RxArrowBottomLeft />
                  </span>
                </div>
                {/* <div className="sidebar_item">Kategoriya4</div> */}
                {apiData?.map((contactSidebar) => {
                  return (
                    <div className="sidebar_call">{contactSidebar.telefon}</div>
                  );
                })}
              </>
            ) : (
              <div className="category_sidebar open">
                <div className="sidebar_header" onClick={closeCategory}>
                  <span>
                    <FaLongArrowAltLeft />
                  </span>
                  <span>Orqaga</span>
                </div>
                <div className="category_content">
                  <div className="sidebar_item">
                    <Link to="/yotoqMebellar">Yotoq xonasi to'plami</Link>
                  </div>
                  <div className="sidebar_item">
                    <Link to="/prixoshka">Prixoshka</Link>
                  </div>
                  <div className="sidebar_item">
                    <Link to="/shkaf">Shkaf </Link>
                  </div>
                  <div className="sidebar_item">
                    <Link to="/partalar">Partalar</Link>
                  </div>
                  <div className="sidebar_item">
                    <Link to="/tumba">Tumba</Link>
                  </div>
                  <div className="sidebar_item">
                    <Link to="/podObuv">Oyoq kiyim qo'ygich</Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
