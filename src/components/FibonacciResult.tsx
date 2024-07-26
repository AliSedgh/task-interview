import styled from "@emotion/styled";
import { useFibonacci } from "../zustand/store";

const Container = styled.div`
  border: 1px solid #cccccc;
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  height: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const FibonacciResultItem = styled.div`
  background-color: var(--bg-surface);
  height: 100%;
  border: 1px solid var(--border-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

const Span = styled.span`
  font-size: 48px;
  font-weight: 600;
  color: var(--primary);
`;

const ResultText = styled.p`
  margin-top: 35px;
  font-size: 16px;
  color: var(--primary);
  font-weight: 600;
`;

const FibonacciResult = () => {
  const { fibonacci } = useFibonacci();
  return (
    <>
      <ResultText>result</ResultText>
      <Container>
        {fibonacci.map((item, index) => (
          <FibonacciResultItem key={index}>
            <Span>{item}</Span>
          </FibonacciResultItem>
        ))}
      </Container>
    </>
  );
};

export default FibonacciResult;
