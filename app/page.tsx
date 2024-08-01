"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "./App.css";
import Team from "./faq";
import logo from "./iitklogo.png";
import Contactus from "./contactus";
import Statistics from "./Statistics";
import whoami from "../callbacks/auth/student/whoami";
import Faq from "./team";
import Image from "next/image";
import Link from "next/link";
import useStore from "../store/store";
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
  const { token, setToken } = useStore();
  const [statusofuser,setStatus]=useState("Login");
  const [loginlink,setLoginLink]=useState("/auth/login");
  useEffect(() => {
    const checklogin = async () => {
      if (!token) {
        return;
      }
      const res = await whoami.get(token);
      console.log(res);
      setStatus("Dashboard");
      switch (res.role_id) {
        case 1:
          setLoginLink("/projects");
          break;
        case 2:
          setLoginLink("/professor");
          break;
        case 101:
          console.log("admin");
          break;
        case 100:
          console.log("god");
          break;
        default:
          setToken("");
          setLoginLink("/auth/login");
          break;
      }
    };
    checklogin();
  }, [setToken, token]);
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
      <Link href={loginlink}> <button className="sign-in-button">{statusofuser}</button></Link>
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
  const { token, setToken } = useStore();
  const [loginlink,setLoginLink]=useState("/auth/login");
  useEffect(() => {
    const checklogin = async () => {
      if (!token) {
        return;
      }
      const res = await whoami.get(token);
      console.log(res);
      switch (res.role_id) {
        case 1:
          setLoginLink("/projects");
          break;
        case 2:
          setLoginLink("/professor");
          break;
        case 101:
          console.log("admin");
          break;
        case 100:
          console.log("god");
          break;
        default:
          setToken("");
          setLoginLink("/auth/login");
          break;
      }
    };
    checklogin();
  }, [setToken, token]);
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Welcome to the Foreign Exposure Program</h1>
        <div className="hero-explore">
          Explore new opportunities and expand your horizons with our unique
          programs designed
        </div>
        <div className="animated-text">to provide international exposure</div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about">
      <div  className="mapimage">
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
  return (
    <section id="expertise-section">
      <div className="content">
        <div className="intro-text">
          <p>
            <h2>Our Expertise:</h2> IIT Kanpur has 14 Undergraduate departments
            and 15 Postgraduate departments, each having a great talent pool
            honed to suit the needs of academia by our excellent
          </p>
          <p className="animated-text2">academics and its unparalleled faculty.</p>
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
