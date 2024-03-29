import MobileNav from "@/components/MobileNav";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Navbar/>
      <MobileNav/>
      <main>{children}</main>
      <Footer />
      <ToastContainer/>
    </div>
  );
};

export default HomeLayout;
