import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "../Images/image.svg";
import LargeLogo from "../Images/Group 1.svg";
import BackgroundImage from "../Images/backgroundImage.png";
import NameLogo from "../Images/Girman.svg";
import EmptySearch from "../Images/Group 143.png";
import InformationCard from "./InformationCard";
import UserData from "../Data/UserData.json";
import { User } from "../Types/Types";

const Homepage = () => {
  const [highlightOption, setHighlightOption] = useState<string>("Search");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<User[]>();
  const [showEmptyImage, setShowEmptyImage] = useState<boolean>(false);

  const handleHighlight = (option: string) => {
    setHighlightOption(option);
    if (option === "Website") {
      window.location.href = "https://girmantech.com/";
    } else if (option === "LinkedIn") {
      window.location.href = "https://www.linkedin.com/company/girmantech/";
    } else if (option === "Contact") {
      window.location.href = "mailto:contact@girmantech.com";
    }
  };
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    console.log("searchTerm", searchTerm);
    if (searchTerm.length === 0) {
      setFilteredData([]);
      setShowEmptyImage(false);
    } else {
      const handler = setTimeout(() => {
        const filtered = UserData.filter(
          (user) =>
            user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log("filtered", filtered);

        if (filtered.length > 0) {
          setFilteredData(filtered);
          setShowEmptyImage(false);
        } else {
          setShowEmptyImage(true);
        }
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    }
  }, [searchTerm]);

  return (
    <div
      className="flex flex-col items-center min-h-screen min-w-screen bg-cover bg-top"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.8) 31%, rgba(177, 203, 255, 0.8) 100%), url(${BackgroundImage})`,
        height: "auto",
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
            {["Search", "Website", "LinkedIn", "Contact"].map((option) => (
              <Button
                key={option}
                variant="link"
                className={`text-gray-700 hover:text-blue-600 ${
                  highlightOption === option ? "font-bold text-blue-600" : ""
                }`}
                onClick={() => handleHighlight(option)}
              >
                {option}
              </Button>
            ))}
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
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </main>

      {filteredData && filteredData?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl px-4 mt-8 mb-20">
          {filteredData &&
            filteredData.map((item: User) => (
              <InformationCard key={item.contact_number} item={item} />
            ))}{" "}
        </div>
      ) : (
        showEmptyImage && (
          <div className=" px-4 mt-20 mb-20">
            <img
              src={EmptySearch}
              alt="EmptySearch"
              style={{ width: "350px" }}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Homepage;
