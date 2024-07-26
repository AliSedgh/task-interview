import styled from "@emotion/styled";

const Container = styled.div`
  border: 1px solid #cccccc;
  border-radius: 12px;
  padding: 16px;
  width: 100%;
  height: 150px;
  gap: 16px;
`;

const CollatzResultItem = styled.div`
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

import { useCollatz } from "../zustand/store";

const CollatzResult = () => {
  const { collatz } = useCollatz();
  return (
    <>
      <ResultText>result</ResultText>
      <Container>
        <CollatzResultItem>
          <Span>{collatz}</Span>
        </CollatzResultItem>
      </Container>
    </>
  );
};

export default CollatzResult;
