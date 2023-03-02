import Grid from "@mui/material/Grid/Grid";
import React from "react";
import { MediaCard } from "../../Common/BasicCard/MediaCard";

type Props = {};

export const Storage = (props: Props) => {
  const data = {
    imageUrl:
      "https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/saving-hard-drive-space-using-cloud-storage-hero1536263948584.jpg",
    title: "Storage",
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
