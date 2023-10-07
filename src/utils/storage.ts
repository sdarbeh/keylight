type StorageType = 'cookie' | 'local';

/**
 * Get the value of a cookie by its name.
 * @param {string} name - The name of the cookie.
 * @returns {string | null} The value of the cookie, or null if the cookie doesn't exist.
 */
export const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split(';').map((cookie) => cookie.trim());

  let foundCookie = null;

  cookies.some((cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      foundCookie = decodeURIComponent(cookieValue);
      return true; // Stop iteration
    }
    return false;
  });

  return foundCookie;
};

/**
 * Add a new cookie with the specified name, value, and optional options.
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value to be stored in the cookie.
 * @param {number} [expiresInDays] - The number of days after which the cookie will expire.
 * @param {string} [path] - The path for which the cookie is valid.
 */
export const setCookie = (
  name: string,
  value: string,
  expiresInDays: number = 30,
  path: string = '/',
): void => {
  const date = new Date();
  date.setTime(date.getTime() + expiresInDays * 24 * 60 * 60 * 1000);

  const expires = `expires=${date.toUTCString()}`;
  const cookieValue = `${encodeURIComponent(value)}${
    expiresInDays ? `; ${expires}` : ''
  }; path=${path}`;
  document.cookie = `${name}=${cookieValue}`;
};

/**
 * Remove a cookie with the specified name.
 * @param {string} name - The name of the cookie to remove.
 */
export const removeCookie = (name: string): void => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

/**
 * Storage methods for different storage types.
 */
const storageMethods = {
  cookie: {
    get: getCookie,
    set: setCookie,
    remove: removeCookie,
  },
  local: {
    get: localStorage.getItem.bind(localStorage),
    set: localStorage.setItem.bind(localStorage),
    remove: localStorage.removeItem.bind(localStorage),
  },
};

/**
 * Serializes value and sets it to provided storage type.
 */
export const setStorage = (name: string, value: any, type: StorageType, options?: any) => {
  const isProd = process.env.NODE_ENV === 'production';
  const storage = storageMethods[type];
  const serializedValue = JSON.stringify(value);

  storage.set(name, serializedValue, {
    expires: 365,
    secure: isProd,
    ...options,
  });
};

/**
 * Finds storage value and parses the retrieved value if it is JSON-formatted.
 */
export const getStorage = (name: string, type: StorageType) => {
  const value = storageMethods[type].get(name);

  try {
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    return undefined;
  }
};

/**
 * Removes a storage value.
 */
export const removeStorage = (name: string, type: StorageType) => {
  storageMethods[type].remove(name);
};

/**
 * Retrieves the state from storage, state, or default object.
 */
export const retrieveReduxState = (args: { storage?: any; state?: any; name: string }): any => {
  // Check storage
  if (args.storage && args.storage[args.name] !== undefined) {
    return args.storage[args.name];
  }

  // Check state
  if (args.state && args.state[args.name] !== undefined) {
    return args.state[args.name];
  }

  return undefined;
};
