import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { useState } from "react";
import Login from "./Components/Login";
import Chat from "./Components/Chat/Chat";

function App() {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const logInHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setName(data.get("email"));
    console.log(data.get("password"));
    setLogin(true);
  };

  const logOutHandler = () => {
    setLogin(false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12}>
          {login ? (
            <Chat logOutHandler={logOutHandler} />
          ) : (
            <Login logInHandler={logInHandler} />
          )}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
