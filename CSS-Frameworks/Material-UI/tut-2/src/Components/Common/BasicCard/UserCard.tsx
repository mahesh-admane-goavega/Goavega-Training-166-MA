import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Option } from "../Option/Option";

type Props = {};

export const UserCard = ({ userData }: any) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 220 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1521098258210-W9FBV72SMJJX3LESUA7Z/js.jpg?format=2500w"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userData.attributes.Full_Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userData.attributes.Email}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userData.attributes.Role}
          </Typography>
        </CardContent>
        <CardActions>
          <Box sx={{ marginLeft: "80%", cursor: "pointer" }}>
            {/* <MoreVertIcon fontSize="small" /> */}
            <Option props={Number(userData.id)} />
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};
