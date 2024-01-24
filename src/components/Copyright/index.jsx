import * as React from "react";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { myProfile } from "../../data/data";

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {"Copyright © "}
      <Link
        color="inherit"
        target="_blank"
        href={myProfile.github}
      >
        {myProfile.firstName + " " + myProfile.lastName}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
