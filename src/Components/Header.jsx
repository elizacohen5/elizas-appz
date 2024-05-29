import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: '#9500ae'
    },
    secondary: purple,
  },
});

function Header() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar color="primary">
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <NavLink className="nav-link" to="/">
                  Eliza's Appz
                </NavLink>
              </Typography>
              <Button color="secondary" variant="contained" sx={{marginRight:"20px"}}>
                <NavLink className="nav-link" to="/form">
                  + Add New
                </NavLink>{" "}
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
        <nav></nav>
      </ThemeProvider>
    </>
  );
}

export default Header;
