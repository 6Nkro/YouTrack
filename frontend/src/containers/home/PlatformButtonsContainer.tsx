import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import PlatformButtons from "../../components/home/PlatformButtons";
import { setPlatform } from "../../store/slices/searchSlice";

export type Platforms = string[];

const PlatformButtonsContainer = () => {
  const platforms: Platforms = ["YouTube", "kakao"];

  const dispatch = useDispatch<AppDispatch>();
  const handlePlatformClick = async (platform: string) => {
    dispatch(setPlatform(platform));
  };

  return (
    <PlatformButtons platforms={platforms} onClick={handlePlatformClick} />
  );
};

export default PlatformButtonsContainer;
