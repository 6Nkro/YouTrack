import React, { useState } from "react";
import {
  Typography,
  styled,
  Box,
  Button,
  Collapse,
  TypographyProps,
} from "@mui/material";

interface SeparatorProps {
  margin?: number;
  variant?: TypographyProps["variant"];
  color?: TypographyProps["color"];
}

export const Separator: React.FC<SeparatorProps> = ({
  margin,
  variant,
  color,
}) => (
  <Typography
    variant={variant || "inherit"}
    color={color || "inherit"}
    sx={{ mx: margin || 1 }}
  >
    |
  </Typography>
);

interface LineClampTextProps {
  text: string;
  lineClamp: number;
  variant?: TypographyProps["variant"];
  color?: TypographyProps["color"];
}

export const LineClampText: React.FC<LineClampTextProps> = ({
  text,
  lineClamp,
  variant,
  color,
}) => (
  <Typography variant={variant} color={color} sx={setLineClamp(lineClamp)}>
    {text}
  </Typography>
);

const setLineClamp = (lineClamp: number) => ({
  display: "-webkit-box",
  WebkitLineClamp: lineClamp,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const EllipsisText = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

interface TextWithSeparatorProps {
  texts: string[];
  variant?: TypographyProps["variant"];
  color?: TypographyProps["color"];
}

export const TextWithSeparator: React.FC<TextWithSeparatorProps> = ({
  texts,
  variant,
  color,
}) => (
  <>
    {texts.map((text, index) => (
      <React.Fragment key={index}>
        <EllipsisText variant={variant || "inherit"} color={color || "inherit"}>
          {text}
        </EllipsisText>
        {texts.length - 1 > index && (
          <Separator
            variant={variant || "inherit"}
            color={color || "inherit"}
          />
        )}
      </React.Fragment>
    ))}
  </>
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
      <ExpendButtonBox>
        <Button variant="text" onClick={handleExpandToggle}>
          {isExpanded ? "숨기기" : "내용 보기"}
        </Button>
      </ExpendButtonBox>
    </>
  );
};

const ExpendButtonBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  marginTop: 1,
});
