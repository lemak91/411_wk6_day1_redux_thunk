import React from 'react'
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
  IconButton,
  Menu,
  MenuItem
} from "@mui/material";
import { MoreVert } from '@mui/icons-material';


const Import = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    props.deleteMakes();
    setAnchorEl(null);
  };
    // fill out this component

    return (
      <>
        <Container sx={{ marginTop: "4rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={props.fetchMakes}
          >
            Import
          </Button>
          <h2>Count: {props.makes.length}</h2>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Make</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.makes.map((make, index) => (
                <TableRow key={index}>
                  <TableCell>{make.MakeId}</TableCell>
                  <TableCell>{make.MakeName}</TableCell>
                  <TableCell>
                    <IconButton
                      key={index}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleDelete}>Delete</MenuItem>
          </Menu>
        </Container>
      </>
    );
}

export default Import