import { getStorage, retrieveReduxState, setStorage } from 'utils/storage';
import { STORAGE_KEYS } from 'constants/application';
import { DEFAULT_APPLICATION_THEME_STATE } from 'constants/application-theme';
import { ApplicationThemeEnum, ApplicationThemeAction, ApplicationThemeState } from '.';

/**
 * Interface representing an action with the type and application theme state.
 */
interface Action {
  payload: any;
  type: ApplicationThemeAction;
}

/**
 * Reducer function for application theme state.
 * @param {ApplicationThemeState} state - Current state of the application theme.
 * @param {Action} action - Action object containing the type and corresponding payload.
 * @returns {ApplicationThemeState} Updated state of the application theme.
 */
const reducer = (state: ApplicationThemeState, action: Action): ApplicationThemeState => {
  const storage = getStorage(STORAGE_KEYS.THEME, 'local');

  const themeState = {
    ...DEFAULT_APPLICATION_THEME_STATE,
  };

  Object.values(ApplicationThemeEnum).forEach((name) => {
    const retrieved = retrieveReduxState({
      storage,
      state,
      name,
    });
    if (retrieved) {
      themeState[name] = retrieved as never;
    }
  });

  const handleSetState = (type: ApplicationThemeAction, payload: any) => {
    const newState = {
      ...themeState,
      [type]: payload,
    };

    setStorage(STORAGE_KEYS.THEME, newState, 'local');
    return newState;
  };

  switch (action.type) {
    case 'keylight':
    case 'brightness':
    case 'isKeylightActive':
      return handleSetState(action.type, action.payload);
    default:
      return themeState;
  }
};

export default reducer;
