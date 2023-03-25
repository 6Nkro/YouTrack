import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ListItem from "../../components/commons/ListItem";

const handleHomeClick = () => {
  console.log("HomeContainer button clicked");
};

const HomeButtonContainer = () => (
  <ListItem icon={<HomeIcon />} text={"Home"} onClick={handleHomeClick} />
);

export default HomeButtonContainer;
