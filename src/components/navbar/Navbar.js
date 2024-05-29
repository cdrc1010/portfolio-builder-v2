import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { motion } from 'framer-motion';
import { useScreenSize } from "../../hooks/useScreenSize";

const Navbar = ({ visibleInPublic }) => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const screenSize = useScreenSize();
  const isMobile = screenSize.width <= 768

  console.log('screenSize: ', screenSize)
  const [toggle, setToggle] = useState(false)

  const scrollTo = (id) => {
    const sectionId = document.getElementById(id);
    sectionId.scrollIntoView({ behavior: "smooth" });
  };

  const publicNavbar = ["Profile", "About", "Skills", "Projects", "Contact"]

  const userNavBar = publicNavbar.concat('Logout')

  const handleNavItemClick = item => {
    if (item === 'Logout') {
      return logout
    }
    return () => { scrollTo(item.toLowerCase()) };
  }

  const renderElement = () => {
    return user ? (
      <>
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
      {isMobile && <div className={styles.hamburger} onClick={() => setToggle(!toggle)}>
        &#9776;
      </div>}
      {(!isMobile || toggle) && <motion.ul initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 180, duration: 1.5 }}>
        {!visibleInPublic && renderElement()}
        {visibleInPublic && (
          <>
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
        <hr />
      </motion.ul>}
    </nav>
  );
};

export default Navbar;
