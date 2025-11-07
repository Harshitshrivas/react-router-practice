import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Notfound from "./Pages/Notfound";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import Courses from "./Pages/Courses";
import Coursedetail from "./Pages/Coursedetail";

const App = () => {
  return (
    <div className=" flex flex-col min-h-screen  bg-black text-white">
      <Navbar />

      <main className="grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/course/:id" element={<Coursedetail />} />
          <Route path="/product" element={<Product />}>
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="kids" element={<Kids />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
