import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { motion } from 'framer-motion';

const Navbar = ({ visibleInPublic }) => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const scrollTo = (id) => {
    const sectionId = document.getElementById(id);
    sectionId.scrollIntoView({ behavior: "smooth" });
  };

  const publicNavbar = ["Profile", "About", "Skills", "Projects", "Contact"]

  const userNavBar = publicNavbar.concat('Logout')
  console.log('userNavBar: ', userNavBar)
  console.log('user: ', user)

  const handleNavItemClick = item => {
    if (item === 'Logout') {
      return logout
    }
    return () => { scrollTo(item.toLowerCase()) };
  }

  const renderElement = () => {
    return user ? (
      <>
        {/* <li
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
        <li onClick={logout}>Logout</li> */}
        {userNavBar.map((el, idx) => (
          <motion.li onClick={handleNavItemClick(el)} key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 * idx, duration: .2 } }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {el}  
          </motion.li>
        )
        )}
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
      <motion.ul initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 180, duration: 1.5 }}>
        {!visibleInPublic && renderElement()}
        {visibleInPublic && (
          <>
            {/* <li
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
            </li> */}
            {publicNavbar.map((el, idx) => (
              <motion.li onClick={() => { scrollTo(el.toLowerCase()) }} key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.3 * idx, duration: .2 } }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {el}
              </motion.li>
            ))}
          </>
        )}
      </motion.ul>
    </nav>
  );
};

export default Navbar;
