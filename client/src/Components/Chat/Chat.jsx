import { useState } from "react";
import classes from "./Chat.module.css";
import Header from "../Header";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Avatar, Grid } from "@mui/material";
import contacts from "../../store/data";
import Typography from "@mui/material/Typography";

const Chat = (props) => {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const messageHandler = (message) => {
    if (message.target.value.trim() !== 0) {
      setIsValid(true);
    }
    setMessage(message.target.value);
  };

  console.log(contacts);

  const sendHandler = (e) => {
    e.preventDefault();
    setChat((prevMessage) => {
      return [...prevMessage, message];
    });
    setMessage("");
  };

  return (
    <div>
      <Header logOutHandler={props.logOutHandler} />
      <Grid container sx={{ marginTop: "64px" }}>
        <Grid item xs={4} sx={{ borderRight: "1px solid #333" }}>
          {contacts.map((contact) => {
            return (
              <button key={contact.id} className={classes.contacts}>
                <Avatar
                  alt="Remy Sharp"
                  src={contact.avatar}
                  sx={{ marginRight: "20px" }}
                />
                <div className={classes["message-details"]}>
                  <Typography
                    variant="h6"
                    component="h6"
                    sx={{ display: "inline-block" }}
                  >
                    {contact.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {contact.message}
                  </Typography>
                </div>
              </button>
            );
          })}
        </Grid>
        <Grid item xs={8}>
          <div className={classes.ul}>
            <ul className={classes.messages}>
              {chat.map((chat) => {
                return <li>{chat}</li>;
              })}
            </ul>
          </div>
          <div className={classes.form}>
            <form onSubmit={sendHandler} className={classes.form}>
              <input
                className={classes.input}
                autoComplete="off"
                value={message}
                onChange={messageHandler}
              />
              {isValid ? (
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={sendHandler}
                >
                  Send
                </Button>
              ) : (
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={sendHandler}
                  disabled
                >
                  Send
                </Button>
              )}
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Chat;
