import SearchResultContainer from "./SearchResultContainer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setPlatform } from "../../store/slices/searchSlice";
import {
  HomeBox,
  PlatformButton,
  PlatformButtonGroup,
} from "../../components/home/HomeElements";

const HomeContainer = () => {
  const platforms = ["YouTube", "kakao"];

  const dispatch = useDispatch<AppDispatch>();
  const platformButtons = platforms.map(platform => (
    <PlatformButton
      key={platform}
      onClick={() => dispatch(setPlatform(platform))}
    >
      {platform}
    </PlatformButton>
  ));

  return (
    <HomeBox component="main">
      <PlatformButtonGroup color="info" size="large">
        {platformButtons}
      </PlatformButtonGroup>
      <SearchResultContainer />
    </HomeBox>
  );
};

export default HomeContainer;
