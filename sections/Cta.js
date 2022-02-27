import { Container } from "@mui/material";
import styled from "styled-components";
import Form from "../components/Form";

const Cta = () => {
  return (
    <MainContainer style={{ display: "flex" }} id="cta">
      <Inner>
        <h5>Get Notified</h5>
        <Form
          style={{
            // width: "400px",
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Inner>
    </MainContainer>
  );
};

export default Cta;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 4rem;
  min-height: 45vh;
`;

const Inner = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h5 {
    margin-bottom: 2rem;
    font-size: 38px;
    font-weight: 700;
    text-align: center;
  }
`;
