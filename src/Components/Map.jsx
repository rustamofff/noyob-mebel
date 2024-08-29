import React from "react";

export default function Map() {
  return (
    <div className="map_container">
      <div className="map_bg_img"></div>
      <div className="map_content">
        <div className="map_des">
          <h2>Bizning manzilimiz</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi
            vero quibusdam fuga rem, sit doloribus pariatur asperiores incidunt
            quod. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente at beatae velit nemo quia voluptatum ut qui commodi fugit
            rerum!
          </p>
          <img
            src="https://t4.ftcdn.net/jpg/05/16/67/95/360_F_516679579_Lq5cFuxPYTdX65OhInjMn8fcRBoVo5Sp.jpg"
            alt=""
          />
        </div>
        <div className="map">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d561.933213115911!2d69.16312205407445!3d41.2506911935557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1724655221384!5m2!1suz!2s"
            width="600"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
          41.250756169473405, 69.16386167855818
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

// import React from "react";

// export default function Map() {
//   return (
//     <div className="map_container" style={{ display: "flex" }}>
//       <div className="map_content" style={{ width: "50%" }}>
//         <div className="map_des">
//           <h2>Tarix instituti qoshidagi chap buyulishida joylashgan xata</h2>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi
//             vero quibusdam fuga rem, sit doloribus pariatur asperiores incidunt
//             quod.
//           </p>
//         </div>
//       </div>
//       <div className="map" style={{ width: "50%" }}>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.0474003043071!2d69.28320783650307!3d41.30532083747785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b73b9820993%3A0x3c81adf1b148c23d!2sO&#39;z%20R%20FA%20Tarix%20instituti!5e0!3m2!1suz!2s!4v1724159887723!5m2!1suz!2s"
//           width="600"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// }
