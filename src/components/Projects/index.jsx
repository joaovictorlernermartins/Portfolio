import { Box, Typography } from "@mui/material";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import { myProjects } from '../../data/data';
import styles from './styles.module.css';



export default function Projects(props) {
  if (props.render === true)
    return (
      <Box className={`${styles.container} fadein`}>
        <Typography variant="h4"><b>My Projects</b></Typography>
        <Box className={styles.content} >

          {myProjects.map(myProject => (

            <Card className={styles.card} >
              <Box>
                <CardMedia
                  className={styles.cardMedia}
                  image={myProject.image}
                  title={myProject.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {myProject.name}
                  </Typography>
                  <Box className={styles.chips}>
                    <Chip className={styles.chip} label={myProject.chip} size="small" variant="outlined" />
                    {myProject.chip2 ? <Chip className={styles.chip} label={myProject.chip2} size="small" variant="outlined" /> : ""}
                    {myProject.chip3 ? <Chip className={styles.chip} label={myProject.chip3} size="small" variant="outlined" /> : ""}
                  </Box>
                  <Typography sx={{ marginTop: "5px" }} variant="body2" color="#8787a3 !important;">
                    {myProject.text.length>150? myProject.text.substring(0,150)+"...":myProject.text}
                  </Typography>
                </CardContent>
              </Box>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button target="_blank" href={myProject.link} size="small">Open GitHub</Button>
                {myProject.linkSite ? <Button target="_blank" href={myProject.linkSite} size="small">Open Site</Button> : ''}
              </CardActions>
            </Card>

          ))}
        </Box>
      </Box>
    );

}


