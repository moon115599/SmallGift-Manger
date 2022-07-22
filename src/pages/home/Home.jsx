import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Monthly from "../../components/home/Monthly";
import Weekly from "../../components/home/Weekly";
import Sales from "../../components/home/Sales";
import Profits from "../../components/home/Profits";
import Reviews from "../../components/home/Reviews";
import Populars from "../../components/home/Populars";

import * as Styled from "./style";
import React from "react";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Styled.Container>
      <Sidebar />
      <Styled.HomeContainer>
        <Navbar discription="" />
        <Styled.GridContainer>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Sales />
            </Grid>
            <Grid item xs={3}>
              <Profits />
            </Grid>
            <Grid item xs={3}>
              <Reviews />
            </Grid>
            <Grid item xs={3}>
              <Populars />
            </Grid>
            <Grid item xs={6}>
              <Weekly />
            </Grid>
            <Grid item xs={6}>
              <Monthly />
            </Grid>
          </Grid>
        </Styled.GridContainer>
      </Styled.HomeContainer>
    </Styled.Container>
  );
};

export default Home;
