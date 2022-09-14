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
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { axiosGetHome } from "../../api/home/home";

const Home = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axiosGetHome(setInfo);
  }, []);

  return (
    <Styled.Container>
      <Sidebar />
      <Styled.HomeContainer>
        <Navbar discription="" />

        <Grid className="grid-container" container spacing={2}>
          <Grid item md={3} xs={6}>
            <Sales info={info} />
          </Grid>
          <Grid item md={3} xs={6}>
            <Profits info={info} />
          </Grid>
          <Grid item md={3} xs={6}>
            <Reviews info={info} />
          </Grid>
          <Grid item md={3} xs={6}>
            <Populars info={info} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Weekly info={info} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Monthly info={info} />
          </Grid>
        </Grid>
      </Styled.HomeContainer>
    </Styled.Container>
  );
};

export default Home;
