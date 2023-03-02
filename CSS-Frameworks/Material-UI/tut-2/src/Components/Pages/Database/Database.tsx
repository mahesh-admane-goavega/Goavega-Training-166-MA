import { Grid } from "@mui/material";
import React from "react";
import { MediaCard } from "../../Common/BasicCard/MediaCard";

type Props = {};

export const Database = (props: Props) => {
  const data = {
    imageUrl:
      "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154099/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png",
    title: "Database",
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
