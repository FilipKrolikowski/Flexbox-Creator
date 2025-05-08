"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { usePathname } from "next/navigation";
import ShinyText from "../UI/ShinyText/ShinyText";
import styles from "./Header.module.scss";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsFillGrid1X2Fill } from "react-icons/bs";

function Header() {
  const pathname = usePathname();
  return (
    <div className={styles.header}>
      <a href="/" className={styles.link}>
        <h1 className={styles.logo}>
          <BsFillGrid1X2Fill color="#faa31a" />
          Flexbox Creator
        </h1>
      </a>

      <hr className={styles.divider} />

      {pathname !== "/grid" && (
        <Link href="/grid" className={styles.grid_link}>
          <HiOutlineExternalLink />
          Grids
        </Link>
      )}

      {pathname === "/grid" && (
        <Link href="/flexbox" className={styles.grid_link}>
          <HiOutlineExternalLink />
          Flexbox
        </Link>
      )}

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
