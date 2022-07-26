import React from "react";
import { Link } from "react-router-dom";

import * as Styled from "./style";
import { Avatar, Badge, Grid } from "@mui/material";
/// 아이콘
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReceiptIcon from "@mui/icons-material/Receipt";

const Sidebar = () => {
  return (
    <Styled.Container>
      <Styled.Top>
        <div>
          <Avatar alt="profile" src="/static/images/avatar/1.jpg" />
        </div>
        <Grid item xs={9}>
          <Grid item xs={12}>
            <span>홍길동</span>
          </Grid>
          <Grid item xs={6}>
            관리자
          </Grid>
          <Grid item xs={6}>
            포비 베이직
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Badge badgeContent={4} color="secondary">
            <NotificationsNoneIcon color="action" />
          </Badge>
        </Grid>
      </Styled.Top>
      <Styled.Hr />
      <Styled.Center>
        <ul>
          <li>
            <Link to="/">
              <HomeIcon className="Icon" />
              <span>홈</span>
            </Link>
          </li>
          <li>
            <Link to="/management/products">
              <MonetizationOnIcon className="Icon" />
              <span>판매 관리</span>
            </Link>
          </li>
          <ul>
            <Link to="/management/register/business">
              <li>
                <span> 사업자 등록</span>
              </li>
            </Link>
            <Link to="/management/register/products">
              <li>
                <span> 상품 등록</span>
              </li>
            </Link>
            <Link to="/management/products">
              <li>
                <span>상품 관리</span>
              </li>
            </Link>
          </ul>
          <li>
            <BarChartIcon className="Icon" />
            <span>판매 현황</span>
          </li>
          <li>
            <ReceiptIcon className="Icon" />
            <span>리뷰 관리</span>
          </li>
        </ul>
      </Styled.Center>
    </Styled.Container>
  );
};

export default Sidebar;
