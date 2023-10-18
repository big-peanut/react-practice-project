import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

function UserList({ users }) {
  return (
    <List>
      {users.map((user) => (
        <ListItem key={Math.random().toString()}>
          <ListItemText primary={`Name: ${user.name}, Age: ${user.age}`} />
        </ListItem>
      ))}
    </List>
  );
}

export default UserList;
