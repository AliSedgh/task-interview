import TitlePage from "../components/TitlePage";
import FibonacciForm from "../components/FibonacciForm";
import { Container, FormContainer } from "../components/FormContainer";

const Fibonacci = () => {
  return (
    <div>
      <TitlePage boldText="Fibonacci" />
      <FormContainer>
        <Container>
          <FibonacciForm />
        </Container>
      </FormContainer>
    </div>
  );
};

export default Fibonacci;
