import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import HomeContainer from "./containers/HomeContainer";

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
        <div className="App">
          <HomeContainer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
