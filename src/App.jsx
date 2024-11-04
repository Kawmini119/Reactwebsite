//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import BenefitsSection from "./components/BenifitsSection";
import ProjectLibrary from "./components/ProjectLibrary";
import Blog from "./components/Blog";
import FAQ from "./components/Faq";
import Contact from "./components/Contact";
import NewsletterSubscription from "./components/Newsletter";

function App() {
  return (
    <Router>
      <div className="bg-beige min-h-screen font-sans flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow pt-16">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainContent />
                  <BenefitsSection />
                </>
              }
            />
            <Route path="/projects" element={<ProjectLibrary />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/newsletter" element={<NewsletterSubscription />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
