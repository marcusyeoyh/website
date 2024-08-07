import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonalWebsite from "./pages/PersonalWebsite";
import Ticketing from "./pages/Ticketing";
import REHome from "./pages/REHome";
import Chatbot from "./pages/Chatbot";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/website" element={<PersonalWebsite />} />
      <Route path="/ticketing" element={<Ticketing />} />
      <Route path="/rehome" element={<REHome />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
};

export default AppRoutes;
