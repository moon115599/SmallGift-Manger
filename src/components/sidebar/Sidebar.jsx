import React, { useState, useEffect } from "react";
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
  const [page, setPage] = useState("");
  useEffect(() => {
    let path = window.location.pathname;
    //    document.querySelector(`.${path}`).className += "clicked";
  }, []);

  return (
    <Styled.Container>
      <Styled.Top>
        <div className="avatar">
          <Avatar alt="profile" src="/static/images/avatar/1.jpg" />
        </div>
        <div className="i">
          <div className="info">
            <p className="info-name">홍길동</p>
            <br />
            <p>관리자 | 포비 베이직</p>
          </div>
          <Badge className="info-badge" badgeContent={4} color="secondary">
            <NotificationsNoneIcon color="action" />
          </Badge>
        </div>
      </Styled.Top>
      <Styled.Center>
        <ul>
          <Link style={{ textDecoration: "none" }} to="/">
            <li className="/">
              <HomeIcon className="Icon" />
              <span>홈</span>
            </li>
          </Link>
          <Link to="/management/products">
            <li className="/management/products">
              <MonetizationOnIcon className="Icon" />
              <span>판매 관리</span>
            </li>
          </Link>

          <ul>
            <Link to="/management/register/business">
              <li className="/management/register/business">
                <span> 사업자 등록</span>
              </li>
            </Link>
            <Link to="/management/register/products">
              <li className="/management/register/products">
                <span> 상품 등록</span>
              </li>
            </Link>
            <Link to="/management/products">
              <li className="/management/products">
                <span>상품 관리</span>
              </li>
            </Link>
          </ul>
          <Link to="/status">
            <li className="판매현황">
              <BarChartIcon className="Icon" />
              <span>판매 현황</span>
            </li>
          </Link>

          <li className="리뷰관리">
            <ReceiptIcon className="Icon" />
            <span>리뷰 관리</span>
          </li>
        </ul>
      </Styled.Center>
    </Styled.Container>
  );
};

export default Sidebar;
