import React, { useState } from "react";
import { Collapse, Typography, Box, Button } from "@mui/material";

const ExpandableText: React.FC<{ text: string }> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Collapse in={isExpanded}>
        <Typography sx={{ p: 1, whiteSpace: "pre-line" }}>{text}</Typography>
      </Collapse>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
        <Button variant="text" onClick={handleExpandToggle}>
          {isExpanded ? "숨기기" : "내용 보기"}
        </Button>
      </Box>
    </>
  );
};

export default ExpandableText;
