import React, { useState } from "react";
import About from "../About/index";
import Home from "../Home/index";
import Resume from "../Resume/index";
import Portfolio from "../Portfolio/index";
//import Contact from "../Contact/index";
import NavTabs from "../NavTabs";
import Header from "../Header";
import Footer from "../Footer";

export default function Page() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    //return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}