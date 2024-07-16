import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import OutlinedComponent from "../components/outlinedComponent";
import NewsLetter from "../components/newsLetter";

export default function Home() {
  return (
    <main className="">
      <NewsLetter></NewsLetter>
    </main>
  );
}
