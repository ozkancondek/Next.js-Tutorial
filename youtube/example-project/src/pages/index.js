import { ThemeProvider } from "styled-components";

import content from "./content.js";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import { Container } from "../components/styles/Container.styled.js";
import GlobalStyles from "../styles/Global.js";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}
