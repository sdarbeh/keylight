import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux-store';
import { ApplicationThemeState, setApplicationTheme } from 'redux-store/application-theme';

/**
 * Custom React hook for accessing application theme-related state and actions.
 * @returns Object containing size, color, and mode properties.
 */
const Hook = () => {
  const reduxState: ApplicationThemeState = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return {
    activeKeylight: reduxState.keylight,
    setKeyLight: (color: string) => {
      dispatch(setApplicationTheme.keylight(color));
    },
    activeBrightness: reduxState.brightness,
    setBrightness: (brightness: number) => {
      dispatch(setApplicationTheme.brightness(brightness));
    },
    isKeylightActive: reduxState.isKeylightActive,
    toggleKeylight: (state?: boolean) => {
      dispatch(setApplicationTheme.isKeylightActive(state || !reduxState.isKeylightActive));
    },
  };
};

export default Hook;
