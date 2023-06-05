import { Avatar, Button } from "@mui/material";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import image from "../assets/male1.png";

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Avatar alt="Remy Sharp" src={image} sx={{ marginRight: "20px" }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            John Doe
          </Typography>
          <Button variant="text" onClick={props.logOutHandler}>
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
