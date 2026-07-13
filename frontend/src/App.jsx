import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import WhyHomeSquare from "./components/WhyHomeSquare/WhyHomeSquare.jsx";
import Leasing from "./components/Leasing/Leasing.jsx";
import OneStopDestination from "./components/OneStopDestination/OneStopDestination.jsx";
import Amenities from "./components/Amenities/Amenities.jsx";
import Brands from "./components/Brands/Brands.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Awards from "./components/Awards/Awards.jsx";
import ProjectUpdates from "./components/ProjectUpdates/ProjectUpdates.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Contact from "./components/Contact/Contact.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/why-homesquare" element={<WhyHomeSquare />} />
      <Route path="/leasing" element={<Leasing />} />
      <Route path="/one-stop-interior-destination" element={<OneStopDestination />} />
      <Route path="/amenities" element={<Amenities />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/awards-recognition" element={<Awards />} />
      <Route path="/project-updates" element={<ProjectUpdates />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
