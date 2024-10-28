import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../Images/image.svg";
import LargeLogo from "../Images/Group 1.svg";
import BackgroundImage from "../Images/backgroundImage.png";
import NameLogo from "../Images/Girman.svg";

const Homepage = () => {
  return (
    <div
      className="flex flex-col items-center min-h-screen min-w-screen bg-cover bg-top"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.8) 31%, rgba(177, 203, 255, 0.8) 100%), url(${BackgroundImage})`,
      }}
    >
      <header className="w-full py-4 shadow-md bg-white">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="h-16 w-16" />
            <div className="flex flex-col items-start space-y-1">
              <div
                className="text-custom font-bold text-custom-gray font-poppins"
                style={{
                  color: "#111111",
                  fontWeight: "700",
                  fontSize: "37.23px",
                  lineHeight: "42.17px",
                }}
              >
                Girman
              </div>
              <div
                className="text-sm text-gray-600 font-poppins"
                style={{ fontSize: "11.24px", fontWeight: "600" }}
              >
                TECHNOLOGIES
              </div>
            </div>
          </div>

          <nav className="space-x-6">
            <Button
              variant="link"
              className="text-gray-700 hover:text-blue-600"
            >
              Search
            </Button>
            <Button
              variant="link"
              className="text-gray-700 hover:text-blue-600"
            >
              Website
            </Button>
            <Button
              variant="link"
              className="text-gray-700 hover:text-blue-600"
            >
              LinkedIn
            </Button>
            <Button
              variant="link"
              className="text-gray-700 hover:text-blue-600"
            >
              Contact
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex flex-col items-center mt-16 w-full">
        <div className="flex items-center space-x-7 ml-16">
          <img src={LargeLogo} alt="Girman Logo" className="h-36 w-36" />
          <img
            src={NameLogo}
            alt="Girman Logo"
            className="w-[380px] h-[240px]"
          />
        </div>

        <div className="relative mt-2 w-full max-w-md">
          <Input
            placeholder="Search"
            className="pl-10 py-3 rounded-md shadow-md bg-white border-none"
            style={{ borderRadius: "10px", width: "550px" }}
          />
        </div>
      </main>
    </div>
  );
};

export default Homepage;
