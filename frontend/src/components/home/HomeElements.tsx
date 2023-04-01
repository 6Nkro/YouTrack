import { Box, Button, ButtonGroup, styled } from "@mui/material";

export const HomeBox = styled(Box)({
  display: "grid",
  placeItems: "center",
  padding: "24px",
});

export const PlatformButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  bottom: "0px",
  zIndex: 2,
  borderRadius: "20px 20px 0 0",
  backgroundColor: theme.palette.mode === "dark" ? "#121212" : "white",
}));

export const PlatformButton = styled(Button)({
  borderBottom: 0,
  borderRadius: "20px 20px 0 0",
  textTransform: "none",
  "&:hover": {
    borderBottom: 0,
  },
});
