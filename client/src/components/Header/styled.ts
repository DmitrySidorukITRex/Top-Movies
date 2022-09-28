import styled from 'styled-components';

interface NavLinkProps {
  $isActive: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 150px;
  background-color: #1a1a1a;
  color: #fff;
`;

export const Logo = styled.div`
  font-size: 40px;
  letter-spacing: 10px;
`;

export const Navigation = styled.div`
  flex: 1;
  text-align: center;
  letter-spacing: 2px;
`;

export const NavLink = styled.a<NavLinkProps>`
  color: ${({ $isActive }) => ($isActive ? '#f60' : '#fff')};
  cursor: pointer;
  margin-right: 20px;
`;
