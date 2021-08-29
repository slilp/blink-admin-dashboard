import React from "react";
import { Box } from "@material-ui/core";
import { Profile, ProfileMenu, ProfileImage, SignOutButton } from "./style";
import { BsGearFill } from "react-icons/bs";
import { FaRegShareSquare } from "react-icons/fa";

interface ProfileSectionProps {
  firstName?: string;
  lastName?: string;
  img?: string;
}

function ProfileSection({ firstName, lastName, img }: ProfileSectionProps) {
  return (
    <Profile>
      <Box mb={1} mt={4} fontWeight="fontWeightBold">
        {firstName} {lastName}
      </Box>
      <ProfileMenu>
        <span>
          <BsGearFill></BsGearFill>
        </span>
        <span>Setting</span>
      </ProfileMenu>
      <SignOutButton>
        <span>
          <FaRegShareSquare></FaRegShareSquare>
        </span>
        <span>Sign out</span>
      </SignOutButton>
      <ProfileImage profile={img} />
    </Profile>
  );
}

export default ProfileSection;
