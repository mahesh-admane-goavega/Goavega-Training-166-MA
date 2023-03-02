import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export const BasicCard = ({ content, cardHeader }: any) => {
  return (
    <Card>
      {cardHeader}
      <CardContent>{content}</CardContent>
    </Card>
  );
};
