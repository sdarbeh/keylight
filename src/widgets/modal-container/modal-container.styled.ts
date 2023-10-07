import { MEDIA_BREAKPOINTS } from 'constants/application';
import { AppColor } from 'constants/application-theme';
import styled from 'styled-components';

interface Props {
  backgroundColor: AppColor;
}

export default styled.div<Props>`
  .drawer-indicator span {
    width: 75px;
    height: var(--item-size-1);
    border-radius: 20px;
  }
  .modal-container-content,
  .MuiPaper-root {
    background-color: ${(p) => `var(--color-${p.backgroundColor})`};
    background-image: unset;
  }
  .modal-container-content-center,
  .modal-container-content-sub {
    @media (min-width: ${MEDIA_BREAKPOINTS.MEDIUM}) {
      max-width: 650px;
    }
  }
  /* Center */
  .modal-container-content-center {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    overflow: hidden;
    width: max-content;
  }
  /* Bottom modal */
  &.bottom-modal-container-wrapper .MuiPaper-root {
    border-radius: var(--item-size-6) var(--item-size-6) 0 0;
    overflow: hidden;
    @media (min-width: ${MEDIA_BREAKPOINTS.MEDIUM}) {
      border-radius: var(--item-size-2);
    }
  }
  /* Sub modal */
  .modal-container-content-sub {
    position: relative;
    height: 100%;
    &,
    .sub-header-container {
      top: 0;
      left: 0;
    }
    .sub-header-container {
      position: fixed;
      width: calc(100% - (var(--item-size-5) * 2));
    }
    @media (min-width: ${MEDIA_BREAKPOINTS.MEDIUM}) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      overflow: hidden;
      height: max-content;
      width: max-content;
    }
  }
  .sub-modal-container {
    width: 100%;
    height: 100%;
  }
  .sub-modal-content {
    padding-top: 75px;
    height: calc(100% - 75px);
    width: 100%;
    overflow-y: auto;
  }
`;
