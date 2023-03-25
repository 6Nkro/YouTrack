import React from "react";
import HomeContainer from "./containers/HomeContainer";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {
  const nightMode = useSelector((state: RootState) => state.common.nightMode);

  const theme = createTheme({
    palette: {
      mode: nightMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomeContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;
