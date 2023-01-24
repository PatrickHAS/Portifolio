import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";

export const Button = styled("button", {
  height: "2.75rem",
  appearance: "none",
  background: "$whiteFixed",
  color: "$grey1",
  fontWeight: "600",
  padding: "0 2rem",
  border: "2px solid $whiteFixed",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",

  variants: {
    type: {
      btLink: {
        background: "transparent",
        borderColor: "transparent",
        color: "$whiteFixed",

        "&:hover": {
          backgroundColor: "$whiteFixed",
          borderColor: "$grey5",
          color: "$brand1",
        },
      },
      primary: {
        background: "transparent",
        borderColor: "$grey5",
        color: "$green",

        "&:hover": {
          backgroundColor: "$green",
          borderColor: "$grey5",
          color: "$whiteFixed",
        },
      },
      secondary: {
        background: "transparent",
        borderColor: "$grey5",
        color: "$gray1",

        "&:hover": {
          backgroundColor: "$grey1",
          borderColor: "$grey5",
          color: "$whiteFixed",
        },
      },
      tertiary: {
        background: "transparent",
        borderColor: "$grey5",
        color: "$brand1",

        "&:hover": {
          backgroundColor: "$brand1",
          borderColor: "$grey5",
          color: "$whiteFixed",
        },
      },
      quarternary: {
        background: "$brand1",
        borderColor: "$grey5",
        color: "$whiteFixed",

        "&:hover": {
          backgroundColor: "$grey3",
          borderColor: "$grey5",
          color: "$brand1",
        },
      },
      icon: {
        borderColor: "$grey5",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$grey5",
        },
      },
      circle: {
        borderColor: "$grey5",
        backgroundColor: "$whiteFixed",
        borderRadius: "50%",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        "&:hover": {
          backgroundColor: "$grey5",
        },
      },
    },
    ...colors,
  },
});
