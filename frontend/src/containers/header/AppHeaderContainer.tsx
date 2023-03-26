import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import AppHeaderItems from "../../components/header/AppHeaderItems";

const AppHeaderContainer = () => {
  const nightMode = useSelector((state: RootState) => state.common.nightMode);
  return <AppHeaderItems nightMode={nightMode} />;
};

export default AppHeaderContainer;
