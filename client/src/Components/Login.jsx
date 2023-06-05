import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Login = (props) => {
  return (
    <Box
      sx={{
        my: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
      }}
    >
      <Avatar sx={{ backgroundColor: "transparent" }}>
        <LoginOutlinedIcon color="primary" fontSize="large" />
      </Avatar>
      <h1>Sign In</h1>
      <Box component="form" onSubmit={props.logInHandler} sx={{ mt: 2 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          name="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember Me?"
        />
        <Button variant="contained" type="submit" fullWidth sx={{ mt: 2 }}>
          Sign In
        </Button>
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs>
            <Link href="#" vairant="body2">
              Forgot Password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" vairant="body2">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Login;
