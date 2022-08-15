import * as Styled from "./style";
import { Button, Grid } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { BtnContainer } from "./style";

const Navbar = ({ title, discription }) => {
  const dispatch = useDispatch();
  const [cookies, setCookies, removeCookies] = useCookies([]);

  const handleClientClick = async () => {
    console.log("client");
  };

  const handleSignOutClick = async () => {
    await removeCookies("token");
  };

  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <h2>{title}</h2>
        <span>{discription}</span>
      </Styled.TitleContainer>
      <Styled.BtnContainer>
        <button type="button" className="btn-first" onClick={handleClientClick}>
          고객페이지로 이동
        </button>
        <button type="button" className="btn-second" onClick={handleSignOutClick}>
          로그아웃
        </button>
      </Styled.BtnContainer>
    </Styled.Container>
  );
};

export default Navbar;
