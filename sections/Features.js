import styled from "styled-components";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

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
        priority
      />
      <Inner>
        <FormatQuoteIcon
          style={{ color: "#fff", fontSize: "4.5rem" }}
          fontSize="large"
        />
        <p>Delicious food is the foundation of real hapiness.</p>
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
  background: rgba(0, 0, 0, 0.9);
`;

const Inner = styled.div`
  min-height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 500;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));

  > p {
    color: #fff;
    font-size: 38px;
    font-weight: 700;
    text-align: center;
    width: 40%;
    text-shadow: 0px 5px 5px rgb(0 0 0 / 75%);
    @media (max-width: 768px) {
      font-size: 32px;
      width: 100%;
    }
  }
`;
