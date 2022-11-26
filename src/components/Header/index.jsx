import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Category, Button } from "./styles";
import { Categories } from "../Categories"
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #1a73e8',
  boxShadow: 24,
  p: 4,
};

export function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Link to="/" className="logo">
        STORE
      </Link>
      <Category>
        <Button onClick={handleOpen}>
          <Link to="/">Categorias</Link>
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box sx={style} onClick={handleClose}>
            <Categories />
          </Box>
        </Modal>
      </Category>
    </Container>
  )
}
