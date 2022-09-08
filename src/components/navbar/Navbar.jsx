import * as Styled from "./style";
import { Button, Grid } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Cookies, useCookies } from "react-cookie";
import { BtnContainer } from "./style";
import { isLogin } from "../../utils/isLogin";

const Navbar = ({ title, discription }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cookies, removeCookies] = useCookies([]);

  const handleClientClick = async () => {
    console.log("client");
  };

  const cookie = new Cookies();

  const handleSignOutClick = (e) => {
    e.preventDefault();
    removeCookies("token");
    window.location.href = "/login";
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
