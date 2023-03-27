import React, { useState } from "react";
import { Box, Button, Collapse, Typography } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography/Typography";

interface SeparatorProps {
  mx?: number;
  color?: string;
  variant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
}

export const Separator: React.FC<SeparatorProps> = ({ mx, color, variant }) => (
  <Typography
    variant={variant || "inherit"}
    color={color || "inherit"}
    sx={{ mx: mx || 1 }}
  >
    |
  </Typography>
);

interface LineClampTextProps {
  text: string;
  lineClamp: number;
  color?: string;
  variant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
}

export const LineClampText: React.FC<LineClampTextProps> = ({
  text,
  color,
  lineClamp,
  variant,
}) => (
  <Typography
    variant={variant || "inherit"}
    color={color || "inherit"}
    sx={{
      display: "-webkit-box",
      WebkitLineClamp: lineClamp,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      textOverflow: "ellipsis",
    }}
  >
    {text}
  </Typography>
);

interface EllipsisTextProps {
  text: string;
  color?: string;
  variant?: OverridableStringUnion<
    Variant | "inherit",
    TypographyPropsVariantOverrides
  >;
}

export const EllipsisText: React.FC<EllipsisTextProps> = ({
  text,
  color,
  variant,
}) => (
  <Typography
    variant={variant || "inherit"}
    color={color || "inherit"}
    sx={{
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    }}
  >
    {text}
  </Typography>
);

interface ExpendableTextProps {
  text: string;
}

export const ExpendableText: React.FC<ExpendableTextProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Collapse in={isExpanded}>
        <Typography sx={{ p: 1, whiteSpace: "pre-line" }}>{text}</Typography>
      </Collapse>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          mt: 1,
        }}
      >
        <Button variant="text" onClick={handleExpandToggle}>
          {isExpanded ? "숨기기" : "내용 보기"}
        </Button>
      </Box>
    </>
  );
};
