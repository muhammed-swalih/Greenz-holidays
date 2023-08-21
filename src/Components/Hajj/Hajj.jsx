import React, { useEffect } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import bg from "../../DESKTOP/HAJJ&UMRAH/MAKKAH_BG.webp";
import { FaWhatsapp } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import Footer from "../HomepageComponets/Footer";
import guide from "../../DESKTOP/HAJJ&UMRAH/guide-book (1).webp";
import hajjguide from "../../DESKTOP/HAJJ&UMRAH/training.webp";
import transportation from "../../DESKTOP/HAJJ&UMRAH/bus.webp";
import tickets from "../../DESKTOP/HAJJ&UMRAH/plane-tickets.webp";
import hotel from "../../DESKTOP/HAJJ&UMRAH/hotel.webp";
import hajj from "../../DESKTOP/HAJJ&UMRAH/information.webp";
import money from "../../DESKTOP/HAJJ&UMRAH/buying.webp";
import visa from "../../DESKTOP/HAJJ&UMRAH/symbols.webp";
import Navbar from "../Navbar";
import HomeNavbar from "../HomeNavbar";
import newbg from "../../NEW ASSETS/MOBILE OTHER PAGES/hajj.webp";
function Hajj() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isMedium = useMediaQuery("(min-width  : 1024px)");
  if (isMedium) {
    return (
      <div className=" w-full min-h-screen h-auto my-font">
        <div
          className=" w-full h-60 bg-cover bg-black bg-center "
          style={{ backgroundImage: `url(${newbg})` }}
        >
          <div className=" bg-gradient-to-b from-gray-300">
            <HomeNavbar />
            <div className=" w-full h-60 bg-gradient-to-t from-gray-900">
              <div className=" w-[1150px] h-full mx-auto pb-5 flex items-end">
                <h1 className="my-text text-white text-4xl tracking-widest">
                  Hajj & umrah
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[1150px] h-auto flex mx-auto justify-between my-10">
          <div className="">
            <h1 className=" uppercase font-bold text-black text-wl">
              hajj & umrah service
            </h1>
            <h1 className=" text-black text-sm w-[600px] font-medium mt-5">
              With a comprehensive range of travel products, Fly Greenz Holidays
              aims at satisfying the most discerning corporate travelers having
              the most complicated and demanding travel schedules.Out retail
              outlets combine business excellence with an entrepreneurial spirit
              to deliver travel products and services that are innovative and
              customer-centric.
            </h1>
          </div>
          <div>
            <div className="bg-green-500 w-96 h-20 flex justify-center items-center">
              <div className=" flex gap-2">
                <h1 className=" text-white text-3xl">
                  <FaWhatsapp />
                </h1>
                <h1 className=" text-white text-2xl font-semibold">
                  Contact on Whatsapp
                </h1>
              </div>
            </div>
            <div className=" mt-5 w-96 h-[250px] bg-[#4D5BDA] px-5 pt-5">
              <div>
                <h1 className="text-white text-xl font-semibold">
                  Get a Question ?
                </h1>
                <h1 className=" w-[250px] text-sm text-white">
                  Do not hesitage to give us a call. We are an expert team and
                  we are happy to talk to you.
                </h1>
              </div>
              <div className=" mt-5">
                <div className=" flex gap-3">
                  <h1 className=" text-white text-3xl">
                    <BiPhoneCall />
                  </h1>
                  <h1 className=" text-white font-semibold">91 12365667890</h1>
                </div>
                <div className=" flex gap-3">
                  <h1 className=" text-white text-3xl">
                    <HiMail />
                  </h1>
                  <h1 className=" text-white font-semibold">
                    darkweb@gmail.com
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 w-[1150px] h-auto py-10 my-font">
          <h1 className=" uppercase text-lg font-bold text-center">
            service we offer
          </h1>
          <div className=" mt-5 flex flex-wrap gap-10 mx-auto w-[1000px]  justify-center">
            <div className=" w-[200px] h-[150px] bg-[#4D5BDA] opacity-80 rounded-lg">
              <div className=" flex flex-col justify-center items-center h-full gap-">
                <img src={guide} alt="" width={60} />
                <h1 className=" text-white">Umrah Guide</h1>
              </div>
            </div>
            <div className=" w-[200px] h-[150px] bg-[#4D5BDA] opacity-80 rounded-lg">
              <div className=" flex flex-col justify-center items-center h-full gap-">
                <img src={hajjguide} alt="" width={60} />
                <h1 className=" text-white">Umrah Guide</h1>
              </div>
            </div>
            <div className=" w-[200px] h-[150px] bg-[#4D5BDA] opacity-80 rounded-lg">
              <div className=" flex flex-col justify-center items-center h-full gap-">
                <img src={transportation} alt="" width={60} />
                <h1 className=" text-white">Transportatoin</h1>
              </div>
            </div>
            <div className=" w-[200px] h-[150px] bg-[#4D5BDA] opacity-80 rounded-lg">
              <div className=" flex flex-col justify-center items-center h-full gap-">
                <img src={tickets} alt="" width={60} />
                <h1 className=" text-white">Tickets</h1>
              </div>
            </div>
            <div className=" w-[200px] h-[150px] bg-[#4D5BDA] opacity-80 rounded-lg">
              <div className=" flex flex-col justify-center items-center h-full gap-">
                <img src={hotel} alt="" width={60} />
                <h1 className=" text-white">Hotels</h1>
              </div>
            </div>
            <div className=" w-[200px] h-[150px] bg-[#4D5BDA] opacity-80 rounded-lg">
              <div className=" flex flex-col justify-center items-center h-full gap-">
                <img src={hajj} alt="" width={60} />
                <h1 className=" text-white">Hajj Guide</h1>
              </div>
            </div>
            <div className=" w-[200px] h-[150px] bg-[#4D5BDA] opacity-80 rounded-lg">
              <div className=" flex flex-col justify-center items-center h-full gap-">
                <img src={money} alt="" width={60} />
                <h1 className=" text-white">Money Exchange</h1>
              </div>
            </div>
            <div className=" w-[200px] h-[150px] bg-[#4D5BDA] opacity-80 rounded-lg">
              <div className=" flex flex-col justify-center items-center h-full gap-">
                <img src={visa} alt="" width={60} />
                <h1 className=" text-white">Visa Assistance</h1>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className=" w-full my-font">
      <Navbar />
      <div
        className="w-full  h-36 bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" w-full  flex justify-center items-center h-36 bg-gradient-to-t from-gray-900">
          <h1 className=" my-text text-white tracking-wider text-3xl">
            hajj & umrah
          </h1>
        </div>
      </div>
      <div className=" my-10 px-5">
        <div className=" flex flex-col gap-2">
          <h1 className=" uppercase font-bold text-2xl">HAJJ & UMRAH</h1>
          <h1 className=" text-sm font-semibold ">
            With a comprehensive range of travel products, Fly Greenz Holidays
            aims at satisfying the most discerning corporate travelers having
            the most complicated and demanding travel schedules.Out retail
            outlets combine business excellence with an entrepreneurial spirit
            to deliver travel products and services that are innovative and
            customer-centric.
          </h1>
        </div>
      </div>
      <div className=" my-5 px-5">
        <h1 className=" text-center uppercase text-2xl font-bold">
          service we offer
        </h1>
        <div className=" flex flex-wrap gap-5 mt-5 justify-center">
          <div className=" flex flex-col items-center gap-2 justify-center w-32 h-32 bg-blue-500 rounded-xl">
            <img src={guide} alt="" width={50} />
            <h1 className=" text-white ">Umrah Guide</h1>
          </div>
          <div className=" flex flex-col items-center gap-2 justify-center w-32 h-32 bg-blue-500 rounded-xl">
            <img src={hajjguide} alt="" width={50} />
            <h1 className=" text-white ">Hajj Guide</h1>
          </div>
          <div className=" flex flex-col items-center gap-2 justify-center w-32 h-32 bg-blue-500 rounded-xl">
            <img src={transportation} alt="" width={50} />
            <h1 className=" text-white ">Transportation</h1>
          </div>
          <div className=" flex flex-col items-center gap-2 justify-center w-32 h-32 bg-blue-500 rounded-xl">
            <img src={tickets} alt="" width={50} />
            <h1 className=" text-white ">Tickets</h1>
          </div>
          <div className=" flex flex-col items-center gap-2 justify-center w-32 h-32 bg-blue-500 rounded-xl">
            <img src={hotel} alt="" width={50} />
            <h1 className=" text-white ">Hotel</h1>
          </div>
          <div className=" flex flex-col items-center gap-2 justify-center w-32 h-32 bg-blue-500 rounded-xl">
            <img src={hajj} alt="" width={50} />
            <h1 className=" text-white ">Hajj Guide</h1>
          </div>
          <div className=" flex flex-col items-center gap-2 justify-center w-32 h-32 bg-blue-500 rounded-xl">
            <img src={money} alt="" width={50} />
            <h1 className=" text-white w-16 text-center">Money Exchange</h1>
          </div>
          <div className=" flex flex-col items-center gap-2 justify-center w-32 h-32 bg-blue-500 rounded-xl">
            <img src={visa} alt="" width={50} />
            <h1 className=" text-white ">Visa Assistance</h1>
          </div>
        </div>
      </div>
      <div className="px-5 my-10">
        <div className=" rounded-lg w-full min-h-60 h-auto px-4 bg-blue-500 py-3 ">
          <div className=" text-white flex flex-col gap-2">
            <h1 className=" font-semibold text-2xl">Get a Question?</h1>
            <h1 className=" text-sm w-60">
              Do not hesitate to give us a call. We are an expert team and we
              are happy to talk to you.
            </h1>
          </div>
          <div className="items-center flex gap-3 mt-5">
            <h1 className=" text-white text-3xl">
              <BiPhoneCall />
            </h1>
            <h1 className=" text-white font-semibold">91 1234567890</h1>
          </div>
          <div className="items-center flex gap-3 mt-5">
            <h1 className=" text-white text-3xl">
              <HiMail />
            </h1>
            <h1 className=" text-white font-semibold">darkweb@gmail.com</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hajj;
