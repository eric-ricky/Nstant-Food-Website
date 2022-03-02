import { Container } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import styled from "styled-components";

const Footer = () => {
  return (
    <MainContainer id="contact">
      <Inner>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://api.WhatsApp.com/send?phone=0710752939"
        >
          <WhatsAppIcon style={{ fontSize: "48px" }} />
        </a>
        <p>Copyright &copy;2022 Nstant Food.</p>
      </Inner>
    </MainContainer>
  );
};

export default Footer;

const MainContainer = styled.footer`
  min-height: 20vh;
  background: #ff1100;
  padding-top: 4rem;
  padding-bottom:2rem
  display: grid;
  place-items: center;
`;

const Inner = styled(Container)`
  color: #fff;
  text-align: center;

  > a {
    font-size: 24px;
    transition: all 0.4s ease;
    :hover {
      color: #25d366;
    }
  }

  > p {
    font-size: 18px;
    margin-top: 1.625rem;
    padding-bottom: 2rem;
  }
`;
