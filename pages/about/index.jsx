import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";
import Logo from "../../src/components/logo/Logo";
import Header from "../header/Header";

export default function About() {
  return (
    <Container maxWidth="sm">
      {/*<Grid container justifyContent="center">*/}
      {/*  <Grid item>*/}
      {/*    <Button variant="contained" component={Link} noLinkStyle href="/">*/}
      {/*      🏠 Home*/}
      {/*    </Button>*/}
      {/*      /!*<Logo/>*!/*/}
          <Header />
        {/*</Grid>*/}
      {/*</Grid>*/}
    </Container>
  );
}
