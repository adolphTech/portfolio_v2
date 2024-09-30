import React from "react";
import "./Home.css";
import { BsDownload } from "react-icons/bs";
import { FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";
import logo from "./jiraiya.jpg";

function Home() {
  const avatarUrl =
    "https://res.cloudinary.com/dchhoja40/image/upload/v1683644427/ady/ady-logo_ttrcnp.png";
    // "https://asset.cloudinary.com/dchhoja40/c5210a7f5acacbf33686f92a25c20075"

  return (
    <div className="home-component bg-gray-900 text-white mt-20 bg-primary">
      <div className="container mx-auto py-15">
        <div className="lg:flex lg:justify-between mt-20">
          <div className="lg:w-1/3  mt-6 lg:mt-0 text-center lg:text-left">
            <div className="flex justify-center lg:justify-end">
              <img
                className="w-80 h-80 rounded-full object-cover"
                src={logo}
                alt="Avatar of Adolph"
              />
            </div>
          </div>

          <div className="lg:w-2/3  text-center lg:text-left mt-6 lg:mt-20 px-4">
            {" "}
            {/* Adjust margin-top here */}
            <div>
              <div className="flex justify-center ">
                <p className="text-4xl font-bold ">AdolphYYY Odhiambo</p>
              </div>

              <div className="flex space-x-4 mt-4 justify-center">
                <div className="circle">
                  <a
                    href="https://github.com/adolphTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                  >
                    <FiGithub />
                  </a>
                </div>
                <div className="circle">
                  <a
                    href="https://twitter.com/_why_ideas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                  >
                    <FiTwitter />
                  </a>
                </div>
                <div className="circle">
                  <a
                    href="https://www.instagram.com/adolp.h/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon"
                  >
                    <FiInstagram />
                  </a>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button className="bg-transparent border border-white text-white px-6 py-2 rounded-lg">
                  <a
                    href="https://drive.google.com/file/d/1yB3LJbbTC-4-8yED4qMJ9VdaJelmA7IE/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      whiteSpace: "nowrap",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <BsDownload className="text-xl mr-2" /> <span>Resume</span>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
