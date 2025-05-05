"use client";

import { FaGithub } from "react-icons/fa";
import ShinyText from "../UI/ShinyText/ShinyText";
import styles from "./Header.module.scss";
import { BsFillGrid1X2Fill } from "react-icons/bs";

function Header() {
  return (
    <div className="flex items-center gap-6 col-span-full">
      <a href="/" className="decoration no-underline">
        <h1 className="flex items-center pl-7 gap-6 text-xl sm:text-2xl text-text-primary font-bold">
          <BsFillGrid1X2Fill color="#faa31a" />
          Flexbox Creator
        </h1>
      </a>

      <a href="https://github.com/FilipKrolikowski/flexbox" className={styles.star_btn} target="_blank">
        <div className={styles.icon_text}>
          <FaGithub />
          <ShinyText text="Check on GitHub" className={styles.label} />
        </div>
      </a>
    </div>
  );
}

export default Header;
