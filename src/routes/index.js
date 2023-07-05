import { React, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home/home"));
const About = lazy(() => import("../pages/about/about"));
const Practice = lazy(() => import("../pages/practice/practice"));
const Contact = lazy(() => import("../pages/contact/contact"))
const Error = lazy(() => import("../components/error404"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default AppRoutes;
