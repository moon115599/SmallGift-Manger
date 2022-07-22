import * as Styled from "./style";
import { Button, Grid } from "@mui/material";

import { useContext } from "react";

const Navbar = ({ discription }) => {
  return (
    <Styled.Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <span>{discription}</span>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="primary">
            고객페이지로 이동
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary">
            로그아웃
          </Button>
        </Grid>
      </Grid>
    </Styled.Container>
  );
};

export default Navbar;
