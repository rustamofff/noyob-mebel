import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

export default function HomeCategory() {
  return (
    <div className="category_container">
      <div className="category_title">
        <h2>—— Kategoriyalar</h2>
      </div>
      <div
        className="category_content"
        style={{
          backgroundImage:
            "radial-gradient(circle at 13% 47%, rgba(140, 140, 140,0.03) 0%, rgba(140, 140, 140,0.03) 25%,transparent 25%, transparent 100%),radial-gradient(circle at 28% 63%, rgba(143, 143, 143,0.03) 0%, rgba(143, 143, 143,0.03) 16%,transparent 16%, transparent 100%),radial-gradient(circle at 81% 56%, rgba(65, 65, 65,0.03) 0%, rgba(65, 65, 65,0.03) 12%,transparent 12%, transparent 100%),radial-gradient(circle at 26% 48%, rgba(60, 60, 60,0.03) 0%, rgba(60, 60, 60,0.03) 6%,transparent 6%, transparent 100%),radial-gradient(circle at 97% 17%, rgba(150, 150, 150,0.03) 0%, rgba(150, 150, 150,0.03) 56%,transparent 56%, transparent 100%),radial-gradient(circle at 50% 100%, rgba(25, 25, 25,0.03) 0%, rgba(25, 25, 25,0.03) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 55% 52%, rgba(69, 69, 69,0.03) 0%, rgba(69, 69, 69,0.03) 6%,transparent 6%, transparent 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))",
        }}
      >
        <div className="category_card">
          <div className="category_card_overlay"></div>
          <div className="category_img">
            <img
              src="https://bsg-i.nbxc.com/product/4c/73/9e/5cdb27c2bce2089aba502ca3bd.jpg@95Q.webp"
              alt=""
            />
          </div>
          <div className="category_des">
            <h3 className="category_card_name">Yotoq xonasi to'plami</h3>
            <Link to="/yotoqMebellar" className="category_card_view">
              <span>Ko'rish </span>
              <span className="category_card_view_icon">
                <SlArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="category_card">
          <div className="category_card_overlay"></div>
          <div className="category_img">
            <img
              src="https://cdn0.divan.by/img/v1/CZFCooUwj3e7v9cu1lWmZciVHPNDafvkoBky_aw6b5Y/pd:0:0:0:0/rs:fill:1268:840:1:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ0ODM0MjAuanBn.jpg"
              alt=""
            />
          </div>
          <div className="category_des">
            <h3 className="category_card_name">Prixoshka</h3>
            <Link to="/prixoshka" className="category_card_view">
              <span>Ko'rish </span>
              <span className="category_card_view_icon">
                <SlArrowRight />
              </span>
            </Link>
          </div>
        </div>

        <div className="category_card">
          <div className="category_card_overlay"></div>
          <div className="category_img">
            <img
              src="https://images.prom.ua/2871831107_w1280_h640_mnogofunktsionalnyj-raspashnoj-shkaf.jpg"
              alt=""
            />
          </div>
          <div className="category_des">
            <h3 className="category_card_name">Shkaf</h3>
            <Link to="/shkaf" className="category_card_view">
              <span>Ko'rish </span>
              <span className="category_card_view_icon">
                <SlArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="category_card">
          <div className="category_card_overlay"></div>
          <div className="category_img">
            <img
              src="https://frankfurt.apollo.olxcdn.com/v1/files/9ep3kxeqwnhw2-UZ/image"
              alt=""
            />
          </div>
          <div className="category_des">
            <h3 className="category_card_name">Partalar</h3>
            <Link to="/partalar" className="category_card_view">
              <span>Ko'rish </span>
              <span className="category_card_view_icon">
                <SlArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="category_card">
          <div className="category_card_overlay"></div>
          <div className="category_img">
            <img
              src="https://images.uzum.uz/co3vv16pom4ma10rkui0/original.jpg"
              alt=""
            />
          </div>
          <div className="category_des">
            <h3 className="category_card_name">Tumba</h3>
            <Link to="/tumba" className="category_card_view">
              <span>Ko'rish </span>
              <span className="category_card_view_icon">
                <SlArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="category_card">
          <div className="category_card_overlay"></div>
          <div className="category_img">
            <img
              src="https://images.prom.ua/3920303138_w200_h200_tumba-pod-obuv.jpg"
              alt=""
            />
          </div>
          <div className="category_des">
            <h3 className="category_card_name">Oyoq kiyim qo'ygich</h3>
            <Link to="/podObuv" className="category_card_view">
              <span>Ko'rish </span>
              <span className="category_card_view_icon">
                <SlArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
