import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Monthly from "../../components/home/Monthly";
import Weekly from "../../components/home/Weekly";
import Sales from "../../components/home/Sales";
import Profits from "../../components/home/Profits";
import Reviews from "../../components/home/Reviews";
import Populars from "../../components/home/Populars";

import * as Styled from "./style";
import * as CommonStyled from "../style";
import React from "react";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <Styled.Container>
      <Sidebar />
      <Styled.HomeContainer>
        <Navbar discription="" />

        <Grid className="grid-container" container spacing={2}>
          <Grid item md={3} xs={6}>
            <Sales />
          </Grid>
          <Grid item md={3} xs={6}>
            <Profits />
          </Grid>
          <Grid item md={3} xs={6}>
            <Reviews />
          </Grid>
          <Grid item md={3} xs={6}>
            <Populars />
          </Grid>
          <Grid item md={6} xs={12}>
            <Weekly />
          </Grid>
          <Grid item md={6} xs={12}>
            <Monthly />
          </Grid>
        </Grid>
      </Styled.HomeContainer>
    </Styled.Container>
  );
};

export default Home;
