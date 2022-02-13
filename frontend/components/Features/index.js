import * as React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
  AppBar,
} from "@mui/material";

import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

export default function Index() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 2,
      }}
    >
      <Box>
        <h1> SHORTEN, SHARE AND ANALYZE</h1>
        <br />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-around",
          alignContent: "space-around",
          alignItems: "space-around",
          width: "50vw",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "centre",
            alignItems: "center",
          }}
        >
          <RemoveRedEyeIcon sx={{ width: "3.5rem", height: "3.5rem" }} />
          <h4>VIEW COUNTER</h4>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "centre",
            alignItems: "center",
          }}
        >
          <QrCodeScannerIcon sx={{ width: "3.5rem", height: "3.5rem" }} />
          <h4>QR CODE</h4>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "centre",
            alignItems: "center",
          }}
        >
          <RocketLaunchIcon sx={{ width: "3.5rem", height: "3.5rem" }} />
          <h4>ROBUST API</h4>
        </Box>
      </Box>
    </Box>
  );
}
