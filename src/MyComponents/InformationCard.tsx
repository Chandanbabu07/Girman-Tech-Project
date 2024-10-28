import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ProfileImage from "../Images/Ellipse 2.png";
import { useMyContext } from "@/Context";

export default function InformationCard(item: any) {
  console.log("InformationCarditem", item.item.first_name);
  const { setShowProfileModal, setProfileDetails } = useMyContext();

  const handleFetchDetails = () => {
    setProfileDetails(item.item);
    setShowProfileModal(true);
  };

  return (
    <Card className="w-[25rem] h-[22rem] p-4 rounded-xl shadow-md bg-white">
      <CardHeader className="flex flex-col items-start">
        <Avatar className="mb-4 w-16 h-16">
          <AvatarImage src={ProfileImage} alt="Profile Picture" />
        </Avatar>
        <CardTitle className="text-xl font-bold text-gray-900 font-inter font-semibold text-2xl leading-tight">
          {item.item.first_name} {item.item.last_name}
        </CardTitle>
        <div className="flex items-center text-sm text-gray-500">
          <FaMapMarkerAlt className="mr-1" />
          {item.item.city}
        </div>
      </CardHeader>
      <div className="w-[22.75rem] border border-gray-200"></div>
      <CardFooter className="mt-12">
        <div className="flex items-center justify-between w-full">
          <div className="text-sm">
            <FaPhoneAlt className="inline mr-2 text-gray-600" />
            <span> {item.item.contact_number}</span>
            <p className="text-xs text-gray-400">Available on phone</p>
          </div>
          <Button
            onClick={() => handleFetchDetails()}
            className="bg-black text-white rounded-xl hover:bg-black focus:bg-black transform transition-transform hover:scale-105 active:scale-100"
          >
            Fetch Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
