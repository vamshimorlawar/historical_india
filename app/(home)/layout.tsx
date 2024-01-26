import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default HomeLayout;
