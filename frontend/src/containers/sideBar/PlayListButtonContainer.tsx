import React from "react";
import ListIcon from "@mui/icons-material/List";
import ListItem from "../../components/commons/ListItem";

const handlePlaylistClick = () => {
  console.log("Playlist button clicked");
};

const PlayListButtonContainer = () => (
  <ListItem
    icon={<ListIcon />}
    text={"PlayList"}
    onClick={handlePlaylistClick}
  />
);

export default PlayListButtonContainer;
