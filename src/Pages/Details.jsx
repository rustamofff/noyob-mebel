import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BaseUrl from "../config/url.jsx";
import Spinner from "../Components/Spinner";

export default function Details() {
  //  Image state
  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);

  //  api olish
  const { category, id } = useParams();
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    axios
      .get(`${BaseUrl}/category/${category}/${id}/`)
      .then((response) => {
        const data = response.data;
        setDetailData(data);
        setMainImage(data.image); // Asosiy rasmni o'rnatish
        setImages(data.images); // Kichik rasmlarni o'rnatish
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      });
  }, [category, id]);

  // apilar contact
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // isLoading holatini qo'shdik

  useEffect(() => {
    axios
      .get(`${BaseUrl}/about/connection/`)
      .then((response) => {
        console.log("Kelgan ma'lumot:Detailconnection", response.data);
        setApiData(response.data);
        setIsLoading(false); // Ma'lumotlar yuklandi, loadingni to'xtatish
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setIsLoading(false); // Xatolik yuz berganda ham loadingni to'xtatish
      });
  }, []);

  if (!detailData)
    return (
      <div>
        <Spinner />
      </div>
    );

  const changeImage = (src) => {
    setMainImage(src);
  };

  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage:
            "radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgba(60, 60, 60,0.03) 0%, rgba(60, 60, 60,0.03) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgba(150, 150, 150,0.03) 0%, rgba(150, 150, 150,0.03) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))",
        }}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            {/* <!-- Product Images --> */}
            <div className="relative overflow-hidden w-full md:w-1/2 px-4 mb-8">
              <img
                src={mainImage}
                alt="Product"
                className=" w-full object-contain  rounded-lg shadow-md mb-4"
                style={{ height: "65vh" }}
                id="mainImage"
              />
              {detailData.skidka && (
                <div className="aksiya absolute top-20 -left-5">
                  <p className="bg-red-600 text-white font-semibold transform -rotate-45 origin-top-left w-36 text-center py-1">
                    Aksiya
                  </p>
                </div>
              )}
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img.image}
                    alt={`Thumbnail ${index + 1}`}
                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                    onClick={() => changeImage(img.image)}
                  />
                ))}
              </div>
            </div>

            {/* <!-- Product Details --> */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{detailData.name}</h2>
              <p className="text-gray-600 mb-4">Boyi: {detailData.boyi}</p>
              <p className="text-gray-600 mb-4">Eni: {detailData.eni}</p>

              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">
                  {detailData.price} UZS
                </span>
                {detailData.skidka && (
                  <span className="text-gray-500 line-through">
                    {/* discountni hisoblash yoki eski narxni ko'rsatish */}
                    {/* Bu yerda oldingi narxni dinamik ko'rsatishingiz mumkin */}
                  </span>
                )}
              </div>
              <p className="text-gray-700 mb-6">{detailData.description}</p>

              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                {apiData?.map((detailContaact) => {
                  return (
                    <a href={`tel:${detailContaact.telefon}`}>Bog'lanish</a>
                  );
                })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
