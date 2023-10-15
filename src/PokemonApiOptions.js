import * as React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";

export default function PokemonApiOptions() {
  const handleMenuClick = (menuItem) => {
    return menuItem;
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  function openMenu() {
    console.log("Opened");
    setIsMenuOpen(true);
  }
  const [pokemonApiOption, setPokemonApiOption] =
    React.useState("Search Options");

  const SelectedOption = (menuItem) => {};
  return (
    <Dropdown open={isMenuOpen}>
      <button onClick={openMenu}>{pokemonApiOption}</button>
      <Menu slots={{ listbox: "ul" }}>
        <MenuItem onClick={handleMenuClick("By Pokemon")}>By Pokemon</MenuItem>
        <MenuItem onClick={handleMenuClick("By Location")}>
          By Location
        </MenuItem>
        <MenuItem onClick={handleMenuClick("By Type")}>By Type</MenuItem>
      </Menu>
    </Dropdown>
  );
}

// click menu button
// once clicked i need it to display the dropdown
