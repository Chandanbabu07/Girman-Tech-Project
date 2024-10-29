import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../Images/image.svg";
import LargeLogo from "../Images/Group 1.svg";
import BackgroundImage from "../Images/backgroundImage.png";
import NameLogo from "../Images/Girman.svg";
import SearchLogo from "../Images/Vector.svg";
import EmptySearch from "../Images/Group 143.png";
import InformationCard from "./InformationCard";
import UserData from "../Data/UserData.json";
import { User } from "../Types/Types";

const Homepage = () => {
  const [highlightOption, setHighlightOption] = useState<string>("Search");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<User[]>();
  const [showEmptyImage, setShowEmptyImage] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleHighlight = (option: string) => {
    setHighlightOption(option);
    if (option === "Website") {
      window.location.href = "https://girmantech.com/";
    } else if (option === "LinkedIn") {
      window.location.href = "https://www.linkedin.com/company/girmantech/";
    } else if (option === "Contact") {
      window.location.href = "mailto:contact@girmantech.com";
    }
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
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
      }}
    >
      <header className="fixed w-full py-4 shadow-md bg-white z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="h-12 w-12 sm:h-16 sm:w-16" />
            <div className="flex flex-col items-start space-y-1">
              <div
                className="font-bold text-gray-800 font-poppins"
                style={{
                  fontSize: "30px",
                  lineHeight: "36px",
                }}
              >
                Girman
              </div>
              <div
                className="text-xs text-gray-600 font-poppins"
                style={{ fontSize: "10px", fontWeight: "600" }}
              >
                TECHNOLOGIES
              </div>
            </div>
          </div>

          <nav className="hidden sm:flex space-x-6">
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

          <div className="sm:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <AiOutlineClose size={24} />
              ) : (
                <AiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="sm:hidden mt-2">
            <div className="flex flex-col items-center space-y-4 bg-white p-4 shadow-md">
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
            </div>
          </nav>
        )}
      </header>

      <main className="flex flex-col items-center mt-20 sm:mt-28 w-full px-4">
        <div className="flex items-center space-x-4 sm:space-x-7">
          <img
            src={LargeLogo}
            alt="Girman Logo"
            className="h-24 w-24 sm:h-36 sm:w-36"
          />
          <img
            src={NameLogo}
            alt="Girman Logo"
            className="w-[250px] h-[150px] sm:w-[380px] sm:h-[240px]"
          />
        </div>

        <div className="relative mt-2 w-full max-w-md">
          <img
            src={SearchLogo}
            alt="SearchLogo"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            style={{ height: "15px" }}
          />
          <Input
            placeholder="Search"
            className="pl-10 py-3 rounded-md shadow-md bg-white border border-gray-300"
            style={{ borderRadius: "10px", width: "100%" }}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </main>

      {filteredData && filteredData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-7xl px-4 mt-8 mb-20">
          {filteredData.map((item: User) => (
            <InformationCard key={item.contact_number} item={item} />
          ))}
        </div>
      ) : (
        showEmptyImage && (
          <div className="px-4 mt-20 mb-20 flex justify-center w-full">
            <img src={EmptySearch} alt="Empty Search" className="w-64" />
          </div>
        )
      )}
    </div>
  );
};

export default Homepage;
