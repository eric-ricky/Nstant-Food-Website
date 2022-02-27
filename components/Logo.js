import styled from "styled-components";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <Container>
      <Link to={"/home"} spy={true} smooth={true} offset={-70} duration={500}>
        <span>N</span>stant
      </Link>
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  > a {
    cursor: pointer;
    color: #fff;
    font-size: 32px;
    font-weight: 400;
    letter-spacing: 2px;
    font-family: "Lobster", cursive;

    > span {
      color: #000;
      text-decoration: underline;
    }
  }
`;
