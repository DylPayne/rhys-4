import Image from "next/image";
import Link from "next/link";

import MediaQuery, { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1000px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div
      // style={{
      // display: "flex",
      // justifyContent: "space-between",
      // width: "100%",
      // height: 200,
      // backgroundColor: "black",
      // paddingLeft: 50,
      // paddingRight: 50,
      // }}
      style={
        isBigScreen
          ? {
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              height: 200,
              backgroundColor: "black",
              paddingLeft: 50,
              paddingRight: 50,
            }
          : {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              height: 400,
              backgroundColor: "black",
              paddingTop: 50,
              paddingBottom: 50,
            }
      }
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Image src="/logoWhite.png" alt="rhys logo" width={160} height={60} />
      </div>
      <div
        // style={{
        // width: "50%",
        // // border: "1px solid red",
        // display: "flex",
        // alignItems: "center",
        // justifyContent: "space-evenly",
        // fontWeight: 200,
        // color: "white",
        // }}
        style={
          isBigScreen
            ? {
                width: "50%",
                // border: "1px solid red",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                fontWeight: 200,
                color: "white",
              }
            : {
                width: "50%",
                // border: "1px solid red",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                height: 200,
                // border: "1px solid red",
                fontWeight: 200,
                color: "white",
              }
        }
      >
        <Link href="/" passHref>
          <a className="underline">Home</a>
        </Link>
        <Link href="/about" passHref>
          <a className="underline">About</a>
        </Link>
        {/* <Link href="/" passHref>
          <a className="underline">Testimonials</a>
        </Link> */}
        <Link href="/services" passHref>
          <a className="underline">Services</a>
        </Link>
        <Link href="/contact" passHref>
          <a className="underline">Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
