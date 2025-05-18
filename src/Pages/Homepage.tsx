import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Kelas from "../Components/Kelas";
import Benefit from "../Components/Benefit";
import Harga from "../Components/Harga";
import Diskon from "../Components/Diskon";
import Rating from "../Components/Rating";
import Faq from "@/Components/Faq";
function Homepage() {
  return (
    <div className="container flex flex-col items-center bg-flatwhite">
      <Navbar />
      <Header />
      <Kelas />
      <Benefit />
      <Harga />
      <Diskon />
      <Rating />
      <Faq />
    </div>
  );
}
export default Homepage;
