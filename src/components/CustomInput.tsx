import styled from "@emotion/styled";
import React, { useId } from "react";

interface IInputProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  isRequired?: boolean;
}

export type Ref = HTMLInputElement;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid var(--border-primary);
  padding-top: 10px;
  padding-bottom: 9px;
  padding-left: 9px;
  border-radius: 8px;
`;

const Required = styled.span<{ isRequired: boolean | undefined }>`
  color: red;
  font-size: 12px;
  margin-left: 5px;
  display: ${({ isRequired }) => (isRequired ? "inline-block" : "none")};
`;

const CustomInput: React.FC<IInputProps> = React.forwardRef<Ref, IInputProps>(
  (props, ref) => {
    const { label, isRequired, ...rest } = props;
    const id = useId();
    return (
      <Container>
        <Label htmlFor={id}>
          {label}
          <Required isRequired={isRequired}>*</Required>
        </Label>
        <Input id={id} ref={ref} {...rest} />
      </Container>
    );
  }
);

export default CustomInput;
