import React, {useState} from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { fontSize } from "@mui/system";


const AvatarProfile = () => {
  const [imgProfile, setImgProfile] = useState("");

  return (
    <div>
      {imgProfile ? (
        <Avatar alt="" src="" />
      ) : (
        <Avatar
          sx={{ bgcolor: deepOrange[500], width: 160, height: 160, fontSize: 100}}
        >
          J
        </Avatar>
      )}
    </div>
  );
};

export default AvatarProfile;
