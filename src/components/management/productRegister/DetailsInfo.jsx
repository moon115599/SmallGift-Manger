import React, { useRef, useState } from "react";
import { TextField, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";

import tempImg from "../../../assets/tempImg.png";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const DetailsInfo = ({ data, onChange, formDataObj, setFormDataObj }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef();

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    const formData = new FormData();
    formData.append("representative", file);
    setFormDataObj(formData);

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
      console.log("이미지주소", reader.result);
    };
  };
  const onClickFileBtn = (e) => {
    imgRef.current.click();
  };
  return (
    <>
      <CommonStyled.TitleDiv>
        <span>상품 상세 정보</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>상품 대표 이미지 등록</span>
          <Styled.RowFlex>
            <img src={imageUrl || tempImg} />
            <Styled.RuleDiv>
              <span>이미지 등록시 유의사항</span>
              <div>
                <p>상품을 대표할 수 있는 상품 이미지를 등록합니다.</p>
                <p>break 대표 이미지 등록 시, 상품 상세 페이지 외 자동 리사이징됩니다. </p>
                <p>권장 이미지 규격: 1000px * 1000px / 10M 이하 / png, jpg</p>
              </div>
              <input
                type="file"
                className="imgInput"
                id="logoImg"
                accept="image/*"
                name="file"
                ref={imgRef}
                onChange={onChangeImage}
                style={{ display: "none" }}
              />
              <Button
                className="Button"
                variant="outlined"
                size="small"
                onClick={() => {
                  onClickFileBtn();
                }}
              >
                첨부하기
              </Button>
            </Styled.RuleDiv>
          </Styled.RowFlex>
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>상세 설명</span>
          <br />
          <textarea
            style={{ width: "100%", height: "100px" }}
            id="description"
            value={data.description}
            onChange={onChange}
          />
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default DetailsInfo;
