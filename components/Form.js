import { useState, useRef } from "react";
import styled from "styled-components";
import * as EmailValidator from "email-validator";
import emailjs from "@emailjs/browser";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";

const Form = ({ style }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const form = useRef();
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    const email = emailRef.current.value;

    if (!email && !EmailValidator.validate(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    const docRef = await addDoc(collection(db, "contact"), {
      email,
      timestamp: serverTimestamp(),
    });

    emailjs
      .sendForm(
        "service_2cubvtk",
        "template_irr6rtw",
        form.current,
        "user_M1oevbwwWtUWAgveEsw0c"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setLoading(false);
    setError(false);
    setSuccess("Email submited successfully");
    emailRef.current.value = "";

    setTimeout(() => {
      setSuccess(null);
    }, 2500);
  };

  return (
    <>
      <InputContainer style={style} ref={form} onSubmit={handleSubmit}>
        <Input
          type="email"
          required
          placeholder="Enter your email"
          name="email"
          ref={emailRef}
          // onClick={setError(false)}
        />
        <InputBtn type="submit">
          {loading ? "Sending..." : "Notify me"}
        </InputBtn>
      </InputContainer>
      {error && (
        <p style={{ color: "orange", fontSize: "18px", marginTop: "5px" }}>
          {error}
        </p>
      )}
      {success && (
        <p style={{ color: "green", fontSize: "18px", marginTop: "5px" }}>
          {success}
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
`;
