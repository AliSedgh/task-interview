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
  gap: 10px;
  margin-top: 20px;
`;
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
