import styled from "styled-components";
import { Container } from "@mui/material";

import BannerImg from "../assets/images/banner_1.png";
import Image from "next/image";
import Form from "../components/Form";

const Banner = () => {
  return (
    <MainContainer id="home">
      <Inner>
        <Content>
          <h2 className={"title"}>Don't miss out!!</h2>
          <p>
            Be the 1st to know when we launch so you can enjoy free delivery and
            crazy deals exclusive for the first 100 users!!
          </p>
          <Form />
        </Content>

        <ImageContainer>
          <Image src={BannerImg} alt="humb" />
        </ImageContainer>
      </Inner>
    </MainContainer>
  );
};

export default Banner;

const MainContainer = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f6f8fb;
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding-top: 8rem;
    padding-bottom: 2.625rem;
    flex-direction: column;
  }
`;

const Content = styled.div`
  padding-left: 1.75rem;
  @media (max-width: 768px) {
    padding-left: 0rem;
    width: 100%;
  }
  > h2 {
    font-size: 48px;
    @media (max-width: 768px) {
      font-size: 42px;
      margin-top: 1.625rem;
    }
  }

  > p {
    font-size: 24px;
    font-weight: 400;
    width: 80%;
    margin-top: 1.125rem;
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;
