import React, { useRef, useState } from "react";
import { Button, TextField } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

const DocumentForm = ({ formDataObj, setFormDataObj }) => {
  const businessRef = useRef();
  const saleRef = useRef();

  const [link, setLink] = useState({
    business: "",
    sale: "",
  });

  const handleBusinessChange = (e) => {
    const reader = new FileReader();
    const file = businessRef.current.files[0];
    // const formData = new FormData();
    // formData.append("business", file);
    setFormDataObj({ ...formDataObj, business: file });
    setLink({ ...link, business: file.name });
  };
  const handleSaleChange = (e) => {
    const reader = new FileReader();
    const file = saleRef.current.files[0];
    // const formData = new FormData();
    // formData.append("sale", file);
    setFormDataObj({ ...formDataObj, sale: file });
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
            id="businessDocument"
            accept="image/*"
            name="file"
            ref={businessRef}
            onChange={handleBusinessChange}
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
            id="saleDocument"
            accept="image/*"
            name="file"
            ref={saleRef}
            onChange={handleSaleChange}
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
