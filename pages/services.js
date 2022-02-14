import {
  Card,
  CardContent,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import MainLayout from "../components/layout";
import Footer from "../components/footer";
import Contact from "../components/contact";
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

const Services = () => {
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
        <div
          className="hero-background"
          style={{
            paddingTop: 120,
            paddingBottom: 60,
            marginBottom: -21,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1>Services</h1>
          </div>
          <div
            style={{
              maxWidth: 1000,
              marginLeft: 30,
              marginRight: 30,
              textAlign: "center",
            }}
          >
            <Grid
              container
              spacing={{ xs: 10, md: 6 }}
              columns={{ xs: 2, md: 12 }}
            >
              <Grid item xs={2} md={4}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <h1>Web Design</h1>
                    <p>
                      At Rhys our main focus is web design. We build our sites
                      from scratch, meaning we don’t use Wordpress, Wix or any
                      other similar programs. In order to make sure our sites
                      are as efficient, customisable and fast as possible, we
                      build them from scratch. We use frameworks called React.js
                      and Next.js, which are both very modern technologies.
                      Because we use these frameworks we can also build custom
                      web apps. For example, we can make complex booking systems
                      or staff management websites. Contact us today to get more
                      information.
                    </p>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={2} md={4}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <h1>Photography</h1>
                    <p>
                      We are experts when it comes to photography. Almost every
                      image on this site was taken by us. We use up to date
                      camera equipment to ensure that you get the highest
                      quality images possible. Contact us if you would like us
                      to take professional photographs at your corporate
                      function, wedding, or anything that your imagination
                      desires! We are willing to travel internationally.
                    </p>
                    <a
                      className="underline"
                      style={{ fontWeight: 500 }}
                      href="https://www.instagram.com/rhys.co.za/"
                    >
                      Click here to head to our Instagram
                    </a>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={2} md={4}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <h1>Graphic Design</h1>
                    <p>
                      Any web designer has to have graphic design knowledge, so
                      we thought why not also offer this as a separate service?
                      We can make your companies logos, design invites, make
                      adverts and more! Contact us today to find out more
                      information.
                    </p>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
          <br />
          <br />
          <Contact />
        </div>
        <Footer />
      </MainLayout>
    </ThemeProvider>
  );
};

export default Services;
