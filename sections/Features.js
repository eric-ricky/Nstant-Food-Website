import styled from "styled-components";
import { Container } from "@mui/material";

import BG from "../assets/images/bg_1.jpg";
import Image from "next/image";

const Features = () => {
  return (
    <MainContainer id="explore">
      <Image
        alt="Mountains"
        src={BG}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Inner>
        <h5>You can hear the smell ;)</h5>
      </Inner>
    </MainContainer>
  );
};

export default Features;

const MainContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  min-height: 70vh;
`;

const Inner = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));

  > h5 {
    color: #fff;
    font-size: 38px;
    font-weight: 700;
    text-align: center;
    width: 40%;
    text-shadow: 0px 5px 5px rgb(0 0 0 / 75%);
  }
`;
