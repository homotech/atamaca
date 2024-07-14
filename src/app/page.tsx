import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      Hello World
      <FontAwesomeIcon icon={faCocktail}></FontAwesomeIcon>
    </main>
  );
}
