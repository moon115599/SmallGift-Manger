import React from "react";
import { TextField, Button } from "@mui/material";
import * as Styled from "./style";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const SalesInfo = () => {
  return (
    <>
      <Styled.TitleDiv>
        <span>상품 상세 정보</span>
        <hr />
      </Styled.TitleDiv>
      <Styled.InputsDiv>
        <Styled.InputDiv>
          <span>상품 대표 이미지 등록</span>
        </Styled.InputDiv>
        <Styled.InputDiv>
          <Styled.RowFlex>
            <Styled.ImgDiv />
            <Styled.RuleDiv>
              <p>이미지 등록시 유의사항</p>
              <div>
                <p>상품을 대표할 수 있는 상품 이미지를 등록합니다.</p>
                <p>break 대표 이미지 등록 시, 상품 상세 페이지 외 자동 리사이징됩니다. </p>
                <p>권장 이미지 규격: 1000px * 1000px / 10M 이하 / png, jpg</p>
              </div>
              <Button className="Button" variant="outlined" size="small">
                첨부하기
              </Button>
            </Styled.RuleDiv>
          </Styled.RowFlex>
          <hr />
        </Styled.InputDiv>
        <Styled.InputDiv>
          <span>상세 설명</span>
          <br />
          <CKEditor
            style={{ minWidth: "10px" }}
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
          <TextField className="TextField" size="small" required variant="outlined" />
        </Styled.InputDiv>
      </Styled.InputsDiv>
    </>
  );
};

export default SalesInfo;
