import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Profile from './components/Profile/index';
import Copyright from './components/Copyright';
import Main from './components/Main';


export default function App() {
  return (
    <Container component="main">
      <CssBaseline />
      <Grid container sx={{display:"flex", flexWrap:"wrap", justifyContent: "center", marginTop: 12 }} spacing={2} columns={16}>
        <Grid sx={{minWidth:"min-content"}} xs={4}>
          <Profile></Profile>
        </Grid>
        <Grid xs={12}>
          <Main></Main>
        </Grid>
      </Grid>
      <Copyright sx={{justifyContent: "center", mt: 8, mb: 4 }} />
    </Container>
  );
}

