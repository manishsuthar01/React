import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Services from "../Components/Services";
import Portfolio from "../Components/Portfolio";
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQ";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";
import { ContactForm } from "../Components/ContactForm";

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
      {/* <FAQ /> */}
      <CTA />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
