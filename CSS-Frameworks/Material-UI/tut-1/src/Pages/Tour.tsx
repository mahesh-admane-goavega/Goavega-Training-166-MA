import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CustomizedAccordions from "../Components/Accordian";
import QuiltedImageList from "../Components/ImageCollage";

import { Restore, Favorite, Home } from "@mui/icons-material";
import TransitionsModal from "../Components/Modal";

type Props = {};

export const Tour = (props: Props) => {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Lets Explore the world!!!
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://d240vg222euz94.cloudfront.net/media/uploads/images/a5981c45-4f4d-44b8-a581-d9b10985fcb7.jpeg"
          alt=""
          height={325}
        />
        <QuiltedImageList />
      </Box>
      <Box>
        <Typography variant="h6" component="h3" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="caption" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          assumenda odio sed hic qui beatae harum facilis eveniet quis, odit
          maiores laboriosam omnis adipisci mollitia tempore fugiat, illo totam
          numquam?
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" component="h3" marginTop={3} marginBottom={2}>
          Frequently asked Quetions
        </Typography>
        <CustomizedAccordions />
      </Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <TransitionsModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};
