import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface PropTypes {}

const Header: React.FC<PropTypes> = ({}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ background: "#747474" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Lista de Eventos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
