import NextjsIcon from "@/assets/Icons/NextjsIcon";
import TailwindCssIcon from "@/assets/Icons/TailwindCssIcon";
import Head from "next/head";
import Image from "next/image";
import bgPortfolio from "@/assets/Images/portfolio.png";

const Portofolio = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio</title>
      </Head>
      <div className="px-32 py-6  ">
        <h1 className="text-[32px] text-[#0079FF] font-bold mb-3">Portfolio</h1>
        <div className=" ">
          <div id="content-1">
            <h1 className="text-[18px] font-medium">
              Apa itu web
              <span className="font-semibold text-[#0079FF]">Portfolio ? </span>
            </h1>
            <div className="mt-3">
              <Image src={bgPortfolio} height={350} />
              <p>
                Web Portofolio adalah sebuah situs web yang dirancang untuk
                menampilkan latar belakang, skills, project, maupun resume
                pembuat kepada orang lain maupun perusahaan.
              </p>
            </div>
          </div>

          <div id="content-2" className=" mt-6">
            <h1 className="text-[18px] font-medium">
              Web <span className="text-[#0079FF]">Portfolio</span> dibangun
              menggunakan
            </h1>
            <div className="flex space-x-3 mt-3">
              <div className="w-[30px] h-[30px]">
                <NextjsIcon />
              </div>
              <div className="w-[30px] h-[30px]">
                <TailwindCssIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Portofolio.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default Portofolio;
