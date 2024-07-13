"use client";

import React, { useEffect, useState } from "react";
import "./App.css";
import Team from "./faq";
import logo from "./iitklogo.png";
import Contactus from "./contactus";
import Statistics from "./Statistics";
import Faq from "./team";
import Image from "next/image";
import Link from "next/link";
const App: React.FC = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <HeroSection />
      <About />
      <Statistics />
      <ExpertiseSection />

      {/* <Programs /> */}
      <Faq />
      <Team />
      <Contactus />
      <Footer />
    </div>
  );
};

interface HeaderProps {
  handleSignInClick: () => void;
}

const Header: React.FC = ({}) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Image src={logo} className="navbar-logo" alt="logo" />
        <span className="navbar-title">IIT Kanpur</span>
      </div>
      <ul className="navbar-links">
        <li className="navbar-link"><Link href="#hero">HOME</Link></li>
        <li className="navbar-link"><Link href="#about">ABOUT</Link></li>
        <li className="navbar-link"><Link href="#expertise-section">EXPERTISE</Link></li>
        <li className="navbar-link"><Link href="#faq">FAQ</Link></li>
        <li className="navbar-link"><Link href="#team">TEAM</Link></li>
        <li className="navbar-link"><Link href="#contact">CONTACT</Link></li>
      </ul>
      <div className="navbar-right">
      <Link href="/auth/login"> <button className="sign-in-button">Sign In</button></Link>
      </div>
    </nav>
  );
};

