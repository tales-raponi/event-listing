import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "./Card.css";

const CardComponent: React.FC<PropTypes> = ({
  address,
  cellphone,
  city,
  complement,
  date,
  event,
  img,
  local,
  number,
  state,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    p: 4,
  };

  return (
    <div className="main-container">
      <Card
        sx={{ maxWidth: 345 }}
        onClick={() => setOpen(true)}
        className={"card"}
      >
        <CardHeader title={event} subheader={date} />
        <CardMedia component="img" height="194" image={img} alt="Paella dish" />
        <CardContent>
          <Button onClick={handleOpen} style={{ color: "grey" }}>
            Detalhes
          </Button>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <p style={{ fontSize: "20px" }}>Endereço</p>
          <Typography variant="body2" color="text.secondary">
            {address +
              ", " +
              number +
              ", " +
              local +
              " - " +
              city +
              ` (${state})`}
          </Typography>
          <p style={{ fontSize: "20px" }}>Complemento</p>
          <Typography variant="body2" color="text.secondary">
            {complement}
          </Typography>
          <p style={{ fontSize: "20px" }}>Telefone:</p>
          <Typography variant="body2" color="text.secondary">
            {cellphone}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

interface PropTypes {
  date: string;
  event: string;
  local: string;
  address: string;
  complement: string;
  number: string;
  city: string;
  state: string;
  cellphone: string;
  img: string;
}

export default CardComponent;
