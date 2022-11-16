import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import BasicModal from "./BasicModal";

export default function MediaCard({ flagurl, name, commonName, details }) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const onClose = () => {
    setModalIsOpen(false);
  };

  return (
    <Card
      sx={{
        width: 300,
        border: 1,
        borderColor: "rgba(0,0,0,.2)",
        background: "rgba(10,10,10,.1)",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={flagurl}
        alt="green iguana"
        sx={{ margin: "auto", width: "auto" }}
      />
      <CardContent>
        <BasicModal
          modalIsOpen={modalIsOpen}
          onClose={onClose}
          details={details}
        ></BasicModal>
        <Typography gutterBottom variant="h5" component="div">
          <div
            onClick={() => {
              setModalIsOpen(true);
            }}
          >
            {commonName}
          </div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}
