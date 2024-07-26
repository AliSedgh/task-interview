import styled from "@emotion/styled";
import React, { useId } from "react";

interface TSelectProps extends React.ComponentPropsWithoutRef<"select"> {
  label: string;
  isRequired?: boolean;
  options: {
    value: string;
    label: string;
  }[];
}

type Ref = HTMLInputElement;
const Select = styled.select`
  outline: none;
  border: 1px solid var(--border-primary);
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 10px;
  border-radius: 8px;
`;

const CustomSelect = React.forwardRef<Ref, TSelectProps>((props, ref) => {
  const { label, options, ...rest } = props;
  return (
    <Select {...rest}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
});

export default CustomSelect;
