import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import Divider from "@mui/material/Divider";
import styles from "./style.module.css";
import { myProfile } from "../../data/data";

export default function Profile() {
  return (
    <Box className={styles.card}>
      <Box className={styles.avatar}>
        <Avatar
          alt={"Foto de Perfil de" + myProfile.firstName}
          src={myProfile.perfilPic}
          className={styles.imgProfile}
        />
        <Typography className={styles.name} variant="h6">
          {myProfile.firstName + " " + myProfile.lastName}
        </Typography>
        <Typography className={styles.grey} variant="subtitle1">
          Web Developer
        </Typography>
      </Box>

      <Box className={styles.contentHolder} >
        <Divider className={styles.hr} />
        <Box className={styles.itemProfile}>
          <EmailIcon className={styles.icon}></EmailIcon>
          <Box className={styles.colunm}>
            <Typography className={styles.grey} variant="body2">
              Email
            </Typography>
            <Link href={"mailto:" + myProfile.email}>
              {myProfile.email}
            </Link>
          </Box>
        </Box>

        <Box className={styles.itemProfile}>
          <GitHubIcon className={styles.icon}></GitHubIcon>
          <Box className={styles.colunm}>
            <Typography className={styles.grey} variant="body2">
              Github
            </Typography>
            <Link href={myProfile.github}>
              {myProfile.githubName}
            </Link>
          </Box>
        </Box>

        <Box className={styles.itemProfile}>
          <LinkedInIcon className={styles.icon}></LinkedInIcon>
          <Box className={styles.colunm}>
            <Typography className={styles.grey} variant="body2">
              LinkedIn
            </Typography>
            <Link href={myProfile.linkedIn}>
              {myProfile.firstName + " " + myProfile.lastName}
            </Link>
          </Box>
        </Box>

        <Box className={styles.itemProfile}>
          <WhatsAppIcon className={styles.icon}></WhatsAppIcon>
          <Box className={styles.colunm}>
            <Typography className={styles.grey} variant="body2">
              WhatsApp
            </Typography>
            <Link href={"tel:" + myProfile.phone}>{myProfile.phone}</Link>
          </Box>
        </Box>

        <Box className={styles.itemProfile}>
          <PlaceIcon className={styles.icon}></PlaceIcon>
          <Box className={styles.colunm}>
            <Typography className={styles.grey} variant="body2">
              Location
            </Typography>
            <Link href={myProfile.locationLink}>
              {myProfile.locationName}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
