import styled from "@emotion/styled";
import React from "react";

const Input = styled.input`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  outline: none;
  text-align: center;
  font-size: 36px;
`;

const Label = styled.label`
  font-size: 16px;
`;

interface IProps extends React.ComponentPropsWithoutRef<"input"> {}

const FibonacciCollatzInput: React.FC<IProps> = (props) => {
  return (
    <>
      <Label>Inter your number</Label>
      <Input {...props} />
    </>
  );
};

export default FibonacciCollatzInput;
