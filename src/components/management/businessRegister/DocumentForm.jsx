import React, { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const DocumentForm = () => {
  const businessRef = useRef();
  const saleRef = useRef();

  const [link, setLink] = useState({
    business: "",
    sale: "",
  });
  const onChangeBusiness = () => {
    const reader = new FileReader();
    const file = businessRef.current.files[0];
    console.log(file.name);
    setLink({ ...link, business: file.name });
  };
  const onChangeSale = () => {
    const reader = new FileReader();
    const file = saleRef.current.files[0];
    setLink({ ...link, sale: file.name });
  };

  const onClickBusinessBtn = (e) => {
    businessRef.current.click();
  };
  const onClickSaleBtn = (e) => {
    saleRef.current.click();
  };

  return (
    <>
      <CommonStyled.TitleDiv>
        <span>서류 첨부</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>사업자등록증</span>
          <input
            type="file"
            className="imgInput"
            id="logoImg"
            accept="image/*"
            name="file"
            ref={businessRef}
            onChange={onChangeBusiness}
            style={{ display: "none" }}
          />
          <Button
            className="Button"
            variant="outlined"
            size="small"
            onClick={() => {
              onClickBusinessBtn();
            }}
          >
            파일 선택
          </Button>

          <input value={link.business} className="TextField" size="small" required variant="filled" />
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>통신판매신고증</span>
          <input
            type="file"
            className="imgInput"
            id="logoImg"
            accept="image/*"
            name="file"
            ref={saleRef}
            onChange={onChangeSale}
            style={{ display: "none" }}
          />
          <Button
            className="Button"
            variant="outlined"
            size="small"
            onClick={() => {
              onClickSaleBtn();
            }}
          >
            파일 선택
          </Button>
          <input value={link.sale} className="TextField" size="small" required variant="filled" />
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default DocumentForm;
