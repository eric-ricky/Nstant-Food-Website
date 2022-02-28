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
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%252B254710752939%26fbclid%3DIwAR1td8s_IJs3xC4SqgYY6_1QVj9pez41VWzwc4FuesThwpjbD66Er78cEBI&h=AT19_zhmBOt_AKrtWtbDm3UFfy8tP3mAqzk5x2c3nKPE_pMy56-UBYOyLiwH25mZXa0XaTpGNghAX4-FvGXRjv3xU_f1bQnzaa6K0nblvpG_GPeRhHnV5AuFPGY_QSKxtXm-vw"
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
