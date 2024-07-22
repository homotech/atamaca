"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

function Navbar() {
  const [showProblems, setShowProblems] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function sProblems() {
    if (showProjects == false) {
    } else {
      setShowProjects(false);
    }
    setShowProblems(!showProblems);
  }
  function sProjects() {
    if (showProblems == false) {
    } else {
      setShowProblems(false);
    }
    setShowProjects(!showProjects);
  }
  const firstThree = [
    { title: "Home", href: "/" },
    { title: "Contribution", href: "/contribution" },
    { title: "Our Mission", href: "/ourMission" },
  ];

  const navLinkClassName =
    "nav-links bg-[#F6F6F6] px-6 py-3 lg:text-xs rounded-full box-border xl:text-base cursor-pointer";

  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between lg:items-center py-4">
      <div
        className={`order-2 lg:order-1 box-border lg:flex-row flex flex-col px-4 gap-4 mt-4 lg:m-0 lg:flex  lg:h-12 ${
          !showMenu && "hidden "
        }`}
      >
        {firstThree.map((item, index) => (
          <Link key={index} href={item.href} className={navLinkClassName}>
            {item.title}
          </Link>
        ))}
      </div>
      <Link className="order-1 p-4 flex justify-between lg:w-1/8" href="/">
        <Image src={Logo} alt="GiveSmart logo" className="opacity-50"></Image>

        <button
          onClick={() => {
            console.log(showMenu);
            setShowMenu(!showMenu);
          }}
          className="text-2xl lg:hidden"
        >
          <FontAwesomeIcon icon={showMenu ? faXmark : faBars} />
        </button>
      </Link>
      <div
        className={`order-3 lg:h-12 flex flex-col lg:flex-row px-4 gap-4 mt-4 lg:m-0 lg:flex lg:w-4/8 ${
          !showMenu && "hidden"
        }`}
      >
        <div className="w-full relative">
          <button
            onClick={sProblems}
            className="bg-[#F6F6F6] h-full px-6 py-3 lg:text-xs rounded-full flex items-center gap-2 justify-between w-full xl:text-base"
          >
            Problems{" "}
            <FontAwesomeIcon
              className="w-3 rounded-full"
              icon={faChevronDown}
            />
          </button>
          <div
            className={`flex flex-col bg-[#f6f6f6] rounded-2xl gap-4 p-4 mt-4 z-10 lg:text-center lg:absolute ${
              showProblems ? "flex" : "hidden"
            }`}
          >
            <Link
              className="px-6 lg:text-xs py-2 nav-links xl:text-base"
              href="/"
            >
              Problems 1
            </Link>
            <hr />
            <Link
              className="px-6 lg:text-xs py-2 nav-links xl:text-base"
              href="/"
            >
              Problems 2
            </Link>
            <hr />
            <Link
              className="px-6 lg:text-xs py-2 nav-links xl:text-base"
              href="/"
            >
              Problems 3
            </Link>
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={sProjects}
            className="bg-[#F6F6F6] h-full lg:text-xs px-6 py-3 rounded-full gap-2 flex items-center justify-between w-full xl:text-base"
          >
            Projects
            <FontAwesomeIcon
              className="w-3 rounded-full"
              icon={faChevronDown}
            />
          </button>
          <div
            className={`flex flex-col bg-[#f6f6f6] rounded-2xl gap-4 p-4 mt-4 z-10 lg:absolute ${
              showProjects ? "flex" : "hidden"
            }`}
          >
            <Link
              className="nav-links lg:text-xs px-6 py-3 xl:text-base"
              href="/"
            >
              Projects 1
            </Link>
            <hr />
            <Link
              className="nav-links lg:text-xs px-6 py-3 xl:text-base"
              href="/"
            >
              Projects 2
            </Link>
            <hr />
            <Link
              className="nav-links lg:text-xs px-6 py-3 xl:text-base"
              href="/"
            >
              Projects 3
            </Link>
          </div>
        </div>
        <Link
          href="/problems"
          className="bg-white flex items-center justify-between rounded-full px-4 py-3 border-2 hover:border-0  border-full hover:bg-[#ECF86E] w-full lg:text-xs xl:text-base"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
