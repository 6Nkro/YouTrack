import { Box, styled } from "@mui/material";

const CustomScrollbar = styled(Box)(({ theme }) => ({
  "&::-webkit-scrollbar": {
    height: "8px",
    borderRadius: "4px",
    backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#F5F5F5",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "4px",
    backgroundColor: theme.palette.mode === "dark" ? "#757575" : "#BDBDBD",
  },
  "&::-webkit-scrollbar-track": {
    borderRadius: "4px",
    backgroundColor: theme.palette.mode === "dark" ? "#424242" : "#F5F5F5",
  },
}));

export default CustomScrollbar;
