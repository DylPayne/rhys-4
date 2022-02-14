import MainLayout from "../components/layout";
import Footer from "../components/footer";
import Contact from "../components/contact";
import { ThemeProvider, createTheme } from "@mui/material";
import Head from "next/head";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
      dark: "#025fa8",
    },
    secondary: {
      main: "#bec8da",
      contrastText: "#ffffff",
      dark: "#025fa8",
    },
  },
});

const ContactPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Rhys | Cape Town</title>
        <meta
          name="description"
          content="Your one-stop-shop for all your photography, web design and graphic design needs."
          key="desc"
        />
      </Head>
      <MainLayout>
        <div style={{ paddingTop: 100 }} className="hero-background">
          <Contact />
        </div>
        <Footer />
      </MainLayout>
    </ThemeProvider>
  );
};

export default ContactPage;
