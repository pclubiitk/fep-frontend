"use client";
// components/Navbar.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import useStore from "../store/store";
import whoami from "../callbacks/auth/student/whoami";
import { setDefaultResultOrder } from "dns";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDialogOpen, setIsProfileDialogOpen] = useState(false);
  const { token, setToken } = useStore();
  const [user,setUser] = useState("");
  useEffect(() => {
    const checklogin = async () => {
      if (!token) {
        return;
      }
      const res = await whoami.get(token);
      setUser(res.user_id);
    };
    checklogin();
  }, [setToken, token]);
  const toggleMenuDialog = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleProfileDialog = () => {
    setIsProfileDialogOpen(!isProfileDialogOpen);
  };
  const Logout=()=>{
    setToken("");
    window.location.href='/';
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <div
          className={styles.logo}
          style={{ backgroundImage: `url(/path/to/logo/image.png)` }}
        ></div>
        Foreign Exposure Program
      </div>
      <div className={styles.links}>
        <a href="/projects" className={styles.link}>
          <AccountTreeOutlinedIcon /> Projects
        </a>
        <a href="/favorites" className={styles.link}>
          <BookmarksOutlinedIcon /> Bookmarks
        </a>
        <a href="/scholarships" className={styles.link}>
          <SchoolOutlinedIcon /> Scholarships
        </a>
        <a href="/results" className={styles.link}>
          <LeaderboardOutlinedIcon /> Results
        </a>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.profile} onClick={toggleProfileDialog}>
          <img
            className={styles.avatar}
            src="https://ircell.iitkgp.ac.in/media/WhatsApp_Image_2023-12-25_at_09.58.52.jpeg"
            alt="User Avatar"
          />
          <span className={styles.userName}>{user}</span>
        </div>
        <button className={styles.menuButton} onClick={toggleMenuDialog}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className={styles.dialog}>
          <button
            className={styles.closeButton}
            onClick={() => setIsMenuOpen(false)}
          >
            ✖
          </button>
          <a href="/applications" onClick={() => setIsMenuOpen(false)}>
            Applied Projects
          </a>
          <a href="/scholarships" onClick={() => setIsMenuOpen(false)}>
            Applied Scholarships
          </a>
          <a href="/applications" onClick={() => setIsMenuOpen(false)}>
            Bookmarks
          </a>
          <a href="/results" onClick={() => setIsMenuOpen(false)}>
            Results
          </a>
          <a href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <a onClick={() => {Logout();}}>
            Logout
          </a>
        </div>
      )}
      {isProfileDialogOpen && (
        <div className={styles.profileDialog}>
          <button
            className={styles.profileCloseButton}
            onClick={() => setIsProfileDialogOpen(false)}
          >
            ✖
          </button>
          <a href="/profile" onClick={() => setIsProfileDialogOpen(false)}>
            <PersonOutlinedIcon /> Profile
          </a>
          <a href="/logout" onClick={() => setIsProfileDialogOpen(false)}>
            <ExitToAppOutlinedIcon /> Sign Out
          </a>
        </div>
      )}
    </nav>
  );
}
