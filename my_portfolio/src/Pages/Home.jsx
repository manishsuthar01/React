import React from "react";
import Hero from "../Components/Hero";
import Skills  from "../Components/Skills"
import Footer from "../Components/Footer";
import Services from "../Components/Services";
import Testimonials from "../Components/Testimonials";
import Project from "../Components/Project";
import Experience from "../Components/Experience";
import  Contact  from "../Components/Contact";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Skills />
      <Experience />
      <Services/>
      <Project/>
      <Testimonials/>
      <Contact/>  
      <Footer/>
    </div>
  );
};

export default Home;
  