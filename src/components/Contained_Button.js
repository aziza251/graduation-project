import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Contained_Button({ label, onClick }) {
  return (
    <Stack spacing={15} direction="row">
      <Button
        variant="contained"
        style={{ backgroundColor: "#33ada6" }}
        onClick={onClick}
      >
        {label}
      </Button>
    </Stack>
  );
}
