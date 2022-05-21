import Head from "next/head";
import Image from "next/image";
import Container from "../components/styles/Container.styled";
import { ThemeProvider } from "styled-components";
import styles from "../styles/Home.module.css";
import GlobalStyles from "../components/styles/Global";

const theme = {
  colors: {
    header: "orange",
    body: "#fff",
  },
};

export default function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container bg={"blue"}>
          <h2>Hello World</h2>
        </Container>
      </ThemeProvider>
    </div>
  );
}
