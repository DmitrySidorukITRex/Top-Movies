import styled from 'styled-components';

export const Card = styled.div`
  width: 180px;
  letter-spacing: 0.5px;
`;

export const Details = styled.div`
  visibility: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Image = styled.div`
  position: relative;

  &:hover {
    ${Details} {
      visibility: visible;
    }
  }
`;

export const Title = styled.div`
  margin: 5px 0;
  font-size: 14px;
  font-weight: 600;
`;
