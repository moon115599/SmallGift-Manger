import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormControl,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../redux/_action/user_action";
import axios from "axios";
import { axiosEmailCheck, axiosSignUpUser, axiosUsernameCheck } from "../../api/user/signUp";
import {
  validateEmail,
  validateUsername,
  validatePassword,
  validateRePassword,
} from "../../utils/signUpValidationUtil";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 회원가입시 필요한 정보
  const [payload, setPayload] = useState({
    email: "",
    username: "",
    password: "",
    rePassword: "",
    provider: "NORMAL",
    role: "ROLE_MANAGER",
  });

  // 오류체크
  const [validate, setValidate] = useState({
    email: true,
    username: true,
    password: true,
    rePassword: true,
    emailCheck: true,
    usernameCheck: true,
  });

  // 오류 메세지
  const [msg, setMsg] = useState({
    email: "",
    username: "",
    password: "",
    rePassword: "",
    emailCheck: "",
    usernameCheck: "",
  });

  // 변경되는 정보 갱신
  const handleChange = (e) => {
    setPayload({ ...payload, [e.target.id]: e.target.value });
    if (e.target.id === "email") {
      if (validateEmail(e.target.value)) {
        setMsg({ ...msg, email: "" });
        setValidate({ ...validate, email: true });
      } else {
        setMsg({ ...msg, email: "올바른 이메일 형식이 아닙니다.", emailCheck: "" });
        setValidate({ ...validate, email: false });
      }
    } else if (e.target.id === "username") {
      if (validateUsername(e.target.value)) {
        setMsg({ ...msg, username: "" });
        setValidate({ ...validate, username: true });
      } else {
        setMsg({ ...msg, username: "2자리 이상, 10자리 미만으로 입력해주세요.", usernameCheck: "" });
        setValidate({ ...validate, username: false });
      }
    } else if (e.target.id === "password") {
      if (validatePassword(e.target.value)) {
        setMsg({ ...msg, password: "" });
        setValidate({ ...validate, password: true });
      } else {
        setMsg({ ...msg, password: "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요." });
        setValidate({ ...validate, password: false });
      }
    } else if (e.target.id === "rePassword") {
      if (validateRePassword(payload.password, e.target.value)) {
        setMsg({ ...msg, rePassword: "" });
        setValidate({ ...validate, rePassword: true });
      } else {
        setMsg({ ...msg, rePassword: "비밀번호가 일치하지 않습니다." });
        setValidate({ ...validate, rePassword: false });
      }
    }
  };

  // 동의 체크 확인
  const [agree, setAgree] = useState(false);

  // 체크 되어있는지
  const handleAgree = (event) => {
    setAgree(event.target.checked);
  };

  // 제출하는 함수
  const handleSubmit = (event) => {
    event.preventDefault();

    // useDispatch를 이용해서 LoginUser라는 action을 전달함
    dispatch(signUpUser(payload)).then((response) => {
      if (response.payload.success) {
        navigate("/");
        console.log("success");
      } else {
        console.log(response.payload.msg);
      }
    });
  };
  // 중복 확인
  const [check, setCheck] = useState({
    email: "",
    username: "",
  });
  // 이메일 중복 확인
  const checkEmail = (e) => {
    e.preventDefault();
    if (payload.email !== "" && validate.email) {
      if (axiosEmailCheck(payload.email).status === 200) {
        setMsg({ ...msg, email: "사용 가능한 이메일입니다." });
        setValidate({ ...validate, email: true });
      } else if (axiosEmailCheck(payload.email).status === 402) {
        setMsg({ ...msg, email: "이미 존재하는 이메일입니다." });
        setValidate({ ...validate, email: false });
      } else {
        setMsg({ ...msg, email: "중복 확인을 다시 시도해주세요." });
        setValidate({ ...validate, email: false });
      }
    }
  };
  // 아이디 중복 확인
  const checkUsername = (e) => {
    e.preventDefault();
    if (payload.username !== "" && validate.username) {
      if (axiosUsernameCheck(payload.username).status === 200) {
        setMsg({ ...msg, username: "사용 가능한 아이디입니다." });
        setValidate({ ...validate, username: true });
      } else if (axiosUsernameCheck(payload.username).status === 402) {
        setMsg({ ...msg, username: "이미 존재하는 이메일입니다." });
        setValidate({ ...validate, username: false });
      } else {
        setMsg({ ...msg, username: "중복 확인을 다시 시도해주세요." });
        setValidate({ ...validate, username: false });
      }
    }
  };

  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <FormControl component="fieldset" variant="standard">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <TextField
              onChange={handleChange}
              error={!validate.email}
              required
              autoFocus
              fullWidth
              type="email"
              id="email"
              name="email"
              label="이메일 주소"
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={checkEmail}
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ m: 0, height: "56px" }}
              size="large"
            >
              중복 확인
            </Button>
          </Grid>
          {msg.emailCheck ? (
            <Grid item xs={12}>
              <span style={{ color: "red" }}>{msg.emailCheck}</span>
            </Grid>
          ) : null}
          {!validate.email ? (
            <Grid item xs={12}>
              <span style={{ color: "red" }}>{msg.email}</span>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              error={!validate.password}
              required
              fullWidth
              type="password"
              id="password"
              name="password"
              label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
            />
          </Grid>{" "}
          {!validate.password ? (
            <Grid item xs={12}>
              <span style={{ color: "red" }}>{msg.password}</span>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <TextField
              onChange={handleChange}
              error={!validate.rePassword}
              required
              fullWidth
              type="password"
              id="rePassword"
              name="rePassword"
              label="비밀번호 재입력"
            />
          </Grid>
          {!validate.rePassword ? (
            <Grid item xs={12}>
              <span style={{ color: "red" }}>{msg.rePassword}</span>
            </Grid>
          ) : null}
          <Grid item xs={9}>
            <TextField
              onChange={handleChange}
              error={!validate.username}
              required
              fullWidth
              type="text"
              id="username"
              name="username"
              label="아이디 (2자리 이상, 10자리 이하)"
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              onClick={checkUsername}
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ m: 0, height: "56px" }}
              size="large"
            >
              중복 확인
            </Button>
          </Grid>
          {msg.usernameCheck ? (
            <Grid item xs={12}>
              <span style={{ color: "red" }}>{msg.usernameCheck}</span>
            </Grid>
          ) : null}
          {!validate.username ? (
            <Grid item xs={12}>
              <span style={{ color: "red" }}>{msg.username}</span>
            </Grid>
          ) : null}
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox onChange={handleAgree} color="primary" />}
              label="회원가입 약관에 동의합니다."
            />
          </Grid>
        </Grid>
        <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} size="large">
          회원가입
        </Button>
      </FormControl>
    </Box>
  );
};

export default SignUpForm;
