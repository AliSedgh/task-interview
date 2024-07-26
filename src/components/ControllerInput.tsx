import { Control, FieldValues, Path, useController } from "react-hook-form";
import styled from "@emotion/styled";
import CustomInput from "./CustomInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

type TControllerProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  control: Control<T, any>;
  isRequired?: boolean;
};

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-left: 5px;
`;

function ControllerInput<T extends FieldValues>({
  label,
  isRequired,
  name,
  control,
}: TControllerProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <Container>
      <CustomInput isRequired={isRequired} label={label} {...field} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </Container>
  );
}

export default ControllerInput;
