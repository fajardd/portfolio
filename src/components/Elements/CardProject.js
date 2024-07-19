import React from "react";
import AppImage from "@/assets/Images/app-1.png";
import Image from "next/image";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

const CardProject = () => {
  return (
    <div className="max-w-lg p-6 border border-[#0079FF] rounded-lg shadow bg-white mt-6">
      <div className="relative rounded-lg">
        <Image src={AppImage} className="rounded-lg" />

        <h5 className="absolute bottom-0 left-0  font-semibold bg-[#0079FF] hover:bg-[#0079FF] w-full text-white bg-opacity-50 p-2 rounded-b-lg cursor-pointer">
          Admin Presensi
        </h5>
      </div>

      <p className="mt-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
        Web admin yang dibangun menggunakan frmework nextjs dan tailwind css
      </p>
      <Link href="#">
        <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0079FF] rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none gap-x-2 ">
          Read more
          <ArrowCircleRightIcon className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
};
export default CardProject;
