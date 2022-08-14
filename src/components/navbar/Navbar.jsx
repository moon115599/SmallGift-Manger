import * as Styled from "./style";
import { Button, Grid } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

const Navbar = ({ title, discription }) => {
  const dispatch = useDispatch();
  const [cookies, setCookies, removeCookies] = useCookies([]);

  const handleOnClick = async () => {
    await removeCookies("token");
  };

  return (
    <Styled.Container>
      <Grid container spacing={2}>
        <Grid item md={8} xs={6}>
          <h2>{title}</h2>
          <span>{discription}</span>
        </Grid>
        <Grid item md={4} xs={6}>
          <Button variant="contained" color="primary">
            고객페이지로 이동
          </Button>
          <Button variant="contained" color="secondary" onClick={handleOnClick}>
            로그아웃
          </Button>
        </Grid>
      </Grid>
    </Styled.Container>
  );
};

export default Navbar;
