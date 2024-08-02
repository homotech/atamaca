import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import OutlinedComponent from "../components/outlinedComponent";
import NewsLetter from "../components/newsLetter";
import Footer from "../components/footer";
import WorldGreener from "../components/worldGreener";
import ImagesBox from "../components/imagesBox";
import Initiatives from "@/src/components/initiatives";
import ExploreProblems from "../components/exploreProblems";
import MajorHeroSection from "../components/majorHeroSection";

export default function Home() {
  return (
    <main className="">
      <MajorHeroSection />
      <WorldGreener />
      <ImagesBox />
      <Initiatives />
      <ExploreProblems />
      <div className="bg-[#f6f6f6]">
        <NewsLetter />
        <Footer />
      </div>
    </main>
  );
}
