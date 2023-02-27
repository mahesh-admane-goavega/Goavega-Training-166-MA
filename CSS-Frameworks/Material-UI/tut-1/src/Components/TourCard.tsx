import React from "react";
import Paper from "@mui/material/Paper";

import { AccessTime } from "@mui/icons-material";
import { Box, Grid, Rating, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
      ],
    },
  },
});

type Props = {
  tours: any;
};

export const TourCard = (props: Props) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3}>
          <img src={props.tours.image} alt="" className="img" />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            paddingX={2}
          >
            <Typography variant="subtitle2" component="h2">
              {props.tours.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            paddingX={2}
          >
            <AccessTime
              sx={{
                width: 12.5,
              }}
            />
            <Typography variant="body2" component={"p"} marginLeft={0.5}>
              {props.tours.duration} hours
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            marginTop={3}
            marginLeft={1}
          >
            <Rating
              value={props.tours.rating}
              name="read-only"
              readOnly
              precision={0.5}
              size="small"
            />
            <Typography variant="body2" component={"p"} marginLeft={0.5}>
              {props.tours.rating}
            </Typography>
            <Typography variant="body2" component={"p"} marginLeft={1.5}>
              ({props.tours.numberOfReviews})
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItem: "center",
            }}
            marginLeft={2}
          >
            <Typography variant="h6" component={"h3"} marginTop={0}>
              Price: {props.tours.price} &#8377;
            </Typography>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};
