import React from "react";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { ChatHeader } from "../components/ChatHeader";
import { MessagesArea } from "../components/MessagesArea";
import { SendMessagePanel } from "../components/SendMessagePanel";
import bcgImg from "../styles/chat_bcg.jpg";
import socket from "../socket";

export const Chat = () => {
  const [state, setState] = useState([]);
  const { search } = useLocation();
  const [params, setParams] = useState({ username: "", room: "" });
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const searchParams = Object.fromEntries(new URLSearchParams(search));
    setParams(searchParams);
    socket.emit("join", searchParams);
  }, [search]);

  useEffect(() => {
    socket.on("message", ({ data }) => {
      setState((_state) => [..._state, data]);
    });
  }, []);

  useEffect(() => {
    socket.on("room", ({ data: { users } }) => {
      setUsers(users);
    });
  }, []);

  useEffect(() => {
    socket.on("all_users", (users) => {
      setAllUsers(users);
    });
  });

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundImage: `url(${bcgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <>
        <ChatHeader params={params} users={users} allUsers={allUsers} />
        <MessagesArea messages={state} name={params.username} />
        <SendMessagePanel
          message={message}
          setMessage={setMessage}
          params={params}
        />
      </>
    </Box>
  );
};
