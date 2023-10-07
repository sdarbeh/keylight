import { MEDIA_BREAKPOINTS } from 'constants/application';
import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  .palette {
    position: absolute;
    right: 20px;
    bottom: 20px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    padding: var(--item-size-2);
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .MuiPaper-root {
    background: unset;
    background-color: unset;
    box-shadow: unset;
  }
  .MuiBackdrop-root {
    background-color: unset;
  }
  @media (min-width: ${MEDIA_BREAKPOINTS.MEDIUM}) {
    .control-center {
      min-width: 50vh;
    }
  }
`;
