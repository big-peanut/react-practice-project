import React from "react";
import { Snackbar } from "@mui/material";

function Alert({ isAlertOpen, alertMessage, handleCloseAlert }) {
  return (
    <Snackbar
      open={isAlertOpen}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
      message={alertMessage}
    />
  );
}

export default Alert;
