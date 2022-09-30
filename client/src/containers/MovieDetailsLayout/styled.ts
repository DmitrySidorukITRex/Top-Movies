import styled from 'styled-components';

export const Layout = styled.div`
  min-height: calc(100vh - 87px);
  padding: 30px 150px;
  background-color: #1f1f1f;
  color: #fff;
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 2px;
`;

export const Subtitle = styled.div`
  color: rgba(255, 255, 255, 0.7);
  margin: 10px 0;
  letter-spacing: 1px;
`;

export const Description = styled.div`
  max-width: 960px;
  margin-top: 10px;
  line-height: 24px;
  font-size: 16;
  font-weight: 600;
  letter-spacing: 1px;

  div {
    padding: 10px 0;

    &:not(:last-child) {
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
`;

export const Link = styled.span`
  color: #5799ef;

  &:hover {
    text-decoration: underline;
  }
`;
