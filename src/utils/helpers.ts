/**
 * Delays the execution for the specified number of milliseconds.
 *
 * @param {number} milliseconds - The number of milliseconds to delay.
 * @returns A promise that resolves after the delay.
 */
export const delay = (milliseconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
};

/**
 * Converts an RGB color string to an RGBA color string by adding an alpha value.
 *
 * @param {string} rgb - The RGB color string in the format "rgb(r, g, b)".
 * @param {number} alpha - The alpha value (opacity) to be added (between 0 and 1).
 * @returns {string} The RGBA color string in the format "rgba(r, g, b, alpha)".
 * @throws {Error} If the input is not a valid RGB string or the alpha value is out of range.
 */
export const rgbToRgba = (rgb: string, alpha: number): string => {
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  if (!match || alpha < 0 || alpha > 1) {
    throw new Error('Invalid RGB string or alpha value.');
  }

  const [, red, green, blue] = match;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

/**
 * Darkens an RGB color represented as a string.
 *
 * @param {string} rgb - The RGB color string in the format "rgb(r, g, b)".
 * @param {number} percentage - The percentage by which to darken the color (between 0 and 100).
 * @returns {string} The darkened RGB color as a string in the format "rgb(r, g, b)".
 * @throws {Error} If the input is not a valid RGB color string or if the percentage is out of range.
 */
export const darkenRGB = (rgb: string, percentage: number): string => {
  if (percentage < 0 || percentage > 100) {
    throw new Error('Percentage should be between 0 and 100.');
  }

  // Extract the RGB values from the string
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  if (!match) {
    throw new Error('Invalid RGB color string.');
  }

  const [, red, green, blue] = match.map(Number);

  // Darken the RGB values
  const darkenedRed = Math.max(0, red - (red * percentage) / 100);
  const darkenedGreen = Math.max(0, green - (green * percentage) / 100);
  const darkenedBlue = Math.max(0, blue - (blue * percentage) / 100);

  // Return the darkened RGB color as a string
  return `rgb(${Math.round(darkenedRed)}, ${Math.round(darkenedGreen)}, ${Math.round(
    darkenedBlue,
  )})`;
};

/**
 * Converts a Kelvin temperature to an RGB color.
 *
 * @param {number} kelvin - The Kelvin temperature to convert to RGB.
 * @returns The RGB color in the format "rgb(255, 255, 255)".
 */
export const kelvinToRGB = (kelvin: number) => {
  // Temperature bounds
  const minTemperature = 1000;
  const maxTemperature = 40000;

  // Clamp the temperature within the bounds
  const temperature = Math.max(minTemperature, Math.min(maxTemperature, kelvin));

  let red;
  let green;
  let blue;

  if (temperature <= 6600) {
    red = 255;
    green = 99.4708025861 * Math.log(temperature / 100) - 161.1195681661;
    blue =
      temperature <= 1900 ? 0 : 138.5177312231 * Math.log(temperature / 100 - 10) - 305.0447927307;
  } else {
    red = 329.698727446 * (temperature / 100 - 60) ** 0.1332047592;
    green = 288.1221695283 * (temperature / 100 - 60) ** 0.0755148492;
    blue = 255;
  }

  // Convert to integer values
  red = Math.min(255, Math.max(0, Math.round(red)));
  green = Math.min(255, Math.max(0, Math.round(green)));
  blue = Math.min(255, Math.max(0, Math.round(blue)));

  return `rgb(${red}, ${green}, ${blue})`;
};
