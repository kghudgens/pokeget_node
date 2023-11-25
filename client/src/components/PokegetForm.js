import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

export default function PokegetForm() {
  const [formTitle, setFormTitle] = React.useState("By Pokemon");

  return (
    <FormControl>
      <InputLabel htmlFor="component-outlined">{formTitle}</InputLabel>
      <OutlinedInput
        id="component-outlined"
        defaultValue="Bulbasaur"
        label="Name"
      />
    </FormControl>
  );
}
