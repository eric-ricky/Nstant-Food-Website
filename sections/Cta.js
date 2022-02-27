import { Container } from "@mui/material";
import styled from "styled-components";
import Form from "../components/Form";

const Cta = () => {
  return (
    <MainContainer id="cta">
      <Inner style={{ display: "flex" }}>
        <h5>Get Notified</h5>
        <Form
          style={{
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
  min-height: 45vh;
  display: grid;
  place-items: center;
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
