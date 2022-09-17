import React, { useState, useEffect, useNavigate } from "react";
import { Link } from "react-router-dom";

import * as Styled from "./style";
import { Avatar, Badge, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
/// 아이콘
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeIcon from "@mui/icons-material/Home";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import ReceiptIcon from "@mui/icons-material/Receipt";

const Sidebar = () => {
  const [menu, setMenu] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const [menuManagement, setMenuManagement] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const [path, setPath] = useState("");

  const handleClick = (e) => {
    console.log(e.target.className);
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setMenu({
        first: true,
        second: false,
        third: false,
        fourth: false,
      });
    } else if (window.location.pathname.substring(0, 11) === "/management") {
      setMenu({
        first: false,
        second: true,
        third: false,
        fourth: false,
      });
      if (window.location.pathname === "/management/register/business") {
        setMenuManagement({
          first: true,
          second: false,
          third: false,
        });
      } else if (window.location.pathname === "/management/register/products") {
        setMenuManagement({
          first: false,
          second: true,
          third: false,
        });
      } else {
        setMenuManagement({
          first: false,
          second: false,
          third: true,
        });
      }
    } else if (window.location.pathname === "/status") {
      setMenu({
        first: false,
        second: false,
        third: true,
        fourth: false,
      });
    } else {
      setMenu({
        first: false,
        second: false,
        third: false,
        fourth: true,
      });
    }
  }, []);

  return (
    <Styled.hideController>
      <Styled.hideContainer className={isOpen ? "hide-menu" : "show-menu"}>
        <li style={{ listStyle: "none" }}>
          <MenuIcon onClick={() => toggleMenu()} />
        </li>
      </Styled.hideContainer>
      <Styled.Container className={isOpen ? "show-menu" : "hide-menu"}>
        <li style={{ listStyle: "none" }}>
          <MenuIcon onClick={() => toggleMenu()} />
        </li>
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
            <Link className="link" to="/">
              <li className={menu.first ? "clicked" : ""}>
                <HomeIcon className="Icon" />
                <span>홈</span>
              </li>
            </Link>
            <Link className="link" to="/management/register/business">
              <li className={menu.second ? "clicked" : ""}>
                <MonetizationOnIcon className="Icon" />
                <span>판매 관리</span>
              </li>
            </Link>

            <ul>
              <Link className="link" to="/management/register/business">
                <li className={menuManagement.first ? "clicked-management" : ""}>
                  <span> 사업자 등록</span>
                </li>
              </Link>
              <Link className="link" to="/management/register/products">
                <li className={menuManagement.second ? "clicked-management" : ""}>
                  <span> 상품 등록</span>
                </li>
              </Link>
              <Link className="link" to="/management/products">
                <li className={menuManagement.third ? "clicked-management" : ""}>
                  <span>상품 관리</span>
                </li>
              </Link>
            </ul>
            <Link className="link" to="/status">
              <li className={menu.third ? "clicked" : ""}>
                <BarChartIcon className="Icon" />
                <span>판매 현황</span>
              </li>
            </Link>

            <Link className="link" to="/">
              <li className={menu.fourth ? "clicked" : ""}>
                <ReceiptIcon className="Icon" />
                <span>리뷰 관리</span>
              </li>
            </Link>
          </ul>
        </Styled.Center>
      </Styled.Container>
    </Styled.hideController>
  );
};

export default Sidebar;
