import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AppBar } from "@mui/material";
import AppHeaderItems from "../../components/header/AppHeaderItems";

const AppHeaderContainer = () => {
  const nightMode = useSelector((state: RootState) => state.common.nightMode);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1,
        ...(nightMode
          ? {}
          : {
              color: "grey",
              backgroundColor: "white",
            }),
      }}
    >
      <AppHeaderItems />
    </AppBar>
  );
};

export default AppHeaderContainer;
