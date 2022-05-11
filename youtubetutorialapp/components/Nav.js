import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Main</a>
          </Link>
        </li>
        <li>
          <Link href="/fastRefresh">
            <a>Fast Refresh</a>
          </Link>
        </li>
        <li>
          <Link href="/user">
            <a>Users</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
