import { Box, Button, TextField, Autocomplete, Stack } from "@mui/material";
import { useState } from "react";
import searchIcon from "../styles/searchIcon.svg";

export const UserSearch = ({ allUsers }) => {
  const [findUser, setFindUser] = useState("");
  const [userFound, setUserFound] = useState("");

  const handleChange = (_, value) => {
    setFindUser(value || "");
  };

  const handleClick = () => {
    // Normally all search operations are made on backend
    if (!findUser?.trim()) return;

    const u = allUsers?.find(
      (user) =>
        user?.username?.trim().toLowerCase() === findUser?.trim().toLowerCase()
    );

    if (u) {
      setUserFound(u);
    }

    setFindUser("");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", padding: "5px 16px" }}>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
        onInputChange={(event, value) => handleChange(value)}
          sx={{
            mr: 2,
            ml: 40,
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
          id="free-solo-demo"
          freeSolo
          options={allUsers.map((option) => option.username)}
          getOptionLabel={(option) => option || ""}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search user"
              InputLabelProps={{ shrink: false }}
            />
          )}
        />
      </Stack>

      <Button
        sx={{
          ":hover": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
        onClick={handleClick}
      >
        <img src={searchIcon} alt="search" width="25" height="25" />
      </Button>
    </Box>
  );
};
