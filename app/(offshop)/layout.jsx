import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function RootLayout({ children }) {

  return (
    <div className="min-h-screen background-gradient no-scrollbar">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
