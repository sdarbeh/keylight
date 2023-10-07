import styled, { css, keyframes } from 'styled-components';
import { BaseLoaderProps } from './types';

const ellipsisKeyframes = (from: string, to: string) => keyframes`
  from { transform: ${from}; }
  to { transform: ${to}; }
`;

interface StyledProps extends BaseLoaderProps {}

export default styled.div<StyledProps>`
  /* Ellipsis */
  .app-loader-ellipsis {
    display: inline-block;
    position: relative;
    cursor: wait;
    width: calc(16px * 5);

    div {
      position: absolute;
      top: 0;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    div:nth-child(1),
    div:nth-child(2) {
      left: calc(16px / 2);
      animation: ${ellipsisKeyframes('scale(0)', 'scale(1)')} 0.6s infinite;
    }

    div:nth-child(2),
    div:nth-child(3) {
      animation: ${ellipsisKeyframes('translate(0, 0)', 'translate(24px, 0)')} 0.6s infinite;
    }

    div:nth-child(3) {
      left: calc(16px * 2);
    }

    div:nth-child(4) {
      left: calc(16px * 3.5);
      animation: ${ellipsisKeyframes('scale(1)', 'scale(0)')} 0.6s infinite;
    }
  }

  /* Spinner */
  .app-loader-spinner {
    cursor: wait;

    .MuiCircularProgress-svg,
    .MuiCircularProgress-root {
      color: var(--color-${(p) => p.color});
    }
  }

  ${(p) =>
    (p.background || p.backgroundColor) &&
    css`
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    `}
`;
