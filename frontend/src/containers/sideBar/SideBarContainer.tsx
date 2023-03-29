import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { toggleNightMode } from "../../redux/slices/commonSlice";
import SideBar from "../../components/sideBar/SideBar";

const SideBarContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.common.sideBar);

  return (
    <SideBar
      isOpen={isOpen}
      homeClick={() => navigate("/")}
      playListClick={() => navigate("/playlist")}
      nightModeToggle={() => dispatch(toggleNightMode())}
    />
  );
};

export default SideBarContainer;
