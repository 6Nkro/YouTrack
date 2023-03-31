import { Box } from "@mui/material";
import PlatformButtonsContainer from "./PlatformButtonsContainer";
import SearchResultContainer from "./SearchResultContainer";

const HomeContainer = () => {
  return (
    <Box
      component="main"
      sx={{
        display: "grid",
        placeItems: "center",
        p: 3,
      }}
    >
      <PlatformButtonsContainer />
      <SearchResultContainer />
    </Box>
  );
};

export default HomeContainer;
