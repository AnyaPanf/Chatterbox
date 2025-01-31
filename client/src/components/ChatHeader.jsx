import React from "react";
import { Box, Button, Typography } from "@mui/material";
import socket from "../socket";
import { useNavigate } from "react-router-dom";
import { UserSearch } from "./UserSearch";

export const ChatHeader = ({ params, users, allUsers }) => {
  // I didn't have enough time to finish this component, but thats how I would finish it.
  //Probably I would change the structure of our params object and would add a isCreator field in it.
  // As the curent projet does not imply a list of rooms (it would be easier to get this data at creating
  // a room) on backend I would check the length of users in the room array. If the user is the only one in the room
  // = they have created it. The corresponding field would be added to the object and returned to front end
  //where we would return the usernames and the delete function accordingly.

  const navigate = useNavigate();

  const handleLeave = () => {
    socket.emit("room", { params });
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        alignItems: "center",
        padding: "5px 20px 3px",
        backgroundColor: "white",
        borderBottom: "solid 1px #d4d9c5",
      }}
    >
      <UserSearch allUsers={allUsers} />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: 15, fontWeight: "bold", color: "#313946" }}
        >
          {params?.room}
        </Typography>
        <Box sx={{ display: "flex" }}>
          {users.map((u) => (
            <Typography variant="body2" sx={{ fontSize: 13, opacity: 0.5, mr: 1 }}>
              {u.username}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          sx={{
            backgroundColor: "#6532a9",
            borderRadius: 5,
            fontSize: 13,
            fontWeight: 400,
            width: "65px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "none",
            color: "white",
          }}
          onClick={handleLeave}
        >
          Leave
        </Button>
      </Box>
    </Box>
  );
};
