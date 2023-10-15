import * as React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";

export default function PokemonApiOptions() {
  const selectedOption = {
    apiOption: "By Pokemon",
  };
  const handleMenuClick = (menuItem) => {};

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  function openMenu() {
    console.log("Opened");
    setIsMenuOpen(true);
  }
  function menuItemSelection(apiOption) {
    setPokemonApiOption(apiOption);
    console.log();
  }
  const [pokemonApiOption, setPokemonApiOption] =
    React.useState("Search Options");

  const SelectedOption = (menuItem) => {};
  return (
    <Dropdown open={isMenuOpen}>
      <button onClick={openMenu}>{selectedOption}</button>
      <Menu slots={{ listbox: "ul" }}>
        <MenuItem onClick={menuItemSelection("By Pokemon")}>
          By Pokemon
        </MenuItem>
        <MenuItem onClick={menuItemSelection("By Location")}>
          By Location
        </MenuItem>
        <MenuItem onClick={menuItemSelection("By Type")}>By Type</MenuItem>
      </Menu>
    </Dropdown>
  );
}

// need to make the text clickable
// once clicked it needs to replace the text in the dropdown
