import React, from "react";
import PageContent from "../PageContent";
import About from "../About";
import Resume from "../Resume";
import Projects from "../Portfolio";
import Contact from "../Contact";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };
}

export default Page;