interface Testimonial {
  id: number;
  name: string;
  text: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      text: "This program was a life-changing experience.",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "I learned so much about different cultures.",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "Alice Johnson",
      text: "An amazing opportunity to grow both personally and professionally.",
      image: "https://via.placeholder.com/80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // Change testimonial every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="testimonials-section">
      {/* <h2>Testimonials</h2> */}
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.text}</p>
            <h3>{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const HeroSection: React.FC = () => {
  useEffect(() => {
    const textContainer = document.querySelector(".animated-text");
    const texts = ["to provide international exposure."];
    let textIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let isRewriting = false;
    let deleteStartIndex = 0;

    function type() {
      const currentString = texts[textIndex];
      const words = currentString.split(" ");

      if (!isDeleting && !isRewriting) {
        if (charIndex < currentString.length) {
          currentText += currentString.charAt(charIndex);
          charIndex++;
          textContainer.textContent = currentText;
          setTimeout(type, 100);
        } else {
          isDeleting = true;
          deleteStartIndex = currentText.lastIndexOf(words.slice(-3).join(" "));
          setTimeout(type, 2000);
        }
      } else if (isDeleting && !isRewriting) {
        if (currentText.length > deleteStartIndex) {
          currentText = currentText.slice(0, -1);
          textContainer.textContent = currentText;
          setTimeout(type, 50);
        } else {
          isRewriting = true;
          charIndex = deleteStartIndex;
          setTimeout(type, 1000);
        }
      } else if (isRewriting) {
        if (charIndex < currentString.length) {
          currentText += currentString.charAt(charIndex);
          charIndex++;
          textContainer.textContent = currentText;
          setTimeout(type, 100);
        } else {
          isDeleting = false;
          isRewriting = false;
          textIndex = (textIndex + 1) % texts.length;
          currentText = "";
          charIndex = 0;
          setTimeout(type, 2000);
        }
      }
    }

    type();

    const handleScroll = () => {
      const heroSection = document.querySelector("#hero");
      const scrollPosition = window.pageYOffset;
      heroSection.style.backgroundPositionY = `${-scrollPosition * 0.5}px`; // Adjust the factor for the desired smoothness
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Welcome to the Foreign Exposure Program</h1>
        <div className="hero-explore">
          Explore new opportunities and expand your horizons with our unique
          programs designed
        </div>
        <div className="animated-text"></div>
        <button className="btn">Apply now</button>
      </div>
      <Testimonials />
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about">
      <div style={{ textAlign: "center" }}>
        <img
          src="map.png"
          alt="Map Image"
          style={{ maxWidth: "100%", maxHeight: "110px" }}
        />
      </div>
      <h2 style={{ fontSize: "2.5rem" }}>About Us</h2>
      <p className="about-description">
        The Foreign Exposure Program is dedicated to offering comprehensive
        international experiences that enrich personal and professional growth.
        Our programs are crafted to provide immersive exposure to different
        cultures, industries, and educational systems.
      </p>
    </section>
  );
};

const ExpertiseSection: React.FC = () => {
  useEffect(() => {
    const textContainer2 = document.querySelector(".animated-text2");
    const texts2 = ["academics and its unparalleled faculty."];
    let textIndex2 = 0;
    let charIndex2 = 0;
    let currentText2 = "";
    let isDeleting2 = false;
    let isRewriting2 = false;
    let deleteStartIndex2 = 0;

    function type2() {
      const currentString2 = texts2[textIndex2];
      const words2 = currentString2.split(" ");

      if (!isDeleting2 && !isRewriting2) {
        if (charIndex2 < currentString2.length) {
          currentText2 += currentString2.charAt(charIndex2);
          charIndex2++;
          textContainer2.textContent = currentText2;
          setTimeout(type2, 100);
        } else {
          isDeleting2 = true;
          deleteStartIndex2 = currentText2.lastIndexOf(
            words2.slice(-3).join(" ")
          );
          setTimeout(type2, 2000);
        }
      } else if (isDeleting2 && !isRewriting2) {
        if (currentText2.length > deleteStartIndex2) {
          currentText2 = currentText2.slice(0, -1);
          textContainer2.textContent = currentText2;
          setTimeout(type2, 50);
        } else {
          isRewriting2 = true;
          charIndex2 = deleteStartIndex2;
          setTimeout(type2, 1000);
        }
      } else if (isRewriting2) {
        if (charIndex2 < currentString2.length) {
          currentText2 += currentString2.charAt(charIndex2);
          charIndex2++;
          textContainer2.textContent = currentText2;
          setTimeout(type2, 100);
        } else {
          isDeleting2 = false;
          isRewriting2 = false;
          textIndex2 = (textIndex2 + 1) % texts2.length;
          currentText2 = "";
          charIndex2 = 0;
          setTimeout(type2, 2000);
        }
      }
    }

    type2();
  }, []);

  return (
    <section id="expertise-section">
      <div className="content">
        <div className="intro-text">
          <p>
            <h2>Our Expertise:</h2> IIT Kanpur has 14 Undergraduate departments
            and 15 Postgraduate departments, each having a great talent pool
            honed to suit the needs of academia by our excellent
          </p>
          <p className="animated-text2"></p>
        </div>
        <div className="departments">
          <p>The departments are:</p>
          <ul>
            <li>Aerospace Engineering</li>
            <li>Biological Sciences and Bioengineering</li>
            <li>Chemical Engineering</li>
            <li>Chemistry</li>
            <li>Civil Engineering</li>
            <li>Cognitive Sciences</li>
            <li>Computer Science and Engineering</li>
            <li>Desgin </li>
            <li>Earth Sciences</li>
            <li>Economics</li>
            <li>Electrical Engineering</li>
            <li>Material Science and Engineering</li>
            <li>Mathematics and Scientific Computing</li>
            <li>Mechanical Engineering</li>
            <li>Mba</li>
            <li>Physics</li>
            <li>Statistics and Data Science</li>
            <li>Nuclear Engineering and Technology</li>
            <li>Photonics Science and Engineering</li>
            <li>Sustainable Energy Engineering</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Programs: React.FC = () => {
  return (
    <section id="programs">
      <h2>Our Programs</h2>
      <div className="programs-container">
        <div className="program">
          <h3>Program One</h3>
          <p>
            An immersive cultural experience in Europe, exploring historical
            landmarks and contemporary innovations.
          </p>
        </div>
        <div className="program">
          <h3>Program Two</h3>
          <p>
            A professional development program in Asia, focusing on
            industry-specific training and networking opportunities.
          </p>
        </div>
        <div className="program">
          <h3>Program Three</h3>
          <p>
            An educational tour in North America, visiting leading universities
            and participating in academic exchanges.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; 2024 Foreign Exposure Program. All rights reserved.</p>
    </footer>
  );
};

export default App;
