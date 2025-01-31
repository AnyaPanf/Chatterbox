import { Box } from "@mui/system";
import React from "react";
import { Message } from "./Message";

export const MessagesArea = ({ messages, name }) => {
  return (
    <Box
      sx={{
        overflowY: "auto",
        width: "100%",
      }}
    >
      {messages?.map(({ user, message }) => {
        const itsMe =
          user?.username?.trim().toLowerCase() === name?.trim().toLowerCase();

        return (
          <Message message={message} name={user.username} author={itsMe} />
        );
      })}
    </Box>
  );
};
