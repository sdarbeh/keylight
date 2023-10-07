import styled from 'styled-components';

export default styled.div`
  position: relative;
  header {
    border-bottom: 1px solid var(--color-card);
    height: var(--item-size-header);
  }
  .MuiButtonBase-root {
    padding: var(--item-size-1) var(--item-size-4);
    border-radius: 25px;
  }
  .sub-header-left-container {
    .button,
    button,
    link {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
    svg {
      width: 30px;
      height: 30px;
    }
  }
  .MuiLinearProgress-root {
    height: var(--item-size-1);
    border-radius: 20px;
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
  }
`;
