import styled from 'styled-components';

export const Layout = styled.div`
  min-height: calc(100vh - 87px);
  padding: 30px 150px;
  background-color: #1f1f1f;
  color: #fff;
`;

export const Director = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

export const Info = styled.div`
  margin-left: 60px;
  padding-left: 60px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

export const InfoItem = styled.div`
  display: flex;
  padding: 15px 0;
  letter-spacing: 1px;
  padding-right: 30px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const Field = styled.div`
  font-weight: 600;
  width: 150px;

  &.link {
    color: #5799ef;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;
