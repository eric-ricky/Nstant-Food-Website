import { Container } from "@mui/material";

import styled from "styled-components";

const Footer = () => {
  return (
    <MainContainer id="contact">
      <Inner>
        <p>Copyright &copy;2022 Nstant Food.</p>
      </Inner>
    </MainContainer>
  );
};

export default Footer;

const MainContainer = styled.footer`
  min-height: 25vh;
  background: #ff1100;
  padding-top: 5rem;
  padding-bottom:5rem
  display: grid;
  place-items: center;
`;

const Inner = styled(Container)`
  color: #fff;
  font-size: 24px;
  text-align: center;
`;
