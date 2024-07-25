import ExpressjsIcon from "@/assets/Icons/ExpressjsIcon";
import NextjsIcon from "@/assets/Icons/NextjsIcon";
import Image from "next/image";
import ReactJsIcon from "@/assets/Icons/ReactJsIcon";
import TailwindCssIcon from "@/assets/Icons/TailwindCssIcon";
import Head from "next/head";
import React from "react";
import loginPage from "@/assets/Images/rekam-medis/00-login.png";
import dashboard from "@/assets/Images/rekam-medis/01-dashboard.png";
import admin from "@/assets/Images/rekam-medis/02-admin.png";
import dokter from "@/assets/Images/rekam-medis/03-dokter.png";
import updateDokter from "@/assets/Images/rekam-medis/04-updateDokter.png";
import deleteDokter from "@/assets/Images/rekam-medis/05-deleteDokter.png";
import pasien from "@/assets/Images/rekam-medis/06-pasien.png";
import riwayatPasien from "@/assets/Images/rekam-medis/07-riwayatPasien.png";
import updatePasien from "@/assets/Images/rekam-medis/08-updatePasien.png";
import deletePasien from "@/assets/Images/rekam-medis/09-deletePasien.png";
import jadwal from "@/assets/Images/rekam-medis/10-jadwal.png";
import updateJadwal from "@/assets/Images/rekam-medis/11-updateJadwal.png";
import pelayanan from "@/assets/Images/rekam-medis/12-pelayanan.png";
import updatePelayanan from "@/assets/Images/rekam-medis/13-updatePelayanan.png";

const RekamMedis = () => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Rekam Medis</title>
      </Head>
      <div className="px-6 lg:px-32 py-6  ">
        <h1 className="text-[32px] text-[#0079FF] font-bold mb-3">
          Rekam Medis
        </h1>
        <div className=" ">
          <div id="content-1">
            <h1 className="text-[18px] font-medium">
              Apa itu aplikasi{" "}
              <span className="font-semibold text-[#0079FF]">
                Rekam Medis ?{" "}
              </span>
            </h1>
            <div className="mt-3 text-justify">
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
            <div className="grid gap-6 gap-x-16 mt-3 text-justify">
              <div>
                <h1 className=" font-medium">01. Login</h1>
                <p>
                  Halaman login menampilkan beberapa element yaitu input email,
                  input password, dan button login. Halaman login ini
                  diperuntukkan untuk user yang mempunyai role admin sedangkan
                  untuk role customer dan dokter tidak dapat melakukan login.
                </p>
                <Image
                  src={loginPage}
                  alt="loginPage"
                  className="border mt-2"
                />
              </div>
              <div>
                <h1 className=" font-medium">02. Dashboard</h1>{" "}
                <p>
                  Halaman dashboard merupakan halaman pertama yang diakses oleh
                  admin ketika berhasil melakukan login.
                </p>
                <Image
                  src={dashboard}
                  alt="dashboard"
                  className="border mt-2 "
                />
              </div>
              <div>
                <h1 className=" font-medium">03. Admin</h1>{" "}
                <p>
                  Halaman admin menampilkan inputan untuk membuat admin baru dan
                  tabel data admin.
                </p>
                <Image src={admin} alt="admin" className="border mt-2 " />
              </div>
              <div>
                <h1 className=" font-medium">04. Dokter</h1>{" "}
                <p>
                  Halaman dokter menampilkan inputan untuk membuat dokter baru
                  dan tabel data dokter. Pada tabel dokter admin dapat melakukan
                  update data dokter.
                </p>
                <Image src={dokter} alt="dokter" className="border mt-2 " />
                <Image
                  src={updateDokter}
                  alt="updateDokter"
                  className="border mt-2 "
                />
                <Image
                  src={deleteDokter}
                  alt="deleteDokter"
                  className="border mt-2 "
                />
              </div>
              <div>
                <h1 className=" font-medium">05. Pasien</h1>{" "}
                <p>
                  Halaman pasien menampilkan inputan untuk membuat pasien baru
                  dan menampilkan tabel data pasien. Pada tabel pasien admin
                  dapat melakukan hapus data, update data, dan menambahkan
                  riwayat pasien.
                </p>
                <Image src={pasien} alt="pasien" className="border mt-2 " />
                <Image
                  src={riwayatPasien}
                  alt="riwayatPasien"
                  className="border mt-2 "
                />
                <Image
                  src={updatePasien}
                  alt="updatePasien"
                  className="border mt-2"
                />
                <Image
                  src={deletePasien}
                  alt="deletePasien"
                  className="border mt-2 "
                />
              </div>

              <div>
                <h1 className="font-medium">06. Jadwal</h1>{" "}
                <p>
                  Halaman jadwal menampilkan tabel data jadwal. Pada tabel
                  jadwal admin dapat melakukan update data jadwal.
                </p>
                <Image src={jadwal} alt="jadwal" className="border mt-2 " />
                <Image
                  src={updateJadwal}
                  alt="updateJadwal"
                  className="border mt-2 "
                />
              </div>
              <div>
                <h1 className=" font-medium">07. Pelayanan</h1>{" "}
                <p>
                  Halaman pelayanan menampilkan inputan untuk membuat pelayanan
                  baru dan tabel data pelayanan. Pada tabel pelayanan admin
                  dapat melakukan update data pelayanan.
                </p>
                <Image
                  src={pelayanan}
                  alt="pelayanan"
                  className="border mt-2 "
                />
                <Image
                  src={updatePelayanan}
                  alt="updatePelayanan"
                  className="border mt-2 "
                />
              </div>
            </div>
          </div>
          <div id="content-3" className="border border-[#0079FF] mt-6 p-4 ">
            <div>
              <h1 className="flex justify-center items-center text-[18px] font-medium">
                Aplikasi ini dibangun menggunakan{": "}
              </h1>
            </div>

            <div className="flex justify-center items-center space-x-3 mt-3">
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
