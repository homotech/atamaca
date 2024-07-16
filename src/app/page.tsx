import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import OutlinedComponent from "../components/outlinedComponent";

export default function Home() {
  return (
    <main className="">
      <OutlinedComponent
        title="Facebook"
        additionalClass="text-[#ECF86E] border-[#ECF86E]"
      ></OutlinedComponent>
    </main>
  );
}
