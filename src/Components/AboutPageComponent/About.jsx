import React, { useContext } from "react";
import Footer from "../HomepageComponets/Footer";
import { useMediaQuery } from "@react-hook/media-query";
import bg from "../../DESKTOP/ABOUT US/ABOUT.webp";
import family from "../../DESKTOP/ABOUT US/family_photo.webp";
import Navbar from "../Navbar";
import HomeNavbar from "../HomeNavbar";
import newbg from "../../NEW ASSETS/MOBILE OTHER PAGES/About.webp";
function About() {
  const isMedium = useMediaQuery("(min-width : 1024px)");

  if (isMedium) {
    return (
      <div className=" my-font">
        <div className=" w-full min-h-screen h-auto">
          <div
            className=" w-full h-80 bg-cover"
            style={{ backgroundImage: `url(${newbg})` }}
          >
            <div className=" bg-gradient-to-b from-white h-full">
              <HomeNavbar />
              <div className="w-[1150px] h-full flex justify-center items-center  mx-auto">
                <h1 className=" my-font text-black text-6xl tracking-widest uppercase font-semibold">
                  about us
                </h1>
              </div>
            </div>
          </div>
          <div className=" my-20 rounded-2xl w-[1150px] min-h-60 h-auto mx-auto  flex justify-evenly">
            <div className=" w-[350px] h-[400px]  rounded-2xl">
              <img
                className=" w-full h-full object-cover"
                src={family}
                alt=""
              />
            </div>
            <div className="">
              <h1 className=" uppercase text-black w-[470px] text-sm font-semibold">
                We are a passionate team with the vision of providing the best &
                exciting experience for customers.
                <br />
                <br />
                <br /> We commenced our operations in 2013 with a full bouquet
                of service,A team of travel and tourism proffessionals.Now it
                has grown one of the best leading team with each of services is
                being of the distinct quality . We believes in improving our
                abilities to deliver services without compromising the quality
                and customer satisfaction. Our energy and success is derived
                from our experience and talented staff.
              </h1>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
  return (
    <div className=" w-full h-auto my-font ">
      <Navbar />
      <div
        className=" w-full h-48 bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className=" my-text text-4xl text-white tracking-widest">
          about us
        </h1>
      </div>
      <div className=" my-5 flex px-5 ">
        <h1 className=" text-center uppercase text-sm font-bold">
          We are a passionate team with the vision of providing the best &
          exciting experience for customers.
          <br />
          <br />
          <br /> We commenced our operations in 2013 with a full bouquet of
          service,A team of travel and tourism proffessionals.Now it has grown
          one of the best leading team with each of services is being of the
          distinct quality . We believes in improving our abilities to deliver
          services without compromising the quality and customer satisfaction.
          Our energy and success is derived from our experience and talented
          staff.
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default About;
