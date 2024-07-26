import styled from "@emotion/styled";
import React, { useState } from "react";
import CollatzInput from "./FibonacciInput";
import SubmitContainer from "./SumbitedContainer";
import SubmitButton from "./SubmitButton";
import CollatzResult from "./CollatzResult";
import { useCollatz } from "../zustand/store";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--primary);
  font-weight: 600;
  width: 100%;
  padding-bottom: 25px;
`;

const CollatzForm = () => {
  const [value, setValue] = useState("");
  const { calculateCollatz } = useCollatz();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!isNaN(Number(inputValue)) || inputValue === "") {
      setValue(inputValue);
    }
  };
  return (
    <Container>
      <CollatzInput value={value} onChange={handleChange} />
      <SubmitContainer>
        <SubmitButton
          onClick={() => calculateCollatz(+value)}
          disabled={!!!value}
        >
          Calculate Cycles
        </SubmitButton>
      </SubmitContainer>
      <CollatzResult />
    </Container>
  );
};

export default CollatzForm;
