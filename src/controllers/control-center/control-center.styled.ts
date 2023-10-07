import styled from 'styled-components';

interface Styled {
  rgb: {
    active: string;
    min: string;
    max: string;
  };
}

export default styled.div<Styled>`
  border-radius: 20px;
  overflow: hidden;
  .keylight-power-button {
    height: 30px;
    width: 30px;
  }
  .slider-container {
    width: 100%;
    height: 25px;
    svg {
      opacity: 0.7;
    }
  }
  .slider-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    .MuiSlider-rail {
      height: 12px;
    }
    .MuiSlider-thumb {
      height: 18px;
      width: 18px;
    }
  }
  .color-slider-content {
    width: 100%;
    .MuiSlider-root {
      color: ${(p) => p.rgb.active};
    }
    .MuiSlider-rail {
      background: ${(p) => `linear-gradient(to right, ${p.rgb.min}, ${p.rgb.max})`};
    }
  }
  .brightness-slider-content {
    width: 100%;
    .MuiSlider-root {
      color: ${(p) => p.theme.activeKeylight};
    }
    .MuiSlider-rail {
      background: ${(p) => `linear-gradient(to right, rgb(0,0,0), ${p.rgb.active})`};
    }
  }
  svg {
    width: 22px;
    height: 22px;
  }
  .disclaimer {
    opacity: 0.7;
  }
`;
