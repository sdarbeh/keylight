import React, { FC, useState } from 'react';
import { Button, Slider } from '@mui/material';
import {
  AcUnit,
  BrightnessLow,
  LightMode,
  LocalFireDepartment,
  PowerSettingsNew,
} from '@mui/icons-material';
import { useApplicationTheme } from 'hooks';
import { kelvinToRGB } from 'utils/helpers';
import { Link } from 'react-router-dom';
import ControlCenterWrapper from './control-center.styled';

export interface ControlCenterProps {}

const minRgb = kelvinToRGB(2900);
const maxRgb = kelvinToRGB(7000);

const ControlCenter: FC<ControlCenterProps> = () => {
  const { activeBrightness, isKeylightActive, setKeyLight, setBrightness, toggleKeylight } =
    useApplicationTheme();
  const [color, setColor] = useState({
    temperature: 6000,
    rgb: kelvinToRGB(6000),
  });

  const handleTemperatureChange = (value: number) => {
    const rgb = kelvinToRGB(value);
    setColor({ ...color, temperature: value, rgb });
    setKeyLight(rgb);
  };

  const handleBrightnessChange = (value: number) => {
    setBrightness(value);
  };

  return (
    <ControlCenterWrapper
      rgb={{
        active: color.rgb,
        min: minRgb,
        max: maxRgb,
      }}
      className="control-center p5 ui-bg-color-bravo"
      data-testid="ControlCenter"
    >
      <div className="mb5">
        <div className="ui-display-flex ui-items-center">
          <Button
            className="keylight-power-button p3"
            variant={isKeylightActive ? 'contained' : 'outlined'}
            aria-label="Power"
            onClick={() => toggleKeylight()}
          >
            <PowerSettingsNew />
          </Button>
          <div className="ml4">
            <h1 className="ui-font-jumbo">Control Center</h1>
            <span className="ui-font-xsmall ui-color-medium">{`${color.temperature}K at ${activeBrightness}%`}</span>
          </div>
        </div>
        <div className="mt9 slider-container ui-display-flex ui-items-center ui-justify-between">
          <button
            id="decreaseTemp"
            type="button"
            aria-label="Decrease temperature"
            disabled={color.temperature === 2900}
            onClick={() => {
              if (color.temperature !== 2900) {
                handleTemperatureChange(color.temperature - 50);
              }
            }}
          >
            <LocalFireDepartment />
          </button>
          <div className="slider-wrapper">
            <div className="mv7 color-slider-content">
              <Slider
                size="small"
                min={2900}
                max={7000}
                step={50}
                track={false}
                aria-label="Small"
                valueLabelDisplay="auto"
                value={color.temperature}
                onChange={(_, value) => handleTemperatureChange(value as number)}
              />
            </div>
          </div>
          <button
            id="increaseTemp"
            type="button"
            aria-label="Increase temperature"
            disabled={color.temperature === 7000}
            onClick={() => {
              if (color.temperature !== 7000) {
                handleTemperatureChange(color.temperature + 50);
              }
            }}
          >
            <AcUnit />
          </button>
        </div>
        <div className="mt5 slider-container ui-display-flex ui-items-center ui-justify-between">
          <button
            id="decreaseBrightness"
            type="button"
            aria-label="Decrease brightness"
            disabled={activeBrightness === 1}
            onClick={() => {
              if (activeBrightness !== 1) {
                handleBrightnessChange(activeBrightness - 1);
              }
            }}
          >
            <BrightnessLow />
          </button>
          <div className="slider-wrapper">
            <div className="mv7 brightness-slider-content">
              <Slider
                size="small"
                min={1}
                max={100}
                step={1}
                track={false}
                aria-label="Small"
                valueLabelDisplay="auto"
                value={activeBrightness}
                getAriaValueText={(value) => `${value}%`}
                onChange={(_, value) => handleBrightnessChange(value as number)}
              />
            </div>
          </div>
          <button
            id="increaseBrightness"
            type="button"
            aria-label="Increase brightness"
            disabled={activeBrightness === 100}
            onClick={() => {
              if (activeBrightness !== 100) {
                handleBrightnessChange(activeBrightness + 1);
              }
            }}
          >
            <LightMode />
          </button>
        </div>
      </div>
      <div className="disclaimer ui-display-center ui-font-xsmall ui-color-medium">
        <Link
          to="https://www.goodridge.io/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Navigate to Goodridge.io"
        >
          Developed by Goodridge.io
        </Link>
      </div>
    </ControlCenterWrapper>
  );
};

export default ControlCenter;
