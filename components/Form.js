import { useState } from "react";
import styled from "styled-components";
import * as EmailValidator from "email-validator";

import axios from "axios";

const Form = ({ style }) => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(EmailValidator.validate(email));

    if (!email || !EmailValidator.validate(email)) {
      setState("ERROR");
      setErrorMessage(
        "Please enter a valid email address. Contact +254 710752939"
      );
      return;
    }

    setState("LOADING");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/subscribe", { email });
      setState("SUCCESS");
      setEmail("");
    } catch (error) {
      setErrorMessage(error.response.data.error);
      setState("ERROR");
      console.dir(error);
      console.log(error.response);
    }
  };

  if (state === "SUCCESS")
    return (
      <p style={{ color: "green", fontSize: "18px" }}>
        CONGRATULATIONS!! A notification will be sent straight into your inbox
      </p>
    );

  return (
    <>
      <InputContainer style={style} onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputBtn type="submit">
          {state === "LOADING" ? "Sending..." : "Notify me"}
        </InputBtn>
      </InputContainer>
      {state === "ERROR" && (
        <p style={{ color: "orange", fontSize: "18px", marginTop: "2px" }}>
          {errorMessage}
        </p>
      )}
    </>
  );
};

export default Form;

const InputContainer = styled.form`
  display: flex;
  align-items: center;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  outline: none;
  border: none;
  width: 70%;
  height: 45px;
  font-size: 15px;
  padding: 0 15px;
  border-radius: 4px;
  box-shadow: 0px 10px 50px rgb(48 98 145 / 25%);
  background: #fff;
`;

const InputBtn = styled.button`
  display: inline-block;
  text-align: center;
  background: #ff1100;
  color: #fff;
  fonst-size: 18px;
  font-weight: 700;
  padding: 8px 16px;
  margin-left: 10px;
  border-radius: 4px;
  height: 45px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 30%;
  transition: all 0.4s ease;
  :hover {
    opacity: 0.7;
  }
`;
