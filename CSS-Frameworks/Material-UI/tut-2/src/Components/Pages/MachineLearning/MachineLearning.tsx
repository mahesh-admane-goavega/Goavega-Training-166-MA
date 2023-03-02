import Grid from "@mui/material/Grid/Grid";
import React from "react";
import { MediaCard } from "../../Common/BasicCard/MediaCard";

type Props = {};

export const MachineLearning = (props: Props) => {
  const data = {
    imageUrl:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
    title: "Machine-Learning",
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
