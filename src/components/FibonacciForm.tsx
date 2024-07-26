import styled from "@emotion/styled";
import SubmitContainer from "./SumbitedContainer";
import SubmitButton from "./SubmitButton";
import FibonacciInput from "./FibonacciInput";
import FibonacciResult from "./FibonacciResult";
import { useState } from "react";
import { useFibonacci } from "../zustand/store";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--primary);
  font-weight: 600;
  width: 100%;
  padding-bottom: 25px;
`;

const FibonacciForm = () => {
  const [value, setValue] = useState("");
  const { addFibonacci } = useFibonacci();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (!isNaN(Number(inputValue)) || inputValue === "") {
      setValue(inputValue);
    }
  };
  return (
    <Container>
      <FibonacciInput value={value} onChange={handleChange} />
      <SubmitContainer>
        <SubmitButton disabled={!!!value} onClick={() => addFibonacci(+value)}>
          submit
        </SubmitButton>
      </SubmitContainer>
      <FibonacciResult />
    </Container>
  );
};

export default FibonacciForm;
