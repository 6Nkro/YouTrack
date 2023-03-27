import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { GlobalStyles, CssBaseline, Box } from "@mui/material";
import AppHeaderContainer from "./containers/header/AppHeaderContainer";
import SideBarContainer from "./containers/sideBar/SideBarContainer";
import HomeContainer from "./containers/home/HomeContainer";
import PlayListContainer from "./containers/playList/PlayListContainer";

const App = () => {
  const queryClient = new QueryClient();
  const nightMode = useSelector((state: RootState) => state.common.nightMode);

  const theme = createTheme({
    palette: {
      mode: nightMode ? "dark" : "light",
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <GlobalStyles styles={{ body: { overflowY: "scroll" } }} />
          <CssBaseline />
          <Router>
            <AppHeaderContainer />
            <SideBarContainer />
            <Box sx={{ pt: 8 }}>
              <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/playlist" element={<PlayListContainer />} />
              </Routes>
            </Box>
          </Router>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
