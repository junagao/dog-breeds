import styled from 'styled-components';

const SpinnerDiv = styled.div`
  border: 0.25rem solid #f3f3f3;
  border-radius: 50%;
  border-top: 0.25rem solid #777;
  width: 2rem;
  height: 2rem;
  animation: spin 0.75s linear infinite;
  margin: 0 auto;
  margin-top: 2rem;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default SpinnerDiv;
