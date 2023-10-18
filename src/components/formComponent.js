import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import UserList from "./userListComponent";
import Alert from "./alertComponent";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [alertMessage, setAlertMessage] = useState(null);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [users, setUsers] = useState([]);

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = () => {
    if (name.trim().length === 0 || age.trim().length === 0) {
      setAlertMessage("Please provide input");
      setIsAlertOpen(true);
    } else if (Number(age) < 0) {
      setAlertMessage("Age cannot be negative");
      setIsAlertOpen(true);
    } else {
      const newUser = { name, age };
      setUsers([...users, newUser]);
      setName("");
      setAge("");
      setIsAlertOpen(false);
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setIsAlertOpen(false);
  };

  return (
    <Box
      sx={{
        height: "300px",
        width: "300px",
        marginLeft: "370px",
        marginTop: "30px",
      }}
    >
      <Stack spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          sx={{ width: "100%", minHeight: "40px" }}
          value={name}
          onChange={nameHandler}
        />
        <TextField
          label="Age"
          variant="outlined"
          sx={{ width: "100%", minHeight: "40px" }}
          value={age}
          onChange={ageHandler}
        />
        <Button
          variant="contained"
          onClick={addUserHandler}
          sx={{ width: "100%" }}
        >
          Add
        </Button>
      </Stack>
      <UserList users={users} />
      <Alert
        isAlertOpen={isAlertOpen}
        alertMessage={alertMessage}
        handleCloseAlert={handleCloseAlert}
      />
    </Box>
  );
}

export default Form;
