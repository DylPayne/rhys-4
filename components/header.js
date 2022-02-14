import MediaQuery from "react-responsive";
import Link from "next/link";
import Image from "next/image";

import { CgMenuRight } from "react-icons/cg";

const MainHeader = () => {
  return (
    <header>
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
            <CgMenuRight />
          </div>
        </div>
      </MediaQuery>
    </header>
  );
};

export default MainHeader;
