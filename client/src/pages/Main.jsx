import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import backgroundImage from "../styles/loginbcg.jpg";
import { useNavigate } from "react-router";
import { useState } from "react";

const FIELDS = {
  USERNAME: "username",
  ROOM: "room",
};

export const Main = () => {
  const { USERNAME, ROOM } = FIELDS;
  const navigate = useNavigate();
  const [values, setValues] = useState({ [USERNAME]: "", [ROOM]: "" });

  const handleClick = (e) => {
    const isDisabled = Object.values(values).some((value) => !value);

    if (isDisabled) {
      e.preventDefault();
      return;
    }

    navigate(`/chat?name=${values[USERNAME]}&${values[ROOM]}`);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 4,
          width: 350,
          borderRadius: 10,
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          textAlign="center"
          sx={{ fontFamily: "Playwrite VN, serif", fontWeight: 400, mb: 3 }}
        >
          Chatterbox
        </Typography>
        <form>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Name"
              name={USERNAME}
              value={values[USERNAME]}
              variant="outlined"
              color="secondary"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Room"
              name={ROOM}
              value={values[ROOM]}
              variant="outlined"
              color="secondary"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#00e068",
              borderRadius: 10,
            }}
            fullWidth
            onClick={(e) => {
              handleClick(e);
            }}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Box>
  );
};
