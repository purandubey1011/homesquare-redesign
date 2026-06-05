import { Route, Routes } from "react-router-dom";
import SitePage from "./pages/SitePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SitePage />} />
      <Route path="/about" element={<SitePage />} />
      <Route path="/why-homesquare" element={<SitePage />} />
      <Route path="/leasing" element={<SitePage />} />
      <Route path="/one-stop-interior-destination" element={<SitePage />} />
      <Route path="/amenities" element={<SitePage />} />
      <Route path="/brands" element={<SitePage />} />
      <Route path="/gallery" element={<SitePage />} />
      <Route path="/awards-recognition" element={<SitePage />} />
      <Route path="/project-updates" element={<SitePage />} />
      <Route path="/blog" element={<SitePage />} />
      <Route path="/contact-us" element={<SitePage />} />
      <Route path="*" element={<SitePage />} />
    </Routes>
  );
};

export default App;
