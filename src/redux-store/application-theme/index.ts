/**
 * Application theme action type.
 */
export type ApplicationThemeAction = 'keylight' | 'brightness' | 'isKeylightActive';

/**
 * Application theme enum.
 */
export enum ApplicationThemeEnum {
  KEYLIGHT = 'keylight',
  BRIGHTNESS = 'brightness',
  IS_KEYLIGHT_ACTIVE = 'isKeylightActive',
}

/**
 * Application theme state interface.
 */
export interface ApplicationThemeState {
  keylight: string;
  brightness: number;
  isKeylightActive: boolean;
}

/**
 * Action creator for application theme actions.
 * @template T - The type of the action.
 * @param {T} type - The type of the action.
 * @returns {ActionCreator<T>} The action creator function.
 */
type ActionCreator<T extends ApplicationThemeAction> = (payload: any) => { type: T; payload: any };

/**
 * Object containing action creators for application theme actions.
 */
export const setApplicationTheme: Record<
  ApplicationThemeAction,
  ActionCreator<ApplicationThemeAction>
> = {
  keylight: (color: string) => ({ type: 'keylight', payload: color }),
  brightness: (number: number) => ({ type: 'brightness', payload: number }),
  isKeylightActive: (state: boolean) => ({ type: 'isKeylightActive', payload: state }),
};
