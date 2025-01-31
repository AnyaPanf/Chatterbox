import React from "react";
import { Typography, Grid, Box } from "@mui/material";

export const Message = ({ message, name, author }) => {
  let justifyContent;
  let color;
  let backgroundColor;
  let fontSize;

  switch (true) {
    case author:
      justifyContent = "flex-end";
      color = "#2d2c2c";
      fontSize = "14px";
      backgroundColor = "#00e06cCC";
      break;
    case name === "Admin":
      justifyContent = "center";
      color = "#2d2c2c";
      fontSize = "13px";
      backgroundColor = "#ffffff80";
      break;
    default:
    case !author:
      justifyContent = "flex-start";
      color = "white";
      fontSize = "14px";
      backgroundColor = "#704a9dCC";
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: justifyContent,
        padding: "10px",
        mx: 35,
      }}
      // I know its a bad practice to use index as an id, but for such a project this might be ok.
      // key={id}
    >
      <Box
        sx={{
          backgroundColor: backgroundColor,
          color: color,
          borderRadius: "8px",
          padding: "10px 15px 5px",
          maxWidth: "80%",
          boxShadow: 3,
        }}
      >
        <Typography
          variant="body1"
          sx={{ marginBottom: "5px", fontSize: fontSize, minWidth: "50px" }}
        >
          {message}
        </Typography>
        <Grid
          container
        >
          <Grid item xs="auto"></Grid>
          <Grid item xs="auto">
            <Typography
              variant="caption"
              color="#d4d9c5"
              sx={{ fontWeight: 600 }}
            >
              {name}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
