import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { IoIosSend } from "react-icons/io";
import Image from "next/image";
import { IoCheckmarkDone } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import ThinBar from "./components/thinbar/page";

const Home = () => {
  return (
    <>
      <p className="text-black text-sm flex items-center gap-2 px-3 py-2 border-b border-b-gray-200">
        <IoLogoWhatsapp size="24px" color="green" />
        WhatsApp
      </p>
      <div className=" flex h-screen">
        <ThinBar />
        <div className="w-[25%] border-r border-l p-4 border-gray-200">
          <div className="flex flex-row items-center gap-1 bg-gray-100 w-full p-2 rounded-lg mb-5">
            <IoIosSearch size="20px" color="#777" />
            <input placeholder="Search your friends" className="text-sm" />
          </div>
          <div className="flex flex-col gap-6">
            <a
              href="#"
              className="flex flex-row gap-2 relative items-center w-full"
            >
              <span className="absolute text-gray-400 text-xs right-0 top-0">
                11:11 am
              </span>
              <Image
                src="/logo.jpg"
                width={45}
                height={45}
                alt="user"
                className="rounded-full border border-gray-200"
              />
              <div className="flex flex-col w-full">
                <h4 className="text-sm">Ram shrestha</h4>
                <div className="flex items-center gap-1 w-full">
                  <IoCheckmarkDone
                    size={14}
                    className="shrink-0 text-gray-500"
                  />
                  <p
                    className="text-xs text-gray-600 truncate"
                    style={{ width: "calc(100% - 70px)" }}
                  >
                    Hi, there!
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-row gap-2 relative items-center w-full"
            >
              <span className="absolute text-gray-400 text-xs right-0 top-0">
                11:11 am
              </span>
              <Image
                src="/logo.jpg"
                width={45}
                height={45}
                alt="user"
                className="rounded-full border border-gray-200"
              />
              <div className="flex flex-col w-full">
                <h4 className="text-sm">Ram shrestha</h4>
                <div className="flex items-center gap-1 w-full">
                  <MdOutlineDone size={14} className="shrink-0 text-gray-500" />
                  <p
                    className="text-xs text-gray-600 truncate"
                    style={{ width: "calc(100% - 70px)" }}
                  >
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-row gap-2 relative items-center w-full  bg-gray-200 p-2 rounded-lg"
            >
              <span className="absolute text-gray-400 text-xs right-3 top-2">
                11:11 am
              </span>
              <Image
                src="/logo.jpg"
                width={45}
                height={45}
                alt="user"
                className="rounded-full border border-gray-200"
              />
              <div className="flex flex-col w-full">
                <h4 className="text-sm">Ram shrestha</h4>
                <div className="flex items-center gap-1 w-full">
                  <MdOutlineDone size={14} className="shrink-0 text-gray-500" />
                  <p
                    className="text-xs text-gray-600 truncate"
                    style={{ width: "calc(100% - 70px)" }}
                  >
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>
            </a>
            <a href="#" className="flex flex-row gap-2 relative items-center">
              <span className="absolute text-gray-400 text-xs right-0 top-0">
                11:11 am
              </span>
              <Image
                src="/logo.jpg"
                width={45}
                height={45}
                alt="user"
                className="rounded-full border border-gray-200"
              />
              <div className="flex flex-col">
                <h4 className="text-sm">Ram shrestha</h4>
                <p className="text-xs text-gray-600 flex items-center gap-1">
                  <IoCheckmarkDone />
                  Hi, there!
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className=" w-[70%] relative">
          <div className="py-3 px-4 flex flex-row gap-2 relative items-center w-full shadow-xs pb-3">
            <Image
              src="/logo.jpg"
              width={35}
              height={35}
              alt="user"
              className="rounded-full border border-gray-200"
            />
            <div className="flex flex-col w-full">
              <h4 className="text-sm">Ram shrestha</h4>
              <div className="flex items-center gap-1 w-full">
                <p className="text-xs text-gray-600">Online</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-9 w-full border-t border-gray-200">
            <div className="relative">
              <textarea
                id="message"
                placeholder="Type your message..."
                className="min-h-15 p-3 w-full placeholder-gray-400 text-sm focus:outline-gray-300 resize-none"
              ></textarea>
              <button className="cursor-pointer flex items-center justify-center w-7 h-7 rounded-full bg-black absolute top-5 right-5 z-10">
                <IoIosSend size="18" className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
