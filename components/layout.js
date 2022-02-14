import MainHeader from "./header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: 0,
          height: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
