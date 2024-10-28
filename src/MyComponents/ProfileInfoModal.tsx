import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ProfilePicture from "../Images/Rectangle 1.png";
import { useMyContext } from "@/Context";

export default function ProfileInfoModal() {
  const { showProfileModal, setShowProfileModal, profileDetails } =
    useMyContext();

  console.log("profileDetails", profileDetails?.first_name);

  return (
    <Dialog open={showProfileModal} onOpenChange={setShowProfileModal}>
      <DialogContent
        className="max-w-md p-6 rounded-lg shadow-lg bg-white"
        style={{ maxWidth: "33rem" }}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Fetch Details
          </DialogTitle>
          <DialogDescription className="text-gray-500">
            Here are the details of the following employee.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          <p>
            <strong>Name:</strong> {profileDetails?.first_name}
          </p>
          <p>
            <strong>Location:</strong> {profileDetails?.city}
          </p>
          <p>
            <strong>Contact Number:</strong> {profileDetails?.contact_number}
          </p>
          <p>
            <strong>Profile Image:</strong>
          </p>
          <img
            src={ProfilePicture}
            alt="Profile"
            className="w-full h-auto rounded-md"
            style={{ height: "200px", width: "200px" }}
          />
        </div>
        <DialogFooter>
          <Button
            className="bg-white text-black rounded-xl hover:bg-white focus:bg-white transform transition-transform hover:scale-105 active:scale-100"
            onClick={() => setShowProfileModal(false)}
            style={{ border: "1px solid #E4E4E7" }}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
