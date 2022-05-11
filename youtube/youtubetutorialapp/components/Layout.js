import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <h4>Layout component seems in every pages</h4>
          {children}
        </main>
      </div>
    </>
  );
};
