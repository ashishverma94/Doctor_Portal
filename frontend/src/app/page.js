import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg-[#151C39] h-screen w-full flex justify-center items-center ">
      <div className=" bg-[#409BEE] text-white p-4 rounded-lg hover:bg-gray-500">
      <Link href = "/dashboard"> Go To Dashboard</Link>
    </div>
    </div>
  );
}
