import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import _ from "lodash";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Card } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ details, modalIsOpen, onClose }) {
  const {
    commonName,
    officialName,
    flagurl,
    cca2,
    cca3,
    nativeName,
    altSpellings,
    idd: { root, suffixes },
  } = details;
  console.log("details nativeNames", nativeName);
  const nativeCoutnryName = _.reduce(
    nativeName,
    (result, value, key) => {
      console.log("value ::", value);
      return value.official;
    },
    {}
  );
  console.log("nativeCoutnryName:", nativeCoutnryName);
  const alternativeCountryName = altSpellings.join();
  const countryCallingCodes = root + suffixes;

  return (
    <div>
      <Modal
        open={modalIsOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            component="img"
            height="140"
            image={flagurl}
            alt="green iguana"
            sx={{ margin: "auto", width: "auto" }}
          />

          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>{commonName}</div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Official Name: {officialName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            2 character Country Code: {cca2}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            3 character Country Code: {cca3}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Native Country Name: {nativeCoutnryName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Alternative Country Name: {alternativeCountryName}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Country Calling Codes : {countryCallingCodes}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
