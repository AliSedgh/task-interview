import React from "react";
import TitlePage from "../components/TitlePage";
import { Container, FormContainer } from "../components/FormContainer";
import CollatzForm from "../components/CollatzForm";

const Collatz = () => {
  return (
    <div>
      <TitlePage boldText="Collatz Conjecture" />
      <FormContainer>
        <Container>
          <CollatzForm />
        </Container>
      </FormContainer>
    </div>
  );
};

export default Collatz;
