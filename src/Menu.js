import { MenuItem } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function PokemonMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <button
        id="menu-button"
        aria-controls={open ? "pokemon-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </button>

      <Menu id="pokemon-menu" open={open}>
        <MenuItem onClick={handleClose}>Pokemon Search</MenuItem>
      </Menu>
    </div>
  );
}
