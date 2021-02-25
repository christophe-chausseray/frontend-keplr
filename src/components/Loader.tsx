import styled, { css, keyframes } from 'styled-components';
import { Spinner3 } from '@styled-icons/evil/Spinner3';
import { CustomThemedProps } from './../themes';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loadingAnimation = css`
  ${loading} 1.5s infinite;
`;

const Loader = styled(Spinner3)`
  width: 10%;
  display: flex;
  margin-top: 10%;
  margin-left: auto;
  margin-right: auto;
  color: ${({ theme }: CustomThemedProps) => theme.header};
  animation: ${loadingAnimation};
`;

export default Loader;
