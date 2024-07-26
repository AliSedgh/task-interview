import styled from "@emotion/styled";
import { NavLink, useLocation } from "react-router-dom";

const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid #eaeaea;
`;

const Nav = styled.nav`
  width: 100%;
  padding: 0px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  list-style: none;
  gap: 1rem;
  padding: 0px;
`;

const Li = styled.li<{ active: boolean }>`
  padding: 1rem;
  border-bottom: 2px solid #3b3b3b;
  border-bottom-color: ${(props) => (props.active ? "#3b3b3b" : "transparent")};
  color: ${(props) => (props.active ? "var(--primary)" : "var(--secondary)")};
  font-weight: ${(props) => (props.active ? "600" : "400")};
`;

const navs = [
  {
    label: "List item",
    path: "/list",
  },
  {
    label: "Fibonacci",
    path: "/fibonacci",
  },
  {
    label: "Collatz Conjecture",
    path: "/collatz",
  },
];

const HeaderComponent = () => {
  const pathname = useLocation().pathname;
  return (
    <Header>
      <Nav>
        <Ul>
          {navs.map((nav) => (
            <Li active={pathname.includes(nav.path)} key={nav.label}>
              <NavLink to={nav.path}>{nav.label}</NavLink>
            </Li>
          ))}
        </Ul>
      </Nav>
    </Header>
  );
};

export default HeaderComponent;
