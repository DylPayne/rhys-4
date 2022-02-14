import Image from "next/image";
import MainLayout from "../components/layout";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Head from "next/head";

import { BsInstagram, BsFacebook, BsYoutube, BsWhatsapp } from "react-icons/bs";

import { Button, ButtonGroup, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

import MediaQuery, { useMediaQuery } from "react-responsive";
import Link from "next/link";

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

const HeroBanner = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1000px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 400px)" });

  return (
    <MainLayout>
      <Head>
        <title>Rhys | Cape Town</title>
        <meta
          name="description"
          content="Your one-stop-shop for all your photography, web design and graphic design needs."
          key="desc"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <div
          style={{
            width: "100%",
            height: "100vh",
            zIndex: -100,
            position: "absolute",
          }}
        >
          <Image
            src="/ocean1.jpg"
            alt="ocean"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <div
            style={
              isBigScreen
                ? {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    // border: "1px solid red",
                    width: "100%",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    // border: "1px solid red",
                    width: "100%",
                  }
            }
          >
            <h1
              style={
                isBigScreen
                  ? {
                      fontWeight: 200,
                      fontSize: 90,
                      width: "80%",
                      textAlign: "center",
                    }
                  : {
                      fontWeight: 200,
                      fontSize: 50,
                      width: "80%",
                      textAlign: "center",
                    }
              }
            >
              Modern Web Design
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              // border: "1px solid red",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              bottom: 30,
            }}
          >
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              size="large"
            >
              <Button>
                <BsInstagram color="white" />
              </Button>
              <Button>
                <BsFacebook color="white" />
              </Button>
              <Button>
                <BsYoutube color="white" />
              </Button>
              <Button>
                <BsWhatsapp color="white" />
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div
          style={{
            // minHeight: 300,
            backgroundColor: "black",
            marginTop: -16,
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            textAlign: "center",
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 100,
            paddingBottom: 100,
          }}
        >
          <Grid
            container
            spacing={{ xs: 10, md: 6 }}
            columns={{ xs: 2, md: 12 }}
          >
            <Grid item xs={2} md={4}>
              <h1 style={{ lineHeight: 0 }}>Web Design</h1>
              <br />
              <p>
                We are Cape Town based web developers. We can build static
                sites, web apps and whatever your heart desires. We code our
                sites from scratch, which gives us unlimited boundries for
                customization and makes our sites extremely fast. Contact us
                today to get more information.
              </p>
              <br />
              <Link href="/contact" passHref>
                <a>Learn More {">"}</a>
              </Link>
            </Grid>
            <Grid item xs={2} md={4}>
              <h1 style={{ lineHeight: 0 }}>Photography</h1>
              <br />
              <p>
                We are photographers based in Cape Town. We have modern
                equipment and can photograph any of your events - whether it be
                a wedding, surfing competition or expo.
              </p>
              <br />
              <Link href="/contact" passHref>
                <a>Learn More {">"}</a>
              </Link>
            </Grid>
            <Grid item xs={2} md={4}>
              <h1 style={{ lineHeight: 0 }}>Graphic Design</h1>
              <br />
              <p>
                An essential part of being a good web designer is being a good
                graphic designer. We offer a seperate graphic design product. We
                can design your companies advertisements, logo and more.
              </p>
              <br />
              <Link href="/contact" passHref>
                <a>Learn More {">"}</a>
              </Link>
            </Grid>
          </Grid>
        </div>
        <div
          style={{
            width: "100%",
            height: 700,
            zIndex: -100,
            position: "absolute",
            filter: "brightness(50%)",
          }}
        >
          <Image
            src="/jellyfish1.jpg"
            alt="sand"
            layout="fill"
            objectFit="cover"
            // objectPosition="top"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 700,
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 700,
              color: "white",
              paddingTop: 50,
            }}
          >
            <Image
              src="/logoWhite.png"
              alt="rhys logo"
              width={160}
              height={60}
            />
            <h1
              style={
                isBigScreen
                  ? {
                      ffontWeight: 200,
                      fontSize: 60,
                      width: "80%",
                      textAlign: "center",
                      marginTop: 20,
                    }
                  : {
                      fontWeight: 200,
                      fontSize: 30,
                      width: "80%",
                      textAlign: "center",
                      marginTop: 20,
                    }
              }
            >
              Modernize your business
            </h1>
            <p
              style={{
                width: "60%",
                textAlign: "center",
                fontSize: 16,
                // marginTop: 20,
              }}
            >
              Let us take your business to the next level. Our services will
              change the way consumers see your business. It is essential to
              have a beautiful website to attract more clients, as it is the
              face of your business and will likely be the first interaction
              your customers have with your business. Our photography services
              will help expose the beauty of your product to the world, and will
              give your customers assurance that your business knows what they
              are doing. Get in touch with us today to bring your business to
              another level.
            </p>
          </div>
        </div>
        <div className="hero-background">
          <Contact />
        </div>
        <Footer />
      </ThemeProvider>
    </MainLayout>
  );
};

const Home = () => {
  return (
    <main>
      <HeroBanner />
    </main>
  );
};

export default Home;
