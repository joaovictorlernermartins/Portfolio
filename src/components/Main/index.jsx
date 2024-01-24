import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import styles from "./style.module.css";

export default function Main() {

  const [aboutMeActive, setAboutMeActive] = useState(true)
  const [projectsActive, setProjectsActive] = useState(false)

  const render = (value) => {
    if (value === 'aboutme'){
      setAboutMeActive(true)
      setProjectsActive(false)
    }
    if (value === 'projects'){
      setAboutMeActive(false)
      setProjectsActive(true)
    }
  }

  return (
    <Box className={styles.container}>
      <Box>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button value="aboutme" onClick={e => render(e.target.value)}>About Me</Button>
          <Button value="projects"onClick={e => render(e.target.value)}>Projects</Button>
        </ButtonGroup>
      </Box>
      <AboutMe render={aboutMeActive}></AboutMe>
      <Projects render={projectsActive}></Projects>
    </Box>

  );
}
