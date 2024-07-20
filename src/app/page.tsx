import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import OutlinedComponent from "../components/outlinedComponent";
import NewsLetter from "../components/newsLetter";
import Footer from "../components/footer";
import WorldGreener from "../components/worldGreener";

export default function Home() {
  return (
    <main className="">
      <WorldGreener />
      <div className="bg-[#f6f6f6]">
        <NewsLetter />
        <Footer />
      </div>
    </main>
  );
}
