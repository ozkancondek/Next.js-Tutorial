/** @jsx jsx */
import { jsx } from "theme-ui";

const Footer = () => (
  <footer
    sx={{
      height: "50px",
      width: "100vw",
      bg: "primary",
      borderBottom: "1px solid  ",
      borderColor: "primary",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
    }}
  >
    <h1>Copyright @2022</h1>
  </footer>
);

export default Footer;
