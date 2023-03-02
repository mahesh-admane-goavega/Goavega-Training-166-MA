import { Grid } from "@mui/material";
import React from "react";
import { MediaCard } from "../../Common/BasicCard/MediaCard";

export const Hosting = () => {
  const data = {
    imageUrl:
      "https://www.biznetgio.com/assets/main/images/news/rsz_11kelebihan_dan_kekurangan_shared_hosting-01.jpg",
    title: "Hosting",
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
