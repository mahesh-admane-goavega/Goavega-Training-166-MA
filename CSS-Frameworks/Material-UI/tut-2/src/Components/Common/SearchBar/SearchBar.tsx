import React from "react";
import Input from "@mui/material/Input/Input";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box/Box";
export const SearchBar = ({ placeholder, onChange, serchBarWidth }: any) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <SearchIcon sx={{ marginRight: "10px" }} />
      <Input
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          width: serchBarWidth,
          color: "rgba(0,0,0,0.6)",
          fontSize: "1.1rem",
        }}
      />
    </Box>
  );
};
