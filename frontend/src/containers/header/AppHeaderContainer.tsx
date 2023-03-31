import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { toggleSideBar } from "../../store/slices/commonSlice";
import AppHeader from "../../components/header/AppHeader";

export const AppHeaderContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSideBarToggle = () => {
    dispatch(toggleSideBar());
  };

  return <AppHeader toggleSideBar={handleSideBarToggle} />;
};

export default AppHeaderContainer;
