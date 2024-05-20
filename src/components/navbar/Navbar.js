import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const Navbar = ({ visibleInPublic }) => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const scrollTo = (id) => {
    const sectionId = document.getElementById(id);
    sectionId.scrollIntoView({ behavior: "smooth" });
  };

  const renderElement = () => {
    return user || visibleInPublic ? (
      <>
        <li
          onClick={() => {
            scrollTo("profile");
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            scrollTo("about");
          }}
        >
          About
        </li>
        <li
          onClick={() => {
            scrollTo("skills");
          }}
        >
          Skills
        </li>
        <li
          onClick={() => {
            scrollTo("projects");
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            scrollTo("contact");
          }}
        >
          Contact
        </li>
        {<li onClick={logout}>Logout</li>}

        {/* <li><button className='btn' onClick={() => {scrollTo('about')}}>About</button></li>
                <li><button className='btn'onClick={() => {scrollTo('skills')}}>Skills</button></li>
                <li><button className='btn'onClick={() => {scrollTo('projects')}}>Projects</button></li>
                <li ><button onClick={logout}>Logout</button></li> */}
      </>
    ) : (
      <>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </>
    );
  };


  return (
    <nav className={styles.navbar}>
      <ul>
        {!visibleInPublic && renderElement()}
        {visibleInPublic && (
          <>
            <li
              onClick={() => {
                scrollTo("profile");
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                scrollTo("about");
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                scrollTo("skills");
              }}
            >
              Skills
            </li>
            <li
              onClick={() => {
                scrollTo("projects");
              }}
            >
              Projects
            </li>
            <li
              onClick={() => {
                scrollTo("contact");
              }}
            >
              Contact
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
