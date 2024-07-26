import styled from "@emotion/styled";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  font-size: 48px;
  gap: 0.5rem;
`;

const Span = styled.span<{ isBold?: boolean }>`
  font-weight: ${(props) => (props.isBold ? "600" : "400")};
`;

interface IProps {
  boldText?: string;
  normalText?: string;
}

const TitlePage: React.FC<IProps> = ({ boldText = "", normalText = "" }) => {
  return (
    <Header>
      <Span isBold={true}>{boldText}</Span>
      <Span>{normalText}</Span>
    </Header>
  );
};

export default TitlePage;
