import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { userSchema } from "../validator";
import { InferType } from "yup";
import ControllerInput from "./ControllerInput";
import styled from "@emotion/styled";
import Select from "./CustomSelect";
import { useStore } from "../zustand/store";
import { useNavigate } from "react-router-dom";
import PrimaryContainer from "./PrimaryContainer";
import SubmitContainer from "./SumbitedContainer";
import SubmitButton from "./SubmitButton";

interface IProps {
  type: "create" | "update";
  userId?: number;
}

const UserForm: React.FC<IProps> = ({ type, userId }) => {
  const { addUser, users, updateUser } = useStore();
  const selectedUser = users.find((user) => user.id === userId);

  const InitialValue =
    type === "create"
      ? { name: "", userName: "", email: "", phone: "", status: null }
      : selectedUser;

  type TUserSchema = InferType<typeof userSchema>;
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitted },
  } = useForm<TUserSchema>({
    defaultValues: InitialValue,
    resolver: yupResolver(userSchema),
  });

  const isFieldRequired = (schema: any, fieldName: keyof TUserSchema) => {
    const field = schema.fields[fieldName];
    return (
      field &&
      field.tests &&
      field.tests.some(
        (test: any) => test.OPTIONS && test.OPTIONS.name === "required"
      )
    );
  };

  const RequiredFieldsContainer = styled.div`
    padding: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    border-bottom: 1px solid var(--border-tertiary);
  `;

  const SelectContainer = styled.div`
    padding: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  `;

  const onSubmit = (data: TUserSchema) => {
    if (type === "create") {
      const newUser = { id: users.length + 1, ...data };
      addUser(newUser);
      navigate("/list");
    }
    if (type === "update" && selectedUser) {
      const newUser = { id: selectedUser.id, ...data };
      updateUser(newUser);
      navigate("/list");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PrimaryContainer>
          <RequiredFieldsContainer>
            <ControllerInput<TUserSchema>
              name="name"
              label="Name"
              control={control}
              isRequired={isFieldRequired(userSchema, "name")}
            />
            <ControllerInput<TUserSchema>
              name="userName"
              label="Username"
              control={control}
              isRequired={isFieldRequired(userSchema, "userName")}
            />
            <ControllerInput<TUserSchema>
              name="email"
              label="Email"
              control={control}
              isRequired={isFieldRequired(userSchema, "email")}
            />
            <ControllerInput<TUserSchema>
              name="phone"
              label="Phone"
              control={control}
              isRequired={isFieldRequired(userSchema, "phone")}
            />
          </RequiredFieldsContainer>
          <SelectContainer>
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <Select
                  label="Status"
                  options={[
                    { label: "select Status", value: null },
                    { label: "Active", value: "active" },
                    { label: "not-active", value: "not_active" },
                  ]}
                  name={field.name}
                  value={field.value || undefined}
                  onChange={field.onChange}
                />
              )}
            />
          </SelectContainer>
        </PrimaryContainer>
        <SubmitContainer>
          <SubmitButton disabled={isSubmitted && !isValid} type="submit">
            submit
          </SubmitButton>
        </SubmitContainer>
      </form>
    </div>
  );
};

export default UserForm;
