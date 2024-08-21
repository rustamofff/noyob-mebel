import React from "react";
import { Link } from "react-router-dom";

export default function YotoqDiskaunt({ apiData, category }) {
  return (
    <>
      <section class="bg-white dark:bg-gray-900 mb-10">
        <div class="container px-3  mx-auto">
          <div class="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            {/* card */}
            {apiData.map((diskauntData) => {
              return (
                <div
                  class="relative shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl lg:flex overflow-hidden"
                  key={diskauntData.id}
                >
                  <img
                    class="object-cover w-full h-56 rounded-lg lg:w-64"
                    src={diskauntData.image}
                    alt=""
                  />

                  <div class="diskaunt_card_des flex flex-col justify-between px-3 py-6  lg:mx-6">
                    <a
                      href=""
                      class="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                    >
                      <Link to={`/details/${category}/${diskauntData.id}`}>
                        {diskauntData.name}
                      </Link>
                    </a>

                    <p class="text-sm text-gray-500 dark:text-gray-300">
                      <span className="text-red-600 font-semibold text-2xl mt-6">
                        {diskauntData.price}
                      </span>
                      so'm
                    </p>
                  </div>
                  <div className="aksiya absolute  top-16 -left-5">
                    <p className="bg-red-600 text-white  font-semibold  transform -rotate-45 origin-top-left w-28 text-center">
                      Aksiya
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
