import MainLayout from "../components/layout";
import Footer from "../components/footer";
import Contact from "../components/contact";
import Head from "next/head";

const About = () => {
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
      <div
        style={{
          paddingTop: 100,
          paddingBottom: 50,
          marginBottom: -22,
          // minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="hero-background"
      >
        <div>
          <h1>About</h1>
        </div>
        <div
          style={{
            maxWidth: 800,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            marginBottom: 100,
            marginTop: 80,
            // borderRadius: 15,
            // paddingBottom: 30,
            // paddingTop: 10,
            paddingLeft: 20,
            paddingRight: 20,
            border: "3px solid rgb(190, 200, 218)",
          }}
        >
          <p>
            Welcome to [SHOP NAME]! <br />
            <br /> We aim to offer our customers a variety of the latest
            [PRODUCTS CATEGORY NAME]. We’ve come a long way, so we know exactly
            which direction to take when supplying you with high quality yet
            budget-friendly products. We offer all of this while providing
            excellent customer service and friendly support. <br />
            <br /> We always keep an eye on the latest trends in [PRODUCTS
            CATEGORY NAME] and put our customers’ wishes first. That is why we
            have satisfied customers all over the world, and are thrilled to be
            a part of the [PRODUCTS CATEGORY NAME] industry. <br />
            <br /> The interests of our customers are always top priority for
            us, so we hope you will enjoy our products as much as we enjoy
            making them available to you. <br />
            <br />
            The interests of our customers are always top priority for us, so we
            hope you will enjoy our products as much as we enjoy making them
            available to you. <br />
            <br />
            Our customers are our top priority and through our products we work
            hard towards building long-lasting and meaningful relations with
            them.
          </p>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default About;
