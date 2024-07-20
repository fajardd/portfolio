import ExpressjsIcon from "@/assets/Icons/ExpressjsIcon";
import NextjsIcon from "@/assets/Icons/NextjsIcon";
import ReactJsIcon from "@/assets/Icons/ReactJsIcon";
import TailwindCssIcon from "@/assets/Icons/TailwindCssIcon";
import Head from "next/head";
import React from "react";

const RekamMedis = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Rekam Medis</title>
      </Head>
      <div className="px-32 py-6  ">
        <h1 className="text-[32px] text-[#0079FF] font-bold mb-3">
          Rekam Medis
        </h1>
        <div className=" border">
          <div id="content-1">
            <h1 className="text-[18px] font-medium">
              Apa itu aplikasi{" "}
              <span className="font-semibold text-[#0079FF]">
                Rekam Medis ?{" "}
              </span>
            </h1>
            <div className="mt-3">
              <p>
                Aplikasi Rekam medis adalah sebuah aplikasi yang digunakan
                sebagai rekaman dokumen yang berisi informasi terkait pelayanan
                apa saja yang diberikan kepada pasien, mulai dari data pribadi
                pasien hingga riwayat kesehatan pasien.
              </p>
            </div>
          </div>
          <div id="content-2" className=" mt-6">
            <h1 className="text-[18px] font-medium">
              Apa saja fitur aplikasi{" "}
              <span className="font-semibold text-[#0079FF]">
                Rekam Medis ?{" "}
              </span>
            </h1>
            <div className="grid grid-cols-2 gap-6 mt-3">
              <div>
                <h1 className=" font-medium">01. Login</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti voluptas totam consectetur rerum. Qui delectus a
                  dolorum nostrum voluptas quas aspernatur dolor doloribus, nam
                  eaque facilis minus eius voluptatibus excepturi.
                </p>
              </div>
              <div>
                <h1 className=" font-medium">02. Dashboard</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti voluptas totam consectetur rerum. Qui delectus a
                  dolorum nostrum voluptas quas aspernatur dolor doloribus, nam
                  eaque facilis minus eius voluptatibus excepturi.
                </p>
              </div>
              <div>
                <h1 className=" font-medium">03. Admin</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti voluptas totam consectetur rerum. Qui delectus a
                  dolorum nostrum voluptas quas aspernatur dolor doloribus, nam
                  eaque facilis minus eius voluptatibus excepturi.
                </p>
              </div>
              <div>
                <h1 className=" font-medium">04. Customer</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti voluptas totam consectetur rerum. Qui delectus a
                  dolorum nostrum voluptas quas aspernatur dolor doloribus, nam
                  eaque facilis minus eius voluptatibus excepturi.
                </p>
              </div>
              <div>
                <h1 className=" font-medium">05. Dokter</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti voluptas totam consectetur rerum. Qui delectus a
                  dolorum nostrum voluptas quas aspernatur dolor doloribus, nam
                  eaque facilis minus eius voluptatibus excepturi.
                </p>
              </div>
              <div>
                <h1 className=" font-medium">06. Jadwal</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti voluptas totam consectetur rerum. Qui delectus a
                  dolorum nostrum voluptas quas aspernatur dolor doloribus, nam
                  eaque facilis minus eius voluptatibus excepturi.
                </p>
              </div>
              <div>
                <h1 className=" font-medium">07. Riwayat</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti voluptas totam consectetur rerum. Qui delectus a
                  dolorum nostrum voluptas quas aspernatur dolor doloribus, nam
                  eaque facilis minus eius voluptatibus excepturi.
                </p>
              </div>
            </div>
          </div>
          <div id="content-3" className="border mt-6">
            <h1 className="text-[18px] font-medium">
              Aplikasi ini dibangun menggunakan{" "}
            </h1>
            <div className="flex space-x-3 mt-3">
              <div className="w-[30px] h-[30px]">
                <ExpressjsIcon />
              </div>
              <div className="w-[30px] h-[30px]">
                <ReactJsIcon />
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

RekamMedis.getLayout = function getLayout(page) {
  return <>{page}</>;
};

export default RekamMedis;
