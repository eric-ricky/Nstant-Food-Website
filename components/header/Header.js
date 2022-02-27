import { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../Logo";
import MobileDrawer from "./MobileDrawer";

export const menu = [
  {
    path: "home",
    label: "Home",
  },
  {
    path: "explore",
    label: "Explore",
  },
  {
    path: "cta",
    label: "Get started",
  },
  {
    path: "contact",
    label: "Contact",
  },
];

const Header = ({ isSticky }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const clickHandler = () => {
    setMobileOpen(true);
  };

  return (
    <MainContainer style={{ position: `${isSticky ? "fixed" : "absolute"}` }}>
      <Inner>
        <Logo />
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
            >
              {item.label}
            </Link>
          ))}
        </MenuContainer>

        <ButtonContainer>
          <Button>
            <Link to="cta" spy={true} smooth={true} offset={-70} duration={500}>
              Get notified
            </Link>
          </Button>
          <MobileButton onClick={clickHandler}>
            <MenuIcon
              style={{ fontSize: "38", fontWeight: 700, color: "#fff" }}
            />
          </MobileButton>
        </ButtonContainer>

        <MobileDrawer open={mobileOpen} setMobileOpen={setMobileOpen} />
      </Inner>
    </MainContainer>
  );
};
export default Header;

const MainContainer = styled(Container)`
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0rem 0.125rem;
  background: #ff1100;
  margin-top: 5.8675rem;
  border-radius: 45px;
  padding: 1.265rem 2rem;
  box-shadow: 0px 5px 5px rgb(0 0 0 / 20%);
  @media (max-width: 768px) {
    padding: 0.125rem 2rem;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  @media (max-width: 768px) {
    display: none;
  }
  > a {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 12px 20px;
  border: none;
  outline: none;
  border-radius: 45px;
  cursor: pointer;
  lineheight: 1.2;
  transition: all 0.25s;
  fontweight: 500;
  font-size: 14px;
  background: #fff;
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileButton = styled(IconButton)`
  display: none !important;
  margin-left: 0.125rem;
  @media (max-width: 768px) {
    display: block !important;
  }
`;
