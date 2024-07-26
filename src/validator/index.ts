import * as yup from "yup";

const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  userName: yup
    .string()
    .required("Username is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
      "Username must be at least 6 characters long and contain a mix of letters and numbers"
    ),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(
      /^\d{10,}$/,
      "Phone number must be at least 10 digits and contain only numbers"
    )
    .required("Phone is required"),
  status: yup
    .string()
    .oneOf(["active", "not_active", "unknown"], "Invalid status value"),
});

export { userSchema };
