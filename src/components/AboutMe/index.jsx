import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "./style.module.css";

export default function AboutMe(props) {
  if (props.render === true)
  return (
    <Box className={`${styles.container} fadein`}>
      <Box className={styles.content}>
        <Typography variant="h4"><b>About Me</b></Typography>
        <Typography className={styles.marginTop8} variant="h6">
          Hello!
        </Typography>
        <Typography className={styles.marginTop8} variant="body1">
          My name is João Victor Lerner Martins, and I'm a 20-year-old web
          developer based in Palhoça, Santa Catarina, Brazil. I've been immersed
          in the world of programming for the past year, passionate about
          creating innovative and efficient web solutions.
        </Typography>
        <Typography className={styles.marginTop8} variant="body1">
          Currently, I am enrolled in the Systems of Information program at
          Unisul, embarking on my first semester of studies. This academic
          journey complements my hands-on experience, allowing me to blend
          theoretical knowledge with practical skills in the dynamic field of
          web development. I am enthusiastic about learning and contributing to
          the ever-evolving landscape of technology.
        </Typography>
      </Box>
      <Box className={styles.imgContainer}>
        <img
          className={styles.img}
          alt="W"
          src={"https://i.imgur.com/LoGVMnq.png"}
        ></img>
        <Box className={styles.imgBox}>
          <img
            className={styles.img}
            alt="A"
            src={"https://i.imgur.com/rfLIbhx.png"}
          ></img>
          <img
            className={styles.img}
            alt="S"
            src={"https://i.imgur.com/S7A5cHW.png"}
          ></img>
          <img
            className={styles.img}
            alt="D"
            src={"https://i.imgur.com/iaK0pfi.png"}
          ></img>{" "}
        </Box>
      </Box>
    </Box>
  );
}
