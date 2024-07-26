import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import usePaginateUser from "../hooks/usePaginateUser";
import {
  detectStyleBaseStatus,
  detectTextBaseStatus,
} from "../constants/users";

const Table = styled.table`
  width: 100%;

  display: table;
`;
const Td = styled.td<{ status?: string | null }>`
  flex: 1;
  padding-left: 24px;
  &:last-child span {
    ${({ status }) =>
      status &&
      detectStyleBaseStatus[status as keyof typeof detectStyleBaseStatus]};
    display: inline-block;
    padding: 4px 8px 4px 8px;
    font-size: 12px;
    font-weight: 600;
    border-radius: 33px;
  }
`;

const Tr = styled.tr<{ isLast?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: ${(props) => (props.isLast ? "none" : "1px solid #e6e6e6")};
`;

const Th = styled.th`
  flex: 1;
  padding-left: 24px;
  text-align: left;
`;

const Tbody = styled.tbody`
  color: var(--primary);
  width: 100%;
  tr {
    cursor: pointer;
  }
`;

const Thead = styled.thead`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #fafafa;
`;
const Title = styled.div`
  padding: 24px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  min-height: 380px;
`;

const AddButton = styled(Link)`
  color: #ffffff;
  background-color: var(--primary);
  border-radius: 10px;
  padding: 7px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
const Span = styled.span``;

const UsersTable = () => {
  const { currentUsers: users } = usePaginateUser();
  const navigate = useNavigate();

  return (
    <Container>
      <Title>
        <Span>Items</Span>
        <AddButton to={"/list/create"}>
          <Span>Add New Item</Span> <Span>+</Span>
        </AddButton>
      </Title>
      <Table>
        <Thead>
          <Tr>
            <Th>Item</Th>
            <Th>Name</Th>
            <Th>Username</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr
              onClick={() => navigate(`/list/update/${user.id}`)}
              key={index}
              isLast={index === users.length - 1}
            >
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.userName}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
              <Td status={user.status}>
                <span>
                  {
                    detectTextBaseStatus[
                      user.status as keyof typeof detectTextBaseStatus
                    ]
                  }
                </span>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  );
};

export default UsersTable;
