import styled from "styled-components";
import { Link } from "react-scroll";
import { IconButton } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import Logo from "../Logo";
import { menu } from "./Header";

const MobileDrawer = ({ open, setMobileOpen }) => {
  return (
    <Container open={open}>
      <Header>
        <Logo />
        <Close
          onClick={() => {
            setMobileOpen(false);
          }}
        >
          <CloseIcon fontSize="large" style={{ color: "#fff" }} />
        </Close>
      </Header>
      <MenuContainer>
        {menu.map((item, i) => (
          <Link
            key={i}
            to={item.path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass="active"
            onClick={() => {
              setMobileOpen(false);
            }}
          >
            {item.label}
          </Link>
        ))}
      </MenuContainer>
    </Container>
  );
};

export default MobileDrawer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: ${(props) => (!props.open ? "-625%" : "50%")};
  left: 0;
  min-height: 60vh;
  width: 100%;
  background: #ff1100;
  z-index: 500;
  margin: 0rem;
  padding: 2.0125rem 1.0125rem;
  padding-bottom: 1rem;
  transition: all 0.4s ease-out;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 18px;
  border-bottom: 1px solid #aaa;
`;

const Close = styled(IconButton)`
  font-size: 48px;
  color: #fff;
`;

const MenuContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > a {
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    display: grid;
    place-items: center;
    height: 55px;
    margin-bottom: 0.625rem;

    :hover {
      color: #ccc;
    }
  }
`;
