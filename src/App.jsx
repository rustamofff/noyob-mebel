import react from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Leyaut from "./Leyaut";
import ScrollToTop from "./Components/ScrollToTop";
import Yotoq from "./Pages/Yotoq";

import Shkaf from "./Pages/Shkaf";

import Diskaunt from "./Pages/Diskaunt";
import Prixoshka from "./Pages/Prixoshka";
import Parta from "./Pages/Parta";
import Tumba from "./Pages/Tumba";
import PodObuv from "./Pages/PodObuv";
import Category from "./Pages/Category";
import Details from "./Pages/Details";

function App() {
  return (
    <div className="app_container">
      <ScrollToTop />
      <Routes>
        <Route path="/" Component={Leyaut}>
          <Route path="/" Component={Home} />
          <Route path="/yotoqMebellar" Component={Yotoq} />
          <Route path="/shkaf" Component={Shkaf} />
          <Route path="/prixoshka" Component={Prixoshka} />
          <Route path="/partalar" Component={Parta} />
          <Route path="/tumba" Component={Tumba} />
          <Route path="/podObuv" Component={PodObuv} />
          <Route path="/diskaunt" Component={Diskaunt} />
          <Route path="/kategoriyalar" Component={Category} />
          <Route path="/details/:category/:id" Component={Details} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
