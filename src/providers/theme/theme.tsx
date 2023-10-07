import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import { ApplicationTheme, GLOBAL_COLORS, MODE_COLORS } from 'constants/application-theme';
import React, { ReactNode } from 'react';
import { useApplicationTheme } from 'hooks';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { darkenRGB } from 'utils/helpers';

/**
 * Global css styling
 */
const GlobalStyle = createGlobalStyle<{}>`
  :root {
    /* Color variables */
    --color-theme: ${(p) => p.theme.currentThemeColor};
    --color-keylight: ${(p) => p.theme.activeKeylight};

    --color-error: ${GLOBAL_COLORS.error};
    --color-red: ${GLOBAL_COLORS.red};
    --color-warn: ${GLOBAL_COLORS.warn};
    --color-success: ${GLOBAL_COLORS.success};
    --color-gold: ${GLOBAL_COLORS.gold};
    --color-white: ${GLOBAL_COLORS.white};
    --color-black: ${GLOBAL_COLORS.black};

    --color-alpha: ${(p) => p.theme.alpha};
    --color-bravo: ${(p) => p.theme.bravo};
    --color-medium: ${(p) => p.theme.medium};
    --color-charlie: ${(p) => p.theme.charlie};
    --color-card: ${(p) => p.theme.card};

    --color-modal: rgba(0, 0, 0, 0.5);

    /* Spacing variables */
    --item-size-0: 0px;
    --item-size-1: 4px;
    --item-size-2: 8px;
    --item-size-3: 10px;
    --item-size-4: 14px;
    --item-size-5: 18px;
    --item-size-6: 22px;
    --item-size-7: 24px;
    --item-size-8: 28px;
    --item-size-9: 34px;

    --opacity-disabled: 0.7;
  }
  body {
    background-color: var(--color-alpha);
    color: var(--color-charlie);
  }
  ::-webkit-scrollbar-track { 
    background-color: var(--color-alpha);
  }
  ::-webkit-scrollbar-thumb { 
    background-color: var(--color-bravo);
    &:hover {
      background-color: var(--color-theme);
    }
  }
  ::selection { 
    background-color: var(--color-theme);
  }
  /* ATOMICS */

  /* Color classes */
  .ui-color-theme { color: var(--color-theme); }
  .ui-bg-color-theme { background-color: var(--color-theme); }
  .ui-border-color-theme { border-color: var(--color-theme); }

  .ui-color-keylight { color: var(--color-keylight); }
  .ui-bg-color-keylight { background-color: var(--color-keylight); }
  .ui-border-color-keylight { border-color: var(--color-keylight); }

  .ui-color-success { color: var(--color-success); }
  .ui-bg-color-success { background-color: var(--color-success); }
  .ui-border-color-success { border-color: var(--color-success); }

  .ui-color-gold { color: var(--color-gold); }
  .ui-bg-color-gold { background-color: var(--color-gold); }
  .ui-border-color-gold { border-color: var(--color-gold); }

  .ui-color-white { color: var(--color-white); }
  .ui-bg-color-white { background-color: var(--color-white); }
  .ui-border-color-white { border-color: var(--color-white); }

  .ui-color-black { color: var(--color-black); }
  .ui-bg-color-black { background-color: var(--color-black); }
  .ui-border-color-black { border-color: var(--color-black); }

  .ui-color-alpha { color: var(--color-alpha); }
  .ui-bg-color-alpha { background-color: var(--color-alpha); }
  .ui-border-color-alpha { border-color: var(--color-alpha); }

  .ui-color-bravo { color: var(--color-bravo); }
  .ui-bg-color-bravo { background-color: var(--color-bravo); }
  .ui-border-color-bravo { border-color: var(--color-bravo); }

  .ui-color-medium { color: var(--color-medium); }
  .ui-bg-color-medium { background-color: var(--color-medium); }
  .ui-border-color-medium { border-color: var(--color-medium); }

  .ui-color-charlie { color: var(--color-charlie); }
  .ui-bg-color-charlie { background-color: var(--color-charlie); }
  .ui-border-color-charlie { border-color: var(--color-charlie); }

  .ui-color-card { color: var(--color-card); }
  .ui-bg-color-card { background-color: var(--color-card); }
  .ui-border-color-card { border-color: var(--color-card); }
`;

export interface ApplicationThemeProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ApplicationThemeProviderProps> = ({ children }) => {
  const { isKeylightActive, activeKeylight, activeBrightness } = useApplicationTheme();

  const appTheme: ApplicationTheme = {
    ...MODE_COLORS,
    currentThemeColorHover: '',
    activeKeylight: isKeylightActive
      ? darkenRGB(activeKeylight, 100 - activeBrightness)
      : 'rgb(0,0,0)',
    currentThemeColor: 'rgb(6, 95, 207)',
  };

  const muiTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: appTheme.currentThemeColor,
      },
      background: {
        default: appTheme.bravo,
      },
      text: {
        primary: appTheme.charlie,
      },
    },
    typography: {
      fontFamily: 'Montserrat, sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          textPrimary: appTheme.charlie,
          root: appTheme.charlie,
          containedPrimary: appTheme.charlie,
        },
      },
      MuiTooltip: {
        styleOverrides: {
          popper: {
            zIndex: 99999,
          },
          tooltip: {
            backgroundColor: appTheme.medium,
            zIndex: 99999,
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          root: {
            zIndex: 99999,
          },
          paper: {
            backgroundColor: appTheme.bravo,
          },
        },
      },
    },
  });

  return (
    <StyledThemeProvider theme={appTheme}>
      <GlobalStyle />
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </StyledThemeProvider>
  );
};

export default Provider;
