import styled from "@emotion/styled";

const SubmitButton = styled.button<{ disabled?: boolean }>`
  background: ${(props) => (props.disabled ? "#F1F1F1" : "var(--primary)")};
  color: ${(props) => (props.disabled ? "#ABABAB" : "#F1F1F1")};
  border-radius: 8px;
  border: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 46px;
  padding-right: 46px;
  cursor: pointer;
`;

export default SubmitButton;
