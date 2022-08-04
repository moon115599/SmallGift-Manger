import * as Styled from "./style";
import { Button, Grid } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

const Navbar = ({ discription }) => {
  const dispatch = useDispatch();
  const [cookies, setCookies, removeCookies] = useCookies([]);

  const handleOnClick = async () => {
    await removeCookies("token");
  };

  return (
    <Styled.Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <span>{discription}</span>
        </Grid>
        <Grid item xs={2}>
          <Link to="/test">
            <Button variant="contained" color="primary">
              test페이지로 이동
            </Button>
          </Link>
          <Button variant="contained" color="primary">
            고객페이지로 이동
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary" onClick={handleOnClick}>
            로그아웃
          </Button>
        </Grid>
      </Grid>
    </Styled.Container>
  );
};

export default Navbar;
