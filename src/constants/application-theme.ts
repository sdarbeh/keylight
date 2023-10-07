import { ApplicationThemeState } from 'redux-store/application-theme';

export type ModeColor = 'alpha' | 'bravo' | 'medium' | 'charlie' | 'card';
export type GlobalColor = 'error' | 'red' | 'warn' | 'success' | 'gold' | 'white' | 'black';
export type AppColor =
  | 'alpha'
  | 'bravo'
  | 'medium'
  | 'charlie'
  | 'theme'
  | 'card'
  | 'error'
  | 'red'
  | 'warn'
  | 'success'
  | 'gold'
  | 'white'
  | 'black';

export interface ApplicationTheme extends Record<ModeColor, string> {
  currentThemeColor: string;
  currentThemeColorHover: string;
  activeKeylight: string;
}

/**
 * Default application theme redux state.
 */
export const DEFAULT_APPLICATION_THEME_STATE: ApplicationThemeState = Object.freeze({
  color: 'mosiac',
  size: 'regular',
  keylight: 'rgb(255, 248, 240)',
  brightness: 100,
  isKeylightActive: false,
});

/**
 * Application theme colors.
 */
export const MODE_COLORS: Record<ModeColor, string> = Object.freeze({
  alpha: 'rgb(15, 25, 35)',
  bravo: 'rgb(40, 50, 60)',
  medium: 'rgb(155, 165, 175)',
  charlie: 'rgb(255, 255, 255)',
  card: 'rgb(30, 40, 50)',
});

/**
 * Application global colors.
 */
export const GLOBAL_COLORS: Record<GlobalColor, string> = Object.freeze({
  error: 'rgb(199,0,57)',
  red: 'rgb(255,0,0)',
  warn: 'rgb(255,204,0)',
  success: 'rgb(75,181,67)',
  gold: 'rgb(212,175,55)',
  white: 'rgb(230, 220, 210)',
  black: 'rgb(0,0,0)',
});
