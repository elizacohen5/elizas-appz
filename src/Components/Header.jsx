import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink className="nav-link" to="/">Eliza's Appz</NavLink>
            </Typography>
            <Button color="inherit">
              <NavLink className="nav-link" to="/form">+ Add New</NavLink>{" "}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <nav></nav>
    </>
  );
}

export default Header;
