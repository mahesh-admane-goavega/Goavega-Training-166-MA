import React from "react";
import logo from "./logo.svg";
import { TourCard } from "../Components/TourCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import cities from "../data.json";
import { Typography } from "@mui/material";

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className="App">
      <Container
        sx={{
          marginY: 5,
        }}
      >
        {cities.map((city: any) => (
          <>
            <Typography
              variant="h4"
              component="h4"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name}
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour: any, index: any) => (
                <TourCard tours={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
};
