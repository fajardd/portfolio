import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Foto from "@/assets/Images/foto-aboutme.png";
import SocialMediaTemplate from "@/components/Layout/SocialMediaTemplate";
import JavaScriptIcon from "@/assets/Icons/JavaScriptIcon";
import ReactJsIcon from "@/assets/Icons/ReactJsIcon";
import GitIcon from "@/assets/Icons/GitIcon";
import NodeJsIcon from "@/assets/Icons/NodeJsIcon";
import MySqlIcon from "@/assets/Icons/MySqlIcon";
import TailwindCssIcon from "@/assets/Icons/TailwindCssIcon";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import CardProject from "@/components/Elements/CardProject";

export default function Home() {
  const [aboutMeRef, aboutMeVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  const [skillsRef, skillsVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  return (
    <div>
      <Head>
        <title>Fajar</title>
      </Head>
      <div className="grid grid-cols-1 gap-y-32 sm:gap-y-10">
        {/* batas */}

        {/* Abouat me */}
        <div
          id="aboutme"
          ref={aboutMeRef}
          className="lg:h-screen grid lg:grid-cols-2   "
        >
          <div className=" flex  justify-center items-center bg-white">
            <div className="z-40 p-2">
              <Image src={Foto} width={350} height={350} />
            </div>
          </div>
          <div className=" bg-white flex items-center lg:order-first py-6 lg:py-6">
            <div>
              <div
                className={`${
                  aboutMeVisible ? "animate-slideInFromLeft" : "opacity-0"
                }`}
              >
                <h1 className="text-[#0079FF] font-semibold">About Me</h1>
                <h1 className="text-[32px] font-bold mt-6">
                  <span className="text-[#0079FF]">Hi{","} </span>I{"'"}m Fajar
                </h1>
                <p className="text-[32px] font-bold mb-6">
                  Frontend <span className="text-[#0079FF]">Developer </span>
                </p>
              </div>
              <div
                className={`${
                  aboutMeVisible ? "animate-slideInFromRight" : "opacity-0"
                }`}
              >
                <p className="text-justify">
                  Perkenalkan saya Fajar Dwi Cahyo. Lulusan dari Universitas
                  Teknologi Yogyakarta (UTY) Jurusan Informatika tahun 2024.
                  Impian dan cita-cita saya adalah menjadi frontend developer.
                  Library maupun framework yang saya gunakan untuk membangun
                  aplikasi yaitu ReactJs dan Tailwindcss sebagai framework css.
                </p>
                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=fjrdwc@gmail.com">
                  <button className="bg-[#0079FF] rounded-md text-white p-3 px-4 mt-6 flex gap-x-2">
                    Contact Me <ArrowCircleRightIcon className="w-6 h-6" />
                  </button>
                </Link>
                <SocialMediaTemplate />
              </div>
            </div>
          </div>
        </div>
        {/* Abouat me */}

        {/* Skills */}
        <div
          id="skills"
          className="lg:h-screen flex justify-center items-center "
          // ref={skillsRef}
        >
          <div className="border shadow-md rounded-[20px] py-6 lg:py-32 w-full bg-white">
            <div
            // className={`${
            //   skillsVisible ? "animate-slideInFromTop" : "opacity-0"
            // }`}
            >
              <div className="flex justify-center">
                <h1 className="text-[#0079FF] font-semibold">Skills</h1>
              </div>
              <div className="flex justify-center mt-6">
                <p className="text-[#2F3645]  md:w-1/2 text-center px-6 md:px-0">
                  Berikut skills bahasa pemrograman maupun pendukung lainnya
                  yang saya pelajari dan kuasai sebagai frontend developer
                </p>
              </div>
            </div>

            <div className="grid md:flex  justify-center items-center gap-x-10 gap-y-6  mt-6">
              <div>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:rounded-[10px] p-2 rounded-[10px] duration-300">
                  <JavaScriptIcon />
                </button>
              </div>
              <div>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:rounded-[10px] p-2 rounded-[10px] duration-300">
                  <ReactJsIcon />
                </button>
              </div>
              <div>
                <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:rounded-[10px] p-2 rounded-[10px] duration-300">
                  <TailwindCssIcon />
                </button>
              </div>

              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-xl hover:rounded-[10px] p-2 rounded-[10px] duration-300">
                <GitIcon />
              </button>
            </div>
          </div>
        </div>
        {/* Skills */}

        {/* Project */}
        <div
          id="project"
          className="lg:h-screen mb-40  flex justify-center items-center "
        >
          <div className="  w-full bg-white">
            <div>
              <h1 className="text-[#0079FF] font-semibold">Projects</h1>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <CardProject />
              <CardProject />
              <CardProject />
            </div>
          </div>
        </div>
        {/* Project */}

        {/* batas */}
      </div>
    </div>
  );
}
