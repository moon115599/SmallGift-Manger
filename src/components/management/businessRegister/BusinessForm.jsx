import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import * as Styled from "./style";
import * as CommonStyled from "../../style";
import PopupDom from "./address/PopupDom";
import PopupPostCode from "./address/PopupPostCode";

const BusinessForm = ({ handleChange, setPayload, payload }) => {
  // 사업자 주소 찾기
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const [address, setAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");

  useEffect(() => {
    setPayload({ ...payload, address: zoneCode });
  }, [zoneCode]);

  return (
    <>
      <CommonStyled.TitleDiv>
        <span>사업자 등록</span>
        <hr />
      </CommonStyled.TitleDiv>
      <CommonStyled.InputsDiv>
        <CommonStyled.InputDiv>
          <span>대표자명</span>
          <input onChange={handleChange} id="username" className="TextField" size="small" required />
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>상호명</span>
          <input onChange={handleChange} id="businessName" className="TextField" size="small" required />
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>사업자 주소</span>
          <input style={{ display: "none" }} id="address" className="TextField" required />
          <input value={address} className="TextField" size="small" required />
          <Button className="Button" variant="outlined" size="small" onClick={openPostCode}>
            찾기
          </Button>
          <div id="popupDom">
            {isPopupOpen && (
              <PopupDom>
                <PopupPostCode setAddress={setAddress} setZoneCode={setZoneCode} onClose={closePostCode} />
              </PopupDom>
            )}
          </div>
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>사업자 등록 번호</span>
          <input onChange={handleChange} id="businessTel" className="TextField" size="small" required />
          <hr />
        </CommonStyled.InputDiv>
        <CommonStyled.InputDiv>
          <span>종목/업태</span>
          <input onChange={handleChange} id="businessType" className="TextField" placeholder="" size="small" required />
          {/* <input */}
          {/*   onChange={handleChange} */}
          {/*   id="businessType2" */}
          {/*   className="TextField" */}
          {/*   placeholder="업태" */}
          {/*   size="small" */}
          {/*   required */}
          {/*   variant="filled" */}
          {/* /> */}
        </CommonStyled.InputDiv>
      </CommonStyled.InputsDiv>
    </>
  );
};

export default BusinessForm;
