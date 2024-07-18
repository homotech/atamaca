import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import OutlinedComponent from "../components/outlinedComponent";
import NewsLetter from "../components/newsLetter";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="">
      <NewsLetter />
      <Footer />
    </main>
  );
}
