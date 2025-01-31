import React from "react";
import { TextField, Button, Box } from "@mui/material";
import emojiIcon from "../styles/emojiIcon.svg";
import EmojiPicker from "emoji-picker-react";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import socket from "../socket";
import { useEffect } from "react";

export const SendMessagePanel = ({ message, setMessage, params }) => {
  const handleChange = (value) => {
    setMessage(value);
  };

  const handleSendMessage = (e) => {
    if (e.type === "keydown" && e.key !== "Enter") return;

    e.preventDefault();
    if (!message) return;

    socket.emit("send_message", { message, params });
    setMessage("");
  };

  const onEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => `${prevMessage} ${emojiObject.emoji}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderTop: "solid 1px #d4d9c5",
        backgroundColor: "white",
      }}
    >
      <TextField
        value={message}
        id="outlined-basic"
        name="message"
        placeholder="Write a message..."
        variant="outlined"
        onKeyDown={handleSendMessage}
        inputProps={{
          autoComplete: "off",
        }}
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
        onChange={(e) => handleChange(e.target.value)}
      />
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <Button {...bindTrigger(popupState)} sx={{ mr: 1 }}>
              <img src={emojiIcon} alt="emoji" width="30" height="30" />
            </Button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              transformOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <EmojiPicker onEmojiClick={onEmojiClick} />
            </Popover>
          </div>
        )}
      </PopupState>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          backgroundColor: "#00e068",
          borderRadius: 5,
          fontFamily: "Playwrite VN, serif",
          fontSize: 15,
          fontWeight: 400,
          minWidth: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "none",
          mr: 2,
        }}
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Box>
  );
};
