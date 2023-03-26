import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AppTitle from "../../components/header/AppTitle";

const AppTitleContainer = () => {
  const nightMode = useSelector((state: RootState) => state.common.nightMode);
  return <AppTitle text="YouTrack" nightMode={nightMode} />;
};

export default AppTitleContainer;
