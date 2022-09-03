import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FindIDForm = () => {
  // 이메일, 비밀번호 제출
  const navigate = useNavigate();

  // 사용자한테 아이디/비밀번호를 입력 받고
  // 백에 보내줄 payload
  const [payload, setPayload] = useState({
    email: "",
  });

  const [isError, setIsError] = useState({
    email: false,
  });

  // 입력폼에서 데이터가 바뀔때마다 payload의 데이터 최신화
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.ids]: e.target.value });
    console.log(payload);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (payload.email === "") {
      setIsError({ ...isError, email: true });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate size="sm" sx={{ mt: 3, width: 600 }}>
      <TextField
        error={isError.email ? true : undefined}
        margin="normal"
        required
        fullWidth
        id="email"
        label="이메일 주소"
        name="email"
        autoComplete="on"
        autoFocus
        onChange={handleChange}
      />

      <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        아이디 찾기
      </Button>
    </Box>
  );
};

export default FindIDForm;
