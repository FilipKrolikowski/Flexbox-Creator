"use client";

import { FaGithub } from "react-icons/fa";
import ShinyText from "../UI/ShinyText/ShinyText";
import styles from "./Header.module.scss";
import { BsFillGrid1X2Fill } from "react-icons/bs";

function Header() {
  return (
    <div className={styles.header}>
      <a href="/" className={styles.link}>
        <h1 className={styles.logo}>
          <BsFillGrid1X2Fill color="#faa31a" />
          Flexbox Creator
        </h1>
      </a>

      <a href="https://github.com/FilipKrolikowski/flexbox" className={styles.star_btn} target="_blank">
        <div className={styles.icon_text}>
          <FaGithub color="#faa31a" />
          <ShinyText text="Check on GitHub" className={styles.label} />
        </div>
      </a>
    </div>
  );
}

export default Header;
