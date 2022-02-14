import MediaQuery from "react-responsive";
import Link from "next/link";
import Image from "next/image";
// import AnimatedCursor from "react-animated-cursor";
import dynamic from "next/dynamic";
import { slide as Menu } from "react-burger-menu";

import { CgMenuRight } from "react-icons/cg";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "16px",
    height: "16px",
    right: "20px",
    top: "40px",
  },
  bmBurgerBars: {
    background: "#000000",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#000000",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};

const MainHeader = () => {
  return (
    <header>
      <Menu isOpen={false} styles={styles} right>
        <div
          style={{
            width: "100%",
            // border: "1px solid red",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            height: 200,
            // border: "1px solid red",
            fontWeight: 200,
            color: "white",
          }}
        >
          <Link href="/" passHref>
            <a className="underline">Home</a>
          </Link>
          <Link href="/about" passHref>
            <a className="underline">About</a>
          </Link>
          <Link href="/services" passHref>
            <a className="underline">Services</a>
          </Link>
          <Link href="/contact" passHref>
            <a className="underline">Contact</a>
          </Link>
        </div>
      </Menu>
      <AnimatedCursor
        innerSize={16}
        outerSize={60}
        color="93, 116, 153"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={1.5}
      />
      <MediaQuery minWidth={1000}>
        <div style={{ display: "flex", height: 100 }}>
          <div
            style={{
              width: "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/logoBlack.png"
              alt="rhys logo"
              width={137}
              height={50}
            />
          </div>
          <div
            style={{
              width: "50%",
              // border: "1px solid red",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              fontWeight: 200,
            }}
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
          </div>
          <div
            style={{
              width: "25%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: 200,
            }}
          >
            <div
              style={{
                padding: "10px 20px",
                // borderRadius: 7,
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href="/contact" passHref>
                <a className="underline">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={0} maxWidth={1000}>
        <div
          style={{
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",
            height: 100,
          }}
        >
          <div style={{ width: "33%" }} />
          <div
            style={{ width: "34%", display: "flex", justifyContent: "center" }}
          >
            <Image
              src="/logoBlack.png"
              alt="rhys logo"
              width={137}
              height={50}
            />
          </div>
          <div
            style={{
              paddingRight: 20,
              fontSize: 24,
              width: "33%",
              textAlign: "end",
            }}
          >
            {/* <CgMenuRight /> */}
          </div>
        </div>
      </MediaQuery>
    </header>
  );
};

export default MainHeader;
