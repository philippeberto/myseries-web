import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {
  urlImage: string;
  title: string;
  year: string;
};

export default function MediaCard(props: Props) {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="443"
        image={props.urlImage}
        alt="green iguana"
      />
      <CardContent sx={{ minHeight: 0 }}>
        <Typography gutterBottom variant="h5" display="flex" alignItems="start">
          {props.title}

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="right"
            display="inline-block"
          >
            {props.year}
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
