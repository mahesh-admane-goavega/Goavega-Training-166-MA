import { Grid } from "@mui/material";
import React from "react";
import { MediaCard } from "../../Common/BasicCard/MediaCard";

type Props = {};

export const MyFunction = (props: Props) => {
  const data = {
    imageUrl:
      "https://cdn.monkplatform.com/image/czoyMjg6Imh0dHBzJTNBJTJGJTJGMzFiYWE5MjA0MDExYTRiNzM3M2QtNGI0NWM2MjdiNDc4OTA0YjRkOThiYzMyYjRiZTkyOTEuc3NsLmNmMi5yYWNrY2RuLmNvbSUyRnVwbG9hZGVkJTJGcCUyRjBlNjA3Njg4OF8xNDkwODA2ODc2X3BleGVscy1waG90by05MDgwNy5qcGVnJTNGcSUzRDkwJTI2dyUzRDMyMDAlMjZoJTNEMCUyNmZpdCUzRG1heCUyNnMlM0RjOGQxODJmYjQ1NThjOTc1MTM3ZjJjM2MzZmM3ZTAxYSI7/pexels-photo-90807.jpeg",
    title: "Function",
  };
  return (
    <Grid
      item
      xs={12}
      sx={{
        marginLeft: "320px",
        backgroundColor: "#eaeff1",
        padding: "58px 380px",
        minHeight: "calc(100vh-166px)",
        position: "relative",
      }}
    >
      <MediaCard imageUrl={data.imageUrl} title={data.title} />
    </Grid>
  );
};
