import styled from 'styled-components';

export const Container = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    animation: rotate_loading 2s linear infinite;
    transform-origin: 50% 50%;
  }

  @keyframes rotate_loading {
    100% {
      transform: rotate(360deg);
    }
  }
`;
