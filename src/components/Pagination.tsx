import styled from "@emotion/styled";
import { useState } from "react";
import usePaginateUser from "../hooks/usePaginateUser";
import { useSearchParams } from "react-router-dom";
import useUpdateSearchParams from "../hooks/useUpdateSearchParams";

const Container = styled.div`
  dispay: flex;
  justify-content: end;
`;

const PaginationButton = styled.button<{ isDisable?: boolean }>`
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: pointer;
  &:hover {
    background: var(--primary);
    color: white;
  }
  transition: all 0.1s ease-in-out;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 7px;
  margin-top: 20px;
  align-items: center;
`;

const CounterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: var(--primary);
  color: white;
  font-size: 12px;
`;

const Counter = styled.span``;

const Pagination = () => {
  const { totalPages, page } = usePaginateUser();
  const [searchParams] = useSearchParams();
  const value = searchParams.get("page") || "1";

  const [val, setVal] = useState(Number(value));

  useUpdateSearchParams("page", String(val));
  if (totalPages <= 1) return null;
  return (
    <Container>
      <ButtonContainer>
        <PaginationButton
          isDisable={page === 1}
          onClick={() => {
            setVal(val - 1);
          }}
          disabled={page === 1}
        >
          previous
        </PaginationButton>
        <CounterContainer>
          <Counter>{page}</Counter>
        </CounterContainer>
        <Counter>of</Counter>
        <CounterContainer>
          <Counter>{totalPages}</Counter>
        </CounterContainer>

        <PaginationButton
          isDisable={page === totalPages}
          onClick={() => {
            setVal(val + 1);
          }}
          disabled={page === totalPages}
        >
          Next
        </PaginationButton>
      </ButtonContainer>
    </Container>
  );
};

export default Pagination;
