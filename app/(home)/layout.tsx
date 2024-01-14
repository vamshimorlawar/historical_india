import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="mx-20">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
